import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from "react-hot-toast"
import Footer from './components/Footer'
import Login from './components/Login'
import { useAppContext } from './context/AppContext'
import Menu from './pages/Menu'
import FoodCategory from './pages/FoodCategory'
import FoodDetails from './pages/FoodDetails'
import Cart from './pages/Cart'
import AddAdress from './pages/AddAdress'
import MyOrders from './pages/MyOrders'
import ChefLogin from './components/chef/ChefLogin'
import ChefLayout from './pages/chef/ChefLayout'
import AddFood from './pages/chef/AddFood'
import FoodList from './pages/chef/FoodList'
import Orders from './pages/chef/Orders'
import Loading from './components/Loading'

const App = () => {
  const isChefPath = useLocation().pathname.includes("chef");
  const { showUserLogin, isChef } = useAppContext();

  return (
    // make it flex column, min full screen
    <div className="flex flex-col min-h-screen text-default text-gray-700 bg-white">
      {!isChefPath && <Navbar />}
      {showUserLogin && <Login />}
      <Toaster />

      {/* flex-grow so main content pushes footer */}
      <main className={`${isChefPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"} flex-grow`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:category" element={<FoodCategory />} />
          <Route path="/foods/:category/:id" element={<FoodDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAdress />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/loader" element={<Loading />} />
          <Route path="/chef" element={isChef ? <ChefLayout /> : <ChefLogin />}>
            <Route index element={isChef ? <AddFood /> : null} />
            <Route path="food-list" element={<FoodList />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </main>

      {!isChefPath && <Footer />}
    </div>
  );
};

export default App;
