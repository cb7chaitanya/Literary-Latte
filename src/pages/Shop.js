import React, {useEffect, useState, useContext} from 'react'
import Navbar from '../components/navbar'
import Food from '../components/Food'
import Drinks from '../components/Drinks'
import Dessert from '../components/Dessert'
import Cart from '../components/Cart'
import { CiShoppingCart } from "react-icons/ci";
import { CartContext} from '../Context'

function Shop() {
  const {cart, setCart} = useContext(CartContext)
  const componentA = () => <Food />
  const componentB = () => <Drinks />
  const componentC = () => <Dessert />
  const componentD = () => <Cart/>

  const [showComponent, setShowComponent] = useState(componentA);

  const handleButtonClick = (component) => {
    setShowComponent (component);
  };
  
  return (
    <div className='text-brown overflow-hidden'>
      <Navbar />
      <div className="inline-flex rounded-md shadow-sm mt-20 translate-x-[35%] sm:translate-x-[45%] md:translate-x-[155%]" role="group">
      <button type="button" onClick={()=> handleButtonClick(componentA)} className="px-4 py-2 sm:px-6 sm:py-4 text-sm font-medium bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-black">
      Food
      </button>
      <button type="button" onClick={()=> handleButtonClick(componentB)} className="px-4 py-2 sm:px-6 sm:py-4 text-sm font-medium bg-white border border-gray-200  hover:bg-gray-100 hover:text-black">
      Drinks
      </button>
      <button type="button" onClick={()=> handleButtonClick(componentC)} className="px-4 py-2 sm:px-6 sm:py-4 text-sm font-medium bg-white border border-gray-200  hover:bg-gray-100 hover:text-black">
      Desserts
      </button>
      <button type="button" onClick={()=> handleButtonClick(componentD)} className="px-4 py-2 sm:px-6 sm:py-4 text-lg font-medium bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-black">
      <CiShoppingCart />
      </button>
      </div>
      {showComponent}
    </div>
  )
}

export default Shop