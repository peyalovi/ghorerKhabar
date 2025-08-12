import logo from "./logo.png";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import food_list_icon from "./food_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./main_banner_bg.png";
import main_banner_bg_sm from "./main_banner_bg_sm.png";
import bottom_banner_image from "./bottom_banner_image.png";
import bottom_banner_image_sm from "./bottom_banner_image_sm.png";
import add_address_iamge from "./add_address_image.svg";
import main_dishes_image from "./main_dishes_image.png";
import meat_dishes_image from "./meat_dishes_image.png";
import fast_food_image from "./fast_food_image.png";
import vegetarian_image from "./vegetarian_image.png";
import soups_starters_image from "./soups_starters_image.png";
import snacks_image from "./snacks_image.png";
import desserts_image from "./desserts_image.png";
import potato_image_1 from "./biriyani.png";
import potato_image_2 from "./biriyani.png";
import potato_image_3 from "./biriyani.png";
import potato_image_4 from "./biriyani.png";
import tomato_image from "./biriyani.png";
import carrot_image from "./biriyani.png";
import apple_image from "./biriyani.png";
import amul_milk_image from "./biriyani.png";
import coca_cola_image from "./biriyani.png";
import brown_bread_image from "./biriyani.png";
import basmati_rice_image from "./biriyani.png";
import paneer_image from "./biriyani.png";
import orange_image from "./biriyani.png";
import pepsi_image from "./biriyani.png";
import wheat_flour_image from "./biriyani.png";
import cheese_image from "./biriyani.png";
import eggs_image from "./biriyani.png";
import spinach_image_1 from "./biriyani.png";
import onion_image_1 from "./biriyani.png";
import banana_image_1 from "./biriyani.png";
import mango_image_1 from "./biriyani.png";
import grapes_image_1 from "./biriyani.png";
import paneer_image_2 from "./biriyani.png";
import sprite_image_1 from "./biriyani.png";
import fanta_image_1 from "./biriyani.png";
import seven_up_image_1 from "./biriyani.png";
import top_ramen_image from "./biriyani.png";
import knorr_soup_image from "./biriyani.png";
import yippee_image from "./biriyani.png";
import maggi_oats_image from "./biriyani.png";
import butter_croissant_image from "./biriyani.png";
import chocolate_cake_image from "./biriyani.png";
import whole_wheat_bread_image from "./biriyani.png";
import vanilla_muffins_image from "./biriyani.png";
import quinoa_image from "./biriyani.png";
import brown_rice_image from "./biriyani.png";
import barley_image from "./biriyani.png";

export const assets = {
  logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  food_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg,
  main_banner_bg_sm,
  bottom_banner_image,
  bottom_banner_image_sm,
  add_address_iamge,
  box_icon,
};

export const categories = [
  {
    text: "Main Dishes",
    path: "maindishes",
    image: main_dishes_image,
    bgColor: "#FEF6DA",
  },
  {
    text: "Meat Dishes",
    path: "meatdishes",
    image: meat_dishes_image,
    bgColor: "#FEE0E0",
  },
  {
    text: "Fast Food",
    path: "fastfood",
    image: fast_food_image,
    bgColor: "#F0F5DE",
  },
  {
    text: "Vegetarian",
    path: "vegetarian",
    image: vegetarian_image,
    bgColor: "#E1F5EC",
  },
  {
    text: "Soups",
    path: "soups",
    image: soups_starters_image,
    bgColor: "#FEE6CD",
  },
  {
    text: "Snacks",
    path: "snacks",
    image: snacks_image,
    bgColor: "#E0F6FE",
  },
  {
    text: "Desserts & Sweets",
    path: "desserts",
    image: desserts_image,
    bgColor: "#F1E3F9",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Fastest Delivery",
    description: "Food delivered in under 30 minutes.",
  },
  {
    icon: leaf_icon,
    title: "Freshness Guaranteed",
    description: "Freshly cooked from home chefs.",
  },
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "Home made food at unbeatable prices.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by many happy customers.",
  },
];

export const dummyFoods = [
  // Main Dishes
  {
    _id: "gd46g23h",
    name: "Biriyani",
    category: "MainDishes",
    price: 140,
    offerPrice: 120,
    image: [potato_image_1, potato_image_2, potato_image_3, potato_image_4],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd47g34h",
    name: "Khichuri",
    category: "MainDishes",
    price: 100,
    offerPrice: 80,
    image: [tomato_image],
    description: [
      "Juicy and ripe",
      "Rich in Vitamin C",
      "Perfect for salads and sauces",
      "Farm fresh quality",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd48g45h",
    name: "Kacchi Biriyani",
    category: "MainDishes",
    price: 120,
    offerPrice: 100,
    image: [carrot_image],
    description: [
      "Sweet and crunchy",
      "Good for eyesight",
      "Ideal for juices and salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd49g56h",
    name: "Tehari",
    category: "MainDishes",
    price: 90,
    offerPrice: 80,
    image: [spinach_image_1],
    description: [
      "Rich in iron",
      "High in vitamins",
      "Perfect for soups and salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "gd50g67h",
    name: "Fried Rice",
    category: "MainDishes",
    price: 110,
    offerPrice: 100,
    image: [onion_image_1],
    description: [
      "Fresh and pungent",
      "Perfect for cooking",
      "A kitchen staple",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Meat Dishes
  {
    _id: "ek51j12k",
    name: "Chicken Curry",
    category: "Meatdishes",
    price: 70,
    offerPrice: 60,
    image: [apple_image],
    description: [
      "Crisp and juicy",
      "Rich in fiber",
      "Boosts immunity",
      "Perfect for snacking and desserts",
      "Organic and farm fresh",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek52j23k",
    name: "Mutton Curry",
    category: "Meatdishes",
    price: 80,
    offerPrice: 75,
    image: [orange_image],
    description: [
      "Juicy and sweet",
      "Rich in Vitamin C",
      "Perfect for juices and salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek53j34k",
    name: "Beef Curry",
    category: "Meatdishes",
    price: 80,
    offerPrice: 75,
    image: [banana_image_1],
    description: [
      "Sweet and ripe",
      "High in potassium",
      "Great for smoothies and snacking",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek54j45k",
    name: "Chicken Roast",
    category: "Meatdishes",

    price: 90,
    offerPrice: 80,
    image: [mango_image_1],
    description: [
      "Sweet and flavorful",
      "Perfect for smoothies and desserts",
      "Rich in Vitamin A",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek55j56k",
    name: "Chicken Rezala",
    category: "Meatdishes",
    price: 100,
    offerPrice: 90,
    image: [grapes_image_1],
    description: [
      "Fresh and juicy",
      "Rich in antioxidants",
      "Perfect for snacking and fruit salads",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Fast Food
  {
    _id: "ek56j67k",
    name: "Fried Chicken",
    category: "Fastfood",
    price: 70,
    offerPrice: 60,
    image: [amul_milk_image],
    description: [
      "Pure and fresh",
      "Rich in calcium",
      "Ideal for tea, coffee, and desserts",
      "Trusted brand quality",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek57j78k",
    name: "Burger",
    category: "Fastfood",
    price: 70,
    offerPrice: 60,
    image: [paneer_image],
    description: [
      "Soft and fresh",
      "Rich in protein",
      "Ideal for curries and snacks",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek58j89k",
    name: "French Fries",
    category: "Fastfood",
    price: 60,
    offerPrice: 50,
    image: [eggs_image],
    description: [
      "Farm fresh",
      "Rich in protein",
      "Ideal for breakfast and baking",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek59j90k",
    name: "Pizza",
    category: "Fastfood",
    price: 110,
    offerPrice: 100,
    image: [paneer_image_2],
    description: [
      "Soft and fresh",
      "Rich in protein",
      "Ideal for curries and snacks",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek60j01k",
    name: "Potato Wadges",
    category: "Fastfood",
    price: 90,
    offerPrice: 80,
    image: [cheese_image],
    description: [
      "Creamy and delicious",
      "Perfect for pizzas and sandwiches",
      "Rich in calcium",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Vegetarian
  {
    _id: "ek61j12k",
    name: "Alu Bhorta",
    category: "Vegetarian",
    price: 20,
    offerPrice: 15,
    image: [coca_cola_image],
    description: [
      "Refreshing and fizzy",
      "Perfect for parties and gatherings",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek62j23k",
    name: "Begun Bhorta",
    category: "Vegetarian",
    price: 30,
    offerPrice: 25,
    image: [pepsi_image],
    description: [
      "Chilled and refreshing",
      "Perfect for celebrations",
      "Best served cold",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek63j34k",
    name: "Shobji Bhuna",
    category: "Vegetarian",
    price: 50,
    offerPrice: 40,
    image: [sprite_image_1],
    description: [
      "Refreshing citrus taste",
      "Perfect for hot days",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek64j45k",
    name: "Vegetable Curry",
    category: "Vegetarian",
    price: 60,
    offerPrice: 50,
    image: [fanta_image_1],
    description: [
      "Sweet and fizzy",
      "Great for parties and gatherings",
      "Best served cold",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek65j56k",
    name: "Mixed Salad",
    category: "Vegetarian",
    price: 40,
    offerPrice: 30,
    image: [seven_up_image_1],
    description: [
      "Refreshing lemon-lime flavor",
      "Perfect for refreshing",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Soup & Starters
  {
    _id: "ek66j67k",
    name: "Lentil Soup",
    category: "Soups",
    price: 50,
    offerPrice: 45,
    image: [basmati_rice_image],
    description: [
      "Long grain and aromatic",
      "Perfect for biryani and pulao",
      "Premium quality",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek67j78k",
    name: "Chicken Soup",
    category: "Soups",
    price: 70,
    offerPrice: 60,
    image: [wheat_flour_image],
    description: [
      "High-quality whole wheat",
      "Soft and fluffy rotis",
      "Rich in nutrients",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek68j89k",
    name: "Vegetable Soup",
    category: "Soups",
    price: 70,
    offerPrice: 60,
    image: [quinoa_image],
    description: [
      "High in protein and fiber",
      "Gluten-free",
      "Rich in vitamins and minerals",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek69j90k",
    name: "Thai Soup",
    category: "Soups",
    price: 70,
    offerPrice: 60,
    image: [brown_rice_image],
    description: [
      "Whole grain and nutritious",
      "Helps in weight management",
      "Good source of magnesium",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek70j01k",
    name: "Corn Soup",
    category: "Soups",
    price: 80,
    offerPrice: 70,
    image: [barley_image],
    description: [
      "Rich in fiber",
      "Helps improve digestion",
      "Low in fat and cholesterol",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Snacks
  {
    _id: "bk01a24z",
    name: "Shingara 4pcs",
    category: "Snacks",
    price: 40,
    offerPrice: 35,
    image: [brown_bread_image],
    description: [
      "Soft and healthy",
      "Made from whole wheat",
      "Ideal for breakfast and sandwiches",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk02b30y",
    name: "Somucha 4pcs",
    category: "Snacks",
    price: 40,
    offerPrice: 35,
    image: [butter_croissant_image],
    description: [
      "Flaky and buttery",
      "Freshly baked",
      "Perfect for breakfast or snacks",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk03c31x",
    name: "Vegetable Pakora 4pcs",
    category: "Snacks",
    price: 40,
    offerPrice: 30,
    image: [chocolate_cake_image],
    description: [
      "Rich and moist",
      "Made with premium cocoa",
      "Ideal for celebrations and parties",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk04d32w",
    name: "Egg toast 3pcs",
    category: "Snacks",
    price: 50,
    offerPrice: 40,
    image: [whole_wheat_bread_image],
    description: [
      "Healthy and nutritious",
      "Made with whole wheat flour",
      "Ideal for sandwiches and toast",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk05e33v",
    name: "Alur Chop 5pcs",
    category: "Snacks",
    price: 25,
    offerPrice: 20,
    image: [vanilla_muffins_image],
    description: [
      "Soft and fluffy",
      "Perfect for a quick snack",
      "Made with real vanilla",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Desserts & Sweets
  {
    _id: "in01f25u",
    name: "Rasgolla 1Kg",
    category: "Desserts",

    price: 250,
    offerPrice: 220,
    image: [vegetarian_image],
    description: [
      "Instant and easy to cook",
      "Delicious taste",
      "Popular among kids and adults",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "in02g26t",
    name: "ChomChom 1kg",
    category: "Desserts",
    price: 260,
    offerPrice: 240,
    image: [top_ramen_image],
    description: [
      "Quick and easy to prepare",
      "Spicy and flavorful",
      "Loved by college students and families",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "in03h27s",
    name: "Mishti Doi",
    category: "Desserts",
    price: 200,
    offerPrice: 180,
    image: [knorr_soup_image],
    description: [
      "Convenient for on-the-go",
      "Healthy and nutritious",
      "Variety of flavors",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "in04i28r",
    name: "Rasmalai",
    category: "Desserts",
    price: 250,
    offerPrice: 220,
    image: [yippee_image],
    description: [
      "Non-fried noodles for healthier choice",
      "Tasty and filling",
      "Convenient for busy schedules",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "in05j29q",
    name: "Jilapi",
    category: "Desserts",
    price: 120,
    offerPrice: 100,
    image: [maggi_oats_image],
    description: [
      "Healthy alternative with oats",
      "Good for digestion",
      "Perfect for breakfast or snacks",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
];

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Ghorer",
    lastName: "Khabar",
    email: "user.ghorerkhabar@gmail.com",
    street: "Street 123",
    city: "Main City",
    state: "New State",
    zipcode: 123456,
    country: "Ban",
    phone: "1234567890",
  },
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        food: dummyFoods[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-07-25T07:17:46.018Z",
    updatedAt: "2025-07-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        food: dummyFoods[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        food: dummyFoods[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-07-25T07:17:13.068Z",
    updatedAt: "2025-07-25T07:17:13.068Z",
  },
];
