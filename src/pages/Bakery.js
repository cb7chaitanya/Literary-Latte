import React from 'react'
import Footer from '../components/footer'
import Gallery from '../components/gallery'
import Navbar from '../components/navbar'
import Baker from './baker.jpeg'

function Bakery() {
  const slides = [
    {
        url: 'https://images.unsplash.com/photo-1556953410-b77c8b035596?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        url: 'https://images.unsplash.com/photo-1565498253128-c06e0488ddee?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        url: 'https://images.unsplash.com/photo-1609271873730-ed73bb15b9a4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        url: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        url: 'https://images.unsplash.com/photo-1428895009712-de9e58a18409?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        url: 'https://images.unsplash.com/photo-1560427183-4efd29c38997?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]
  return (
    <div className='text-brown overflow-hidden'>
      <Navbar />
      <h1 className='text-6xl text-center mt-14 sm:text-7xl md:text-8xl'>Crafted Confections</h1>
      <p className='text-lg m-8 sm:text-xl sm:m-16 md:text-2xl md:m-20'>Celebrate the sweet side of literature at Literary Latte's bakery. Indulge in a delectable array of freshly baked treats crafted with care and creativity. From artisanal bread to decadent pastries, each bite promises a delightful fusion of flavors and a touch of literary magic. Welcome to a world where every pastry tells a story and every cookie sparks inspiration. Savor the taste of imagination at Literary Latte's bakery.</p>
      <h1 className='text-6xl text-center my-12 sm:text-7xl md:text-8xl'>Meet the Head Baker</h1>
      <img src="https://t4.ftcdn.net/jpg/04/96/07/73/360_F_496077320_Kn9lP04CkpN9frmRLveqr8MkvpQdVEza.webp" className='w-80 border-orange-500 border-2 rounded-full translate-x-20 hover:scale-105 duration-300 sm:translate-x-44 sm:w-96 md:w-[500px] md:translate-x-[94%]'></img>
      <h3 className='text-xl m-8 sm:text-2xl sm:m-16 md:text-3xl md:m-20 font-semibold text-center'>Aditya Das</h3>
      <p className='text-lg m-8 sm:text-xl sm:m-16 md:text-2xl md:m-20'>Aditya Das is a master baker with a flair for creativity, bringing a touch of sweetness to every creation. With a passion for precision and an eye for detail, he elevates baking to an art form, ensuring that each pastry is a work of edible art. Aditya's delectable delights are a testament to his skill, dedication, and unwavering commitment to quality, delighting taste buds and leaving a lasting impression on all who indulge in his treats.</p>
      <h1 className='text-6xl text-center my-14 sm:text-7xl md:text-8xl'>Gallery</h1>
      <Gallery slides={slides}/>
      <Footer />
    </div>
  )
}

export default Bakery