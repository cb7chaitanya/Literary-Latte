import React, {useContext, useState} from 'react'
import Ecommerce from './Ecommerce'
import Footer from './footer'

const dessertItems = {
  pastries : [
    {
      image: "https://i.pinimg.com/564x/e2/19/b0/e219b0f6cba93a5551a53f65fb52b72a.jpg",
      item: "Lemon Meringue",
      price: "80"
    },
    {
      image: "https://i.pinimg.com/564x/90/1b/44/901b44f8cd4366dff67c902df38dfae7.jpg",
      item: "Chocolate",
      price: "60"
    },
    {
      image: "https://i.pinimg.com/564x/bd/ab/3c/bdab3c4371ad91e97f6799a5d7d8c187.jpg",
      item: "Cheesecake",
      price: "80"
    },
    {
      image: "https://i.pinimg.com/736x/55/45/89/55458904b2e9ece44e76a3fd11fe1c90.jpg",
      item: "Black Forest",
      price: "70"
    },
    {
      image: "https://i.pinimg.com/564x/49/0a/28/490a28cc5e8bd2cf9717825d76c7a722.jpg",
      item: "Chocolate Truffle",
      price: "80"
    },
    {
      image: "https://i.pinimg.com/736x/b6/a6/68/b6a668c232b8fd7173417b0dfa8aa231.jpg",
      item: "Red Velvet",
      price: "70"
    },
    {
      image: "https://i.pinimg.com/564x/18/f9/c2/18f9c2bf53ffd6447ffd16a6aaa3ff96.jpg",
      item: "Rainbow",
      price: "70"
    }
  ],
  muffins : [
    {
      image: "https://i.pinimg.com/564x/a6/09/04/a60904a47292c2387154af98c8d5ded7.jpg",
      item: "Blueberry",
      price: "50"
    },
    {
      image: "https://i.pinimg.com/564x/47/0c/5e/470c5e19c8b73a2ba36152fb6554ae8e.jpg",
      item: "Cookies N Cream",
      price: "60"
    },
    {
      image: "https://i.pinimg.com/564x/2f/b4/ba/2fb4ba1024fd9e7cf2e2606a15982007.jpg",
      item: "Choco Chip",
      price: "50"
    },
    {
      image: "https://i.pinimg.com/564x/da/db/81/dadb8122a346ff22f1f9ecf9da662174.jpg",
      item: "Red Velvet",
      price: "50"
    },
    {
      image: "https://i.pinimg.com/564x/3b/6e/2d/3b6e2db2ca4116516958837fb637f57f.jpg",
      item: "Walnut",
      price: "60"
    }
  ],
  doughnut : [
    {
      image: "https://i.pinimg.com/564x/b0/61/87/b0618769eae1c5e56a03d7375c60b8ed.jpg",
      item: "Chocolate",
      price: "80"
    },
    {
      image: "https://i.pinimg.com/564x/e0/b2/72/e0b2722467c28fbac1010d1549b9cd7e.jpg",
      item: "Cinnamon",
      price: "70"
    },
    {
      image: "https://i.pinimg.com/564x/9d/d3/d3/9dd3d324a414ea06acef63f937b713b8.jpg",
      item: "Choco Chip",
      price: "80"
    },
    {
      image: "https://i.pinimg.com/564x/c5/a7/45/c5a74561a995199ce4b0e5f0b1de690c.jpg",
      item: "Glazed",
      price: "70"
    },
    {
      image: "https://i.pinimg.com/564x/33/48/26/334826151d4cfc820443fcd23488112e.jpg",
      item: "Sprinkles",
      price: "70"
    }
  ],
  cookies : [
    {
      image: "https://i.pinimg.com/564x/f2/aa/d8/f2aad87ae44aa11d0e50e74624b5fb63.jpg",
      item: "Choco Chip",
      price: "350"
    },
    {
      image: "https://i.pinimg.com/736x/9f/5a/f3/9f5af38371160185ffc4c79edc9aa952.jpg",
      item: "Biscotti",
      price: "400"
    },
    {
      image: "https://i.pinimg.com/564x/2c/22/56/2c22562d9cde5293253684402a15bfab.jpg",
      item: "Macaron",
      price: "380"
    },
    {
      image: "https://i.pinimg.com/736x/3d/df/99/3ddf99c237c9e1685eda2cc1bc1284a3.jpg",
      item: "Confetti",
      price: "320"
    }
  ],
  waffles : [
    {
      image: "https://i.pinimg.com/736x/26/47/f6/2647f64e0fb9cf95dfc9e6d664275091.jpg",
      item: "Nutella",
      price: "150"
    },
    {
      image: "https://i.pinimg.com/564x/ad/e3/c5/ade3c532834cd70f570d118afbdcd329.jpg",
      item: "Kit Kat",
      price: "160"
    },
    {
      image: "https://i.pinimg.com/564x/24/c7/dc/24c7dc6be86117d7f8f5c738e4c45c55.jpg",
      item: "Oreo",
      price: "180"
    },
    {
      image: "https://i.pinimg.com/564x/d7/e3/6b/d7e36b82a586795733b7cb82ae327547.jpg",
      item: "Rocky Road",
      price: "180"
    }
  ]
}

function Dessert() {
  
  return (
      <div className='text-brown overflow-hidden'>
    <h1 className='text-6xl text-center mt-8 sm:text-7xl md:text-8xl'>Desserts</h1>
    <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Pastries</p>
    <div className='flex flex-wrap'>
      {dessertItems.pastries.map((item, index)=>
        <Ecommerce key={index} item={item} />
      )}
    </div>
    <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Muffins</p>
    <div className='flex flex-wrap'>
      {dessertItems.muffins.map((item, index)=>
        <Ecommerce key={index} item={item} />
      )}
    </div>
    <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Doughnuts</p>
    <div className='flex flex-wrap'>
      {dessertItems.doughnut.map((item, index)=>
        <Ecommerce key={index} item={item} />
      )}
    </div>
    <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Cookies</p>
    <div className='flex flex-wrap'>
      {dessertItems.cookies.map((item, index)=>
        <Ecommerce key={index} item={item} />
      )}
    </div>
    <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Waffles</p>
    <div className='flex flex-wrap'>
      {dessertItems.waffles.map((item,index)=>
        <Ecommerce key={index} item={item} />
      )}
    </div>
    <Footer />
  </div>
    
  )
}


export default Dessert