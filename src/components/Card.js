import React from 'react'

function Card({image, event, description}) {
  return (
    <div className="text-brown my-4 md:my-8 md:mx-8 mx-4 flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-[90%] hover:bg-gray-100">
    <img className="object-cover rounded-t-lg md:h-auto md:w-72 md:rounded-none md:rounded-s-lg" src={image}></img>
    <div className="flex flex-col justify-between leading-normal p-8">
        <h1 className="mb-2 text-md font-bold tracking-tight">{event}</h1>
        <p className="mb-3 font-normal text-sm">{description}</p>
    </div>
    </div>
  )
}

export default Card