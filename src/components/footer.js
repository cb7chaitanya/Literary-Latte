import React from 'react'
import fLogo from './FooterLogo.png'
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-white w-full pt-10'>
        <footer className='text-white w-full -mb-60 py-32 rounded-tr-lg rounded-tl-lg bg-brown'>
            <div className='upper sm:translate-x-10 sm:text-lg md:translate-x-[32%] md:text-xl'>
                <img src={fLogo} className='w-28 translate-x-48 -translate-y-20 sm:w-40 md:w-48'></img>
                <Link to="/"><button className='-translate-y-12 ml-6'>Home</button></Link>
                <Link to="/Bakery"><button className='-translate-y-12 ml-6'>Bakery</button></Link>
                <Link to="/Books"><button className='-translate-y-12 ml-6'>Books</button></Link>
                <Link to="/BookClub"><button className='-translate-y-12 ml-6'>Book Club</button></Link>
                <Link to="/Shop"><button className='-translate-y-12 ml-6'>E-Shop</button></Link>
            </div>
            <div className='border-t-2 border-white/50 mx-4 -translate-y-6 sm:mx-8 md:mx-12'></div>
            <div className='lower sm:translate-x-10 sm:text-lg md:text-xl'>
                <h3 className='ml-6 mt-3 font-semibold underline underline-offset-2 md:ml-32'>Find us at</h3>
                <p className='ml-6 mt-3 md:ml-32'>Literary Latte Cafe,<br></br>
                123 Main Street,<br></br>
                Riverside City, Bookhaven<br></br>
                Zip Code: 98765</p>
                <h3 className='ml-6 font-semibold underline underline-offset-2 mt-8 md:ml-32'>Contact us</h3>
                <p className='ml-6 mt-3 md:ml-32'>+91-xxxxxxxxxx</p>
                <p className='ml-6 md:ml-32'>LiteraryLatte@____.com</p>
                <IoLogoInstagram className='translate-x-96 -translate-y-48 w-10 h-10 md:translate-x-[1200px]'/>
                <FaTwitter className='translate-x-96 -translate-y-44 w-10 h-10 md:translate-x-[1200px]'/>
                <FaAppStoreIos className='translate-x-96 -translate-y-40 w-10 h-10 md:translate-x-[1200px]'/>
                <IoLogoGooglePlaystore className='translate-x-96 -translate-y-36 w-10 h-10 md:translate-x-[1200px]'/>

            </div>
        </footer>
    </div>
  )
}

export default Footer