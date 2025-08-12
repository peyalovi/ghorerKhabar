import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyFoods } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider =({children}) =>{

  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [isChef, setIsChef] = useState(false)
  const [showUserLogin, setShowUserLogin] = useState(false)
  const [foods, setFoods] = useState([])

  const[cartItems, setCartItems] = useState({})
  const[searchQuery, setSearchQuery] = useState({})

  //Fetch Chef status
  const fetchChef = async () => {
  try {
    const { data } = await axios.get('/api/chef/is-auth');
    if (data.success) {
      setIsChef(true);
      return true;
    } else {
      setIsChef(false);
      return false;
    }
  } catch (error) {
    setIsChef(false);
    return false;
  }
};

  //Fetch User Auth Status , User DATA and Cart Items
  const fetchUser = async ()=>{
    try {
      const { data } = await axios.get('api/user/is-auth');
      if (data.success){
        setUser(data.user)
        setCartItems(data.user.cartItems)
      }
    } catch (error){
        setUser(null)
    }
  }

  // Fetch All Foods
  const fetchFoods = async() =>{
     try {
      const { data } = await axios.get('/api/food/all')
      if(data.success){
        setFoods(data.foods)
      }else {
        toast.error(data.message)
      }
     }catch (error){
      toast.error(error.message)
     }
  };

  //Add Food to cart
  const addToCart = (itemId)=>{
    let cartData = structuredClone(cartItems);

    if(cartData[itemId]){
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1; 
    }
    setCartItems(cartData);
    toast.success("Added to Cart")
  }

  //Update Cart Item Quantity
  const updateCartItem = (itemId, quantity)=>{
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData)
    toast.success("Cart Updated")
  }

  //Remove Product from cart
  const removeFromCart = (itemId)=>{
    let cartData = structuredClone(cartItems);
    if(cartData[itemId]){
      cartData[itemId] -= 1;
      if(cartData[itemId] === 0){
        delete cartData[itemId];
      }
    }
    toast.success("Removed from Cart")
    setCartItems(cartData)
  }

  //Get Cart Item Count
    const getCartCount = ()=>{
      let totalCount = 0;
      for(const item in cartItems){
        totalCount += cartItems[item]
      }
      return totalCount;
    }

    //Get Cart Total Amount

    const getCartAmount = () =>{
      let totalAmount = 0;
      for (const items in cartItems){
        let itemInfo = foods.find((food)=> food._id === items);
        if(cartItems[items] > 0){
          totalAmount += itemInfo.offerPrice * cartItems[items]
        }
      }
      return Math.floor(totalAmount * 100) /100;
    }

  useEffect(() => {
  fetchUser();

  const init = async () => {
    await fetchChef();  // Fetch chef status but don't gate food fetching on it
    await fetchFoods(); // Always fetch food publicly
  };
  init();
}, []);

  // Update Database Cart Items
  useEffect(()=>{
    const updateCart = async ()=>{
      try {
        const { data } = await axios.post('/api/cart/update', {cartItems})
        if(!data.success){
          toast.error(data.message)
        }
      } catch(error) {
        toast.error(error.message)
      }
    }

    if(user){
      updateCart()
    }
  },[cartItems])


  const value = {navigate, user, setUser, setIsChef, isChef, showUserLogin, setShowUserLogin, foods, currency, addToCart, updateCartItem, removeFromCart, cartItems, searchQuery, setSearchQuery, getCartAmount, getCartCount, axios, fetchFoods, setCartItems
  }

   return <AppContext.Provider value={value}>
    {children}
   </AppContext.Provider>
}

export const useAppContext = ()=>{
  return useContext(AppContext)
}