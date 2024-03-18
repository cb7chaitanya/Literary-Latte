import React from 'react'

function About() {
  return (
    <div className='flex flex-col overflow-hidden columns-1 gap-5 bg-white w-full rounded-xl pb-4 md:gap-7 md:flex md:overflow-hidden'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl translate-x-48 translate-y-4 font-semibold font-times sm:translate-x-[40%] md:columns-2 md:translate-x-[12%] md:translate-y-[500%]'>About us</h1>
        <h3 className='text-md m-4 sm:text-lg md:text-xl md:ml-[550px]'>Welcome to Literary Latte, where the aroma of freshly brewed coffee mingles with the enchantment of literature. Located in the heart of the bustling city, Literary Latte is more than just a cafe; it's a sanctuary for book lovers and coffee aficionados alike. Our shelves are lined with a curated selection of literary gems, inviting you to explore new worlds while savoring the warmth of your favorite latte.</h3>
        <h3 className='text-md m-4 sm:text-lg md:text-xl md:ml-[550px]'>At Literary Latte, we're passionate about fostering a sense of community and creativity. Whether you're seeking solace in the pages of a beloved novel or engaging in spirited discussions with fellow bibliophiles, our cozy ambiance and friendly staff ensure that every visit is an experience to remember. Join us at Literary Latte, where every cup of coffee is infused with a dash of literary magic.</h3>
    </div>
  )
}

export default About