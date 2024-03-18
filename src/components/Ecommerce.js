import React, {useContext} from 'react'
import { CartContext } from '../Context'

function Ecommerce({item}) {
  const {cart, setCart } = useContext(CartContext)
  return (
      <div className="w-48 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 duration-500 mx-5 my-3 sm:w-60 md:w-72">
    <img className="p-8 rounded-lg" src={item.image} alt="product image" />
    <div className="px-5 pb-5">
        <h5 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">{item.item}</h5>
        <div className="flex items-center justify-between">
            <span className="text-md sm:text-lg md:text-xl font-bold">{item.price}</span>
            <button onClick={()=>{
              setCart(prevCart=>[...prevCart, item])
            }} className="text-white bg-brown hover:bg-zinc-700/95 duration-500 focus:ring-2 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-1 py-1 ml-2 text-center sm:px-2 sm:py-2">Add to cart</button>
        </div>
    </div>
</div>  
  )
}

export default Ecommerce