import React, { useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";


const OrderTicket = ({cart, setCart, item}) => {
  const handleDelete = () => {
    const updatedCart = cart.filter(cartItem => cartItem.item !== item.item);
    console.log(updatedCart);
    setCart(updatedCart);
    console.log(updatedCart);
  };
  return (
    <div className="text-brown my-4 md:my-8 md:mx-8 mx-4 flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-[90%]">
    <div className="flex flex-col md:w-48">
      <img className="object-cover rounded-t-lg md:h-auto md:w-full md:rounded-none md:rounded-t-none md:rounded-l-lg" src={item.image} alt={item.item} />
    </div>
    <div className="flex flex-col justify-between flex-1 leading-normal p-8">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">{item.item}</h1>
      <p className="mb-3 font-normal text-xl">Price: {item.price}</p>
    </div>
    <button onClick={handleDelete} className='bg-brown text-white rounded-lg px-[102px] py-4 sm:px-[132px] md:px-4 md:py-[100px] relative self-end hover:bg-slate-500 duration-300'><MdDeleteOutline /></button>
  </div>
  
  )
}

export default OrderTicket