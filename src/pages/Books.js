import React from 'react'
import Navbar from '../components/navbar'
import Slider from '../components/slider'
import VirtLibrary from '../components/virtLibrary'
import Footer from '../components/footer.js'
import { Link } from 'react-router-dom'

function Books() {

  return (
    <div className='text-brown overflow-hidden'>
      <Navbar></Navbar>
      <h1 className='text-6xl text-center mt-14 sm:text-7xl md:text-8xl'>Literary Lounge</h1>
        <p className='text-lg m-8 sm:text-xl sm:m-16 md:text-2xl md:m-20'>Welcome to our Literary Lounge, a literary haven where imagination knows no bounds. Explore our curated collection of captivating reads, ranging from timeless classics to contemporary bestsellers. Whether you're in search of adventure, romance, or inspiration, you'll find it here amidst the pages of our carefully selected books. Embark on a journey of discovery, lose yourself in the magic of storytelling, and let the pages come alive in our Literary Lounge.
        </p>
      <Slider></Slider>
      <h1 className='text-6xl text-center mt-14 sm:text-7xl md:text-8xl'>Book Club</h1>
      <p className='text-lg m-8 sm:text-xl sm:m-16 md:text-2xl md:m-20'>Our book club offers a welcoming space for avid readers to come together, share their thoughts, and delve into captivating discussions about our featured reads. Whether you're a seasoned bibliophile or a newcomer to the world of books, our book club invites you to connect with fellow book lovers, explore new perspectives, and celebrate the joy of reading.
      </p>
      <Link to="/BookClub"><button type='submit' className='book_club bg-brown text-white px-4 py-2 rounded-xl translate-x-36 hover:text-beige duration-300 sm:translate-x-56 md:translate-x-[615px] text-sm sm:text-md md:text-lg'>Chime into the next Event</button></Link>
      <h1 className='text-6xl text-center mt-14 sm:text-7xl md:text-8xl'>Our Virtual Library</h1>
      <p className='text-lg m-8 sm:text-xl sm:m-16 md:text-2xl md:m-20'>Browse through our curated collection, meticulously selected to ignite your imagination and transport you to distant lands, magical realms, and extraordinary adventures. From cherished classics that have stood the test of time to contemporary bestsellers that capture the spirit of our modern world, each book awaits to be discovered and cherished.</p>
      <VirtLibrary></VirtLibrary>
      <Footer></Footer>
    </div>
  )
}

export default Books
