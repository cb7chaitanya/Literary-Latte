import React, { useState, useContext } from 'react'
import Ecommerce from './Ecommerce'
import Footer from './footer'

function Food() {
  const foodItems = {
    pizza : [
      {
        image: "https://i.pinimg.com/564x/5a/f0/f9/5af0f988645c8aadf291cc82222d14eb.jpg",
        item: "Margherita",
        price: "320"
      },
      {
        image: "https://i.pinimg.com/564x/3b/af/b0/3bafb05029945268602a48234ad1bff5.jpg",
        item: "Farmhouse",
        price: "360"
      },
      {
        image: "https://i.pinimg.com/564x/2a/92/af/2a92af5691bff6961505469444e3bb0c.jpg",
        item: "Mushroom & Corn",
        price: "340"
      },
      {
        image: "https://i.pinimg.com/564x/fc/30/96/fc309676c7ce6797fc286439042c4bf4.jpg",
        item: "Crispy Cottage Cheese",
        price: "360"
      },
      {
        image: "https://i.pinimg.com/564x/bf/3a/8d/bf3a8df2ab4bbd09f9dea9100e29ed69.jpg",
        item: "Mexicana",
        price: "360"
      },
      {
        image: "https://i.pinimg.com/564x/31/7d/1e/317d1eecdfb7b8801ff00d3fee37ba58.jpg",
        item: "Onion & Capsicum",
        price: "340"
      },
      {
        image: "https://i.pinimg.com/564x/58/cd/95/58cd95a4bd07515f8632aecded5d71e2.jpg",
        item: "Veggie Affair",
        price: "360"
      }
    ],
    sandwich : [
      {
        image: "https://i.pinimg.com/564x/86/77/01/867701aa1e3ce1f60e6f72977a6b25ef.jpg",
        item: "Cheese Sandwich",
        price: "120"
      },
      {
        image: "https://i.pinimg.com/564x/53/49/98/534998d332a9c8a8c61a66c809472f68.jpg",
        item: "Veggie Club Sandwich",
        price: "120"
      },
      {
        image: "https://i.pinimg.com/564x/ff/55/88/ff55882f50b08ac83a2c86ac2bc7550d.jpg",
        item: "Grilled Cheese",
        price: "140"
      },
      {
        image: "https://i.pinimg.com/564x/cb/f2/ca/cbf2ca96032c6db07b193d3c3c4f29c2.jpg",
        item: "Spinach & Corn Sandwich",
        price: "120"
      },
      {
        image: "https://i.pinimg.com/564x/7b/ea/06/7bea068aade92477e339ee3bdae706b3.jpg",
        item: "Peri Peri Paneer Sandwich",
        price: "150"
      }
    ],
    pasta : [
      {
        image: "https://i.pinimg.com/564x/c0/32/1a/c0321abc47c867c117a44b243c5a09a4.jpg",
        item: "Barbaresca",
        price: "230"
      },
      {
        image: "https://i.pinimg.com/564x/d4/af/ae/d4afaea8a8793de367d324501f016638.jpg",
        item: "Arrabiata",
        price: "230"
      },
      {
        image: "https://i.pinimg.com/564x/38/75/4a/38754a78b1fddabda539795784f9beeb.jpg",
        item: "Sugo Rosa",
        price: "230"
      },
      {
        image: "https://i.pinimg.com/736x/06/24/98/0624989790ea790acc193e82f95dff33.jpg",
        item: "Louisiana",
        price: "230"
      },
      {
        image: "https://i.pinimg.com/564x/5e/13/56/5e1356ea679339a7d27b9e7ead84871b.jpg",
        item: "Mama Rosa",
        price: "230"
      }
    ],
    burger : [
      {
        image: "https://i.pinimg.com/564x/c6/91/42/c69142bda55e50ccf0a22b891e7b9b50.jpg",
        item: "Super Veggie",
        price: "120"
      },
      {
        image: "https://i.pinimg.com/564x/bb/ed/6b/bbed6b71b08fc3f74571a6b97fa7e2a9.jpg",
        item: "Paneer Zinger",
        price: "150"
      },
      {
        image: "https://i.pinimg.com/564x/c4/a9/f1/c4a9f11dab3e38a3ba67ca3b20ea0bbc.jpg",
        item: "Peri Peri Zinger",
        price: "140"
      },
      {
        image: "https://i.pinimg.com/564x/5e/d8/49/5ed8497c505b2292cd95a1af14868037.jpg",
        item: "X-Veg",
        price: "130"
      }
    ],
    wrap : [
      {
        image: "https://i.pinimg.com/736x/6c/8b/5d/6c8b5db184ce83e459fbabf1b5587e27.jpg",
        item: "Burrito",
        price: "150"
      },
      {
        image: "https://i.pinimg.com/564x/f3/ef/13/f3ef1305a8b7bd8d25afa978a3b8f62c.jpg",
        item: "Falafel",
        price: "160"
      },
      {
        image: "https://i.pinimg.com/564x/69/e4/06/69e4062cb5135d6cc5c302ced536a39d.jpg",
        item: "Turkish",
        price: "160"
      },
      {
        image: "https://i.pinimg.com/564x/ed/8d/5d/ed8d5d99fb0dc5cf4a32731c569da170.jpg",
        item: "Peri Peri",
        price: "180"
      }
    ]
  }
  return (

    <div className='text-brown overflow-hidden'>
      <h1 className='text-6xl text-center mt-8 sm:text-7xl md:text-8xl'>Food</h1>
      <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Pizzas</p>
      <div className='flex flex-wrap'>
        {foodItems.pizza.map((item,index)=>
          <Ecommerce key = {index} item = {item}/>
        )}
      </div>
      <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Sandwiches</p>
      <div className='flex flex-wrap'>
        {foodItems.sandwich.map((item,index)=>
          <Ecommerce key = {index} item = {item}/>
        )}
      </div>
      <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Pasta</p>
      <div className='flex flex-wrap'>
        {foodItems.pasta.map((item,index)=>
          <Ecommerce key = {index} item = {item}/>
        )}
      </div>
      <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Burger</p>
      <div className='flex flex-wrap'>
        {foodItems.burger.map((item,index)=>
          <Ecommerce key = {index} item = {item}/>
        )}
      </div>
      <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Wraps</p>
      <div className='flex flex-wrap'>
        {foodItems.wrap.map((item,index)=>
          <Ecommerce key = {index} item = {item}/>
        )}
      </div>
      <Footer />
    </div>

  )
}

export default Food