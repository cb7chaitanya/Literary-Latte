import React from 'react'
import literary from './literary.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
    <div className='sticky z-[1] w-full px-16 py-8 font-sans flex justify-between items-center duration-700 bg-beige'>
        <div className='logo w-20 sm:w-28'>
          <Link to="/"><img src={literary} >
            </img></Link>
        </div>
        <div className='links flex justify-between items-center text-sm gap-5 sm:text-md sm:gap-9 md:gap-10 md:text-xl'>
            <Link to="/Bakery"><button className='hover:text-slate-500 duration-300 border-none'>Bakery</button></Link>
            <Link to="/Books"><button className='hover:text-slate-500 duration-300 border-none'>Books</button></Link>
            <Link to="/BookClub"><button className='hover:text-slate-500 duration-300 border-none'>Book Club</button></Link>
            <Link to="/Shop"><button className='hover:text-slate-500 duration-300 border-none'>E-Shop</button></Link>
            <Link to="/Register"><button className='ml-24 hover:text-beige duration-300 rounded-lg p-2 bg-brown text-white'>Register</button></Link>
        </div>
    </div>
    </nav>
  )
}

export default Navbar