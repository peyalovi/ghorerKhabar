import React from 'react'
import FoodCard from './FoodCard'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {
  const { foods } = useAppContext();
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
        {foods.filter((food)=> food.inStock).slice(0,5).map((food, index)=>(
          <FoodCard key={index} food={food} />
         ))}

      </div>
    </div>
  )
}

export default BestSeller
