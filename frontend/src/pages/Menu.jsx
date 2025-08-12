import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import FoodCard from '../components/FoodCard'

const Menu = () => {

  const{foods, searchQuery } = useAppContext()
  const [filteredFoods, setFilteredFoods] = useState([])

  useEffect(()=>{
    if(searchQuery.length > 0){
      setFilteredFoods(foods.filter(
        food => food.name.toLowerCase().includes(searchQuery.toLowerCase())
      ))} else{
        setFilteredFoods(foods)
      }
  },[foods,searchQuery])

  return (
    <div className='mt-16 flex flex-col'>
      <div className='flex flex-col items-end w-max'>
      <p className='text-2xl font-medium uppercase'>Menu</p>
      <div className='w-16 h-0.5 bg-pri,ary rounded-full'></div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
        {filteredFoods.filter((food)=>food.inStock).map((food,index)=>(
          <FoodCard key={index} food={food}/>
        ))}
      </div>

    </div>
  )
}

export default Menu
