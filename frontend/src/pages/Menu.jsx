import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import FoodCard from '../components/FoodCard'

const Menu = () => {
  const { foods, searchQuery } = useAppContext()
  const [filteredFoods, setFilteredFoods] = useState([])

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredFoods(
        foods.filter((food) =>
          food.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    } else {
      setFilteredFoods(foods)
    }
  }, [foods, searchQuery])

  // Filter in-stock items
  const inStockFoods = filteredFoods.filter((food) => food.inStock)

  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">Menu</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {inStockFoods.length > 0 ? (
          inStockFoods.map((food, index) => (
            <FoodCard key={index} food={food} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg mt-10">
            🚫 No foods found.
          </p>
        )}
      </div>
    </div>
  )
}

export default Menu
