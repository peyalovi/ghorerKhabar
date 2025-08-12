import React from "react";
import { assets, dummyFoods } from "../assets/assets";
import { useAppContext } from "../context/AppContext";


const FoodCard = ({food}) => {
    const { currency, addToCart, removeFromCart, cartItems, navigate} = useAppContext()


    return food && (
        <div onClick={()=> {navigate(`/foods/${food.category.toLowerCase()}/${food._id}`); scrollTo(0,0)}} className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-46 max-w-56 w-full">
            <div className="group cursor-pointer">
                    <img className="group-hover:scale-105 transition duration-200 w-full h-36 object-cover rounded-md" src={food.image[0]} alt={food.name}/>
            </div> {/* was updated for image resolution */}
            
            <div className="text-gray-500/60 text-sm cursor-pointer">
                <p>{food.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full cursor-pointer">{food.name}</p>
                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                            <img key={i} className="md:w-3.5 w3" src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt="" /> 
                    ))}
                    <p>({4})</p>
                </div>
                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-primary cursor-pointer">
                        {food.offerPrice}{currency}{" "} <span className="text-gray-500/60 md:text-sm text-xs line-through">{food.price}{currency}</span>
                    </p>
                    <div onClick={(e) => { e.stopPropagation();}} className="text-primary">
                        {!cartItems[food._id] ? (
                            <button className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 md:w-[80px] w-[64px] h-[34px] rounded cursor-pointer " onClick={() => addToCart(food._id)} >
                                <img src={assets.cart_icon} alt="cart_icon"/>
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/25 rounded select-none">
                                <button onClick={() => {removeFromCart(food._id)}} className="cursor-pointer text-md px-2 h-full" >
                                    -
                                </button>
                                <span className="w-5 text-center">{cartItems[food._id]}</span>
                                <button onClick={() => {addToCart(food._id)}} className="cursor-pointer text-md px-2 h-full" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;