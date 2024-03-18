import React from 'react'
import Cafe from './Cafe.png' 
import { FaRegArrowAltCircleDown } from "react-icons/fa";


function LandingPage() {
  alert('This is an educational website made for learning not a real Cafe');
  return (
    <div className='flex w-full h-screen bg-beige pt-2'>
        <div className='content mt-24'>
            <div className='upper_content text-brown'>
                <h1 className='text-6xl leading-none tracking-tight ml-20
                sm:text-7xl sm:tracking-normal sm:ml-14 md:text-9xl md:tracking-wide md:ml-10'>Redefine</h1>
                <h1 className='text-6xl leading-none tracking-tight ml-20 sm:text-7xl sm:tracking-normal sm:ml-14 md:text-9xl md:tracking-wide md:ml-10'>your taste</h1>
            </div>
            <div className='lower_content text-brown text-lg ml-20 py-8 w-72 sm:text-xl sm:ml-14 md:text-2xl md:ml-10'>
                <p>We appeal to the Javaphile and Bibliophile inside you</p>
            </div>
            <img src={Cafe} className='w-72 h-64 rounded-xl ml-20 hover:scale-110 duration-700 sm:ml-14 sm:w-80 sm:h-72  md:-translate-y-[90%] md:translate-x-[125%] md:size-5/6 md:ml-28'></img>
        </div>
        
    </div>
  )
}

export default LandingPage