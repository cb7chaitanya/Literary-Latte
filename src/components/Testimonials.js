import React from 'react'

function Testimonials({figure, highlight, quote, name}) {
  return (
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:w-[75%] md:translate-x-[15%] bg-white m-8">
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
        <blockquote className="max-w-2xl mx-auto mb-4">
            <h3 className="text-lg font-semibold">{highlight}</h3>
            <p className="my-4">{quote}</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src={figure} alt="profile picture" />
            <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                <div>{name}</div>          
            </div>
        </figcaption>    
    </figure>
</div>

  )
}

export default Testimonials