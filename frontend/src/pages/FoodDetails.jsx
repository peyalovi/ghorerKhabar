import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import FoodCard from "../components/FoodCard";

const FoodDetails = () => {

    const {foods, navigate, currency, addToCart} = useAppContext()
    const {id} = useParams()
    const [relatedFoods, setRelatedFoods] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);

    const food = foods.find((item)=> item._id === id);

    useEffect(()=> {
      if(foods.length > 0){
        let foodsCopy = foods.slice();
          foodsCopy = foodsCopy.filter((item)=>food.category === item.category)
          setRelatedFoods(foodsCopy.slice(0,5))
      }
    }, [foods])

    useEffect(()=>{
      setThumbnail(food?.image[0] ? food.image[0] : null)
    },[food])


    return food && (
        <div className="mt-12">
            <p>
                <Link to={"/"}>Home</Link> /
                <Link to= {"/menu"}> Menu</Link> /
                <Link to={`/menu/${food.category.toLowerCase()}`}   > {food.category}</Link> /
                <span className="text-primary cursor-pointer"> {food.name}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {food.image.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={thumbnail} alt="Selected food" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{food.name}</h1>

                    <div className="flex items-center gap-0.5 mt-1">
                        {Array(5).fill('').map((_, i) => (
                           <img key={i} src={i<4 ? assets.star_icon : assets.star_dull_icon} className="md:w-4 w-3.5"/> //key={i} was added

                        ))}
                        <p className="text-base ml-2">(4)</p>
                    </div>

                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: {food.price}{currency}</p>
                        <p className="text-2xl font-medium">MRP: {food.offerPrice}{currency}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About Food</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {food.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button onClick={()=> addToCart(food._id)} className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                            Add to Cart
                        </button>
                        <button onClick={()=> {addToCart(food._id); navigate("cart")}} className="w-full py-3.5 cursor-pointer font-medium bg-primary text-white hover:bg-primary-dull transition" >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            {/*-----------Related foods----------- */ }
            <div className="flex flex-col items-center mt-20">
                    <div className="flex flex-col items-center w-max">
                      <p className="text-3xl font-medium">Related Foods</p>
                      <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 w-full">
                      {relatedFoods.filter((food)=>food.inStock).map((food, index)=>(
                        <FoodCard key={index} food={food} />
                        ))}
                    </div>
                    <button onClick={()=> {navigate('/menu'); scrollTo(0,0)}} className="mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded text-primary hover:bg-primary/10 transition"> See More</button>
            </div>
        </div>
    );
};

export default FoodDetails