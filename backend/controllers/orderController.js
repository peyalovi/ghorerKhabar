import Food from "../models/Food.js";
import Order from "../models/Order.js";
import stripe from "stripe";
import User from "../models/User.js";

// Place Order COD: /api/order/cod
export const placeOrderCOD = async (req, res) => {
  try {
    const { items, address } = req.body;
    const userId = req.userId; // From auth middleware

    // Validate data
    if (!address || !items || items.length === 0) {
      return res.json({ success: false, message: "Invalid order data" });
    }

    // Calculate total amount using DB food prices
    let amount = 0;
    for (const item of items) {
      const food = await Food.findById(item.food);
      if (!food) continue;
      amount += food.offerPrice * item.quantity;
    }

    // Create and save the order
    await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "COD",
      isPaid: false
    });

    return res.json({ success: true, message: "Order Placed Successfully" });

  } catch (error) {
    console.error("Order Placement Error:", error);
    return res.json({ success: false, message: error.message });
  }
};

// Place Order Stripe: /api/order/stripe
export const placeOrderStripe = async (req, res) => {
  try {
    const { items, address } = req.body;
    const userId = req.userId; // From auth middleware
    const { origin } = req.headers;

    // Validate data
    if (!address || !items || items.length === 0) {
      return res.json({ success: false, message: "Invalid order data" });
    }

    let foodData = [];

    // Calculate total amount using DB food prices
    let amount = 0;
    for (const item of items) {
      const food = await Food.findById(item.food);
      foodData.push({
        name: food.name,
        price: food.offerPrice,
        quantity: item.quantity,
      });
      if (!food) continue;
      amount += food.offerPrice * item.quantity;
    }

    // Create and save the order
    const order = await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "Online",
      isPaid: true,
    });

    // clear cart after successful paid order
    await User.findByIdAndUpdate(userId, { cartItems: {} });

    //Stripe Gateway Initialize
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

    //create line items for stripe

    const line_items = foodData.map((item) => {
      return {
        price_data: {
          currency: "bdt",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      }
    })

    // create session
    const session = await stripeInstance.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${origin}/loader?next=my-orders`,
      cancel_url: `${origin}/cart`,
      metadata: {
        orderId: order._id.toString(),
        userId,
      }
    })

    return res.json({ success: true, url: session.url });
  } catch (error) {
    console.error("Order Placement Error:", error);
    return res.json({ success: false, message: error.message });
  }
}
// Stripe Webhooks to Verify Payments Action : /stripe
export const stripeWebhooks = async (request, response) => {
  // Stripe Gateway Initialize
  const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

  const sig = request.headers["stripe-signature"];
  let event;

  try {
    event = stripeInstance.webhooks.constructEvent(
      request.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    response.status(400.).send(`Webhook Error: ${error.message}`)
  }

  //Handle the Even
  switch (event.type) {
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;

      //Getting Session Metadata
      const session = await stripeInstance.checkout.sessions.list({
        payment_intent: paymentIntentId,
      })

      const { orderId, userId } = session.data[0].metadata;
      // Mark Payment as Paid
      await Order.findByIdAndUpdate(orderId, { isPaid: true })
      // Clear user cart
      await User.findByIdAndUpdate(userId, { cartItems: {} });
      break;
    }
    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;

      //Getting Session Metadata 
      const session = await stripeInstance.checkout.sessions.list({
        payment_intent: paymentIntentId,
      });

      const { orderId } = session.data[0].metadata;
      await Order.findByIdAndDelete(orderId);
      break;
    }
    default:
      console.error(`Unhandled event type ${event.type}`)
      break;
  }
  response.json({ received: true });
}

// Get Orders by User ID : /api/order/user
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Not authorized" });
    }

    const orders = await Order.find({
      userId,
      $or: [{ paymentType: "COD" }, { isPaid: true }]
    })
      .populate("items.food")
      .sort({ createdAt: -1 });

    res.json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//Get ALL Orders ( for chef) : /api/order/chef
export const getAllOrders = async (req, res) => {
  try {
    const chefId = req.userId;

    // Step 1: Get all food IDs created by this chef
    const chefFoods = await Food.find({ chef: chefId }).select("_id");
    const chefFoodIds = chefFoods.map(f => f._id.toString());

    // Step 2: Find orders where any item.food is in chefFoodIds
    const orders = await Order.find({
      "items.food": { $in: chefFoodIds },
      $or: [{ paymentType: "COD" }, { isPaid: true }]
    })
      .populate("items.food")
      .sort({ createdAt: -1 });

    // Step 3: For each order, filter items to only include this chef's foods
    const filteredOrders = orders.map(order => {
      const filteredItems = order.items.filter(item =>
        chefFoodIds.includes(item.food._id.toString())
      );

      // Recalculate amount for this chef only
      const chefAmount = filteredItems.reduce((total, item) => {
        return total + item.food.offerPrice * item.quantity;
      }, 0);

      return {
        ...order.toObject(),
        items: filteredItems,
        amount: chefAmount  // Now shows only chef's food value
      };
    });

    res.json({ success: true, orders: filteredOrders });
  } catch (error) {
    console.error("Chef Order Fetch Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};