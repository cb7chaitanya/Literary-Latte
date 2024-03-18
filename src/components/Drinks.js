import React, { useState } from 'react'
import Ecommerce from './Ecommerce'
import Footer from './footer'

const drinkItems = {
  coffee : [
    {
      image: "https://i.pinimg.com/564x/d6/f2/e9/d6f2e9113aa8f9aef8b59a8e28bd7255.jpg",
      item: "Espresso",
      price: "150"
    },
    {
      image: "https://i.pinimg.com/736x/55/29/4f/55294ffe76e9531a47017e9bc5e6c368.jpg",
      item: "Double Espresso",
      price: "200"
    },
    {
      image: "https://i.pinimg.com/736x/b7/1e/44/b71e44643422bc039d09c6382759006d.jpg",
      item: "Latte",
      price: "230"
    },
    {
      image: "https://i.pinimg.com/564x/2c/50/08/2c5008085dd7e451c289e9947c41f74a.jpg",
      item: "Americano",
      price: "175"
    },
    {
      image: "https://i.pinimg.com/564x/51/0c/5b/510c5baf918eb59c67b8bf7e328b5e79.jpg",
      item: "Macchiato",
      price: "250"
    },
    {
      image: "https://i.pinimg.com/564x/b4/ae/2b/b4ae2bb51abcbc5ba482a5d556b1ae80.jpg",
      item: "Flat White",
      price: "230"
    },
    {
      image: "https://i.pinimg.com/564x/55/dd/53/55dd5388b2fbb259b097caf4896c45fd.jpg",
      item: "Cappuccino",
      price: "250"
    }
  ],
  nonCoffee : [
    {
      image: "https://i.pinimg.com/564x/8a/64/aa/8a64aa105ce7c59d131287cc64cea19d.jpg",
      item: "Hot Chocolate",
      price: "200"
    },
    {
      image: "https://i.pinimg.com/564x/8e/b7/16/8eb716a883a778bbccda9edb78b3db7d.jpg",
      item: "Choco Milkshake",
      price: "175"
    },
    {
      image: "https://i.pinimg.com/564x/ee/3b/14/ee3b140a8abecd412f6c9098c9c91650.jpg",
      item: "Vanilla Milkshake",
      price: "175"
    },
    {
      image: "https://i.pinimg.com/564x/5e/74/60/5e74605492b4190a08549b5c070754e5.jpg",
      item: "DeCaf",
      price: "200"
    },
    {
      image: "https://i.pinimg.com/564x/3a/2f/48/3a2f489b219f490f6a4ffc2efc973f7b.jpg",
      item: "Smoothie",
      price: "175"
    }
  ],
  tea : [
    {
      image: "https://i.pinimg.com/564x/b6/a2/d5/b6a2d5b72771543b3799924828dea6c3.jpg",
      item: "Lemon Tea",
      price: "120"
    },
    {
      image: "https://i.pinimg.com/564x/c0/60/20/c0602053184dbc6320b47ee71c5bde56.jpg",
      item: "Mango Tea",
      price: "130"
    },
    {
      image: "https://i.pinimg.com/564x/a4/6c/9c/a46c9c4956a0e1f2a871a52bc89d2694.jpg",
      item: "Jasmine Tea",
      price: "150"
    },
    {
      image: "https://i.pinimg.com/564x/aa/24/31/aa2431f499d2de3871396e14e828c6ab.jpg",
      item: "Green Tea",
      price: "100"
    },
    {
      image: "https://i.pinimg.com/564x/4a/71/84/4a71848c985170047b213ee653feb3e0.jpg",
      item: "Mint Tea",
      price: "120"
    }
  ],
  coolers : [
    {
      image: "https://i.pinimg.com/564x/5d/29/04/5d290466931e9304f829ddb81ee3d497.jpg",
      item: "Lemonade",
      price: "120"
    },
    {
      image: "https://i.pinimg.com/564x/62/e5/f9/62e5f91f25e8aeb76dc80fd400e1ee48.jpg",
      item: "Watermelon Mint",
      price: "180"
    },
    {
      image: "https://i.pinimg.com/564x/4e/45/cf/4e45cfc7531347df53074abe54e9a07d.jpg",
      item: "Peach Iced Tea",
      price: "200"
    },
    {
      image: "https://i.pinimg.com/736x/88/55/4a/88554a92aa8025b740c469bc93b58a53.jpg",
      item: "Watermelon Slushie",
      price: "180"
    }
  ],
  coldCoffee : [
    {
      image: "https://i.pinimg.com/564x/be/19/f4/be19f4351f4137c705b89166c7a91eb9.jpg",
      item: "Cold Brew",
      price: "200"
    },
    {
      image: "https://i.pinimg.com/736x/9a/49/78/9a4978efff2b2af2c19bcc032f7d8f47.jpg",
      item: "Iced Coffee",
      price: "200"
    },
    {
      image: "https://i.pinimg.com/564x/51/aa/27/51aa2771f90dd3633062ae2929f86216.jpg",
      item: "Frappuccino",
      price: "250"
    },
    {
      image: "https://i.pinimg.com/564x/93/ae/60/93ae60aeb76346d655586fbcd359289b.jpg",
      item: "Iced Latte",
      price: "220"
    }
  ]
}

function Drinks() {
  
  return (
    <div className='text-brown overflow-hidden'>
    <h1 className='text-6xl text-center mt-8 sm:text-7xl md:text-8xl'>Drinks</h1>
    <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Coffee</p>
    <div className='flex flex-wrap'>
      {drinkItems.coffee.map((item, index)=>
        <Ecommerce key={index} item={item} />
      )}
    </div>
    <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Non-Coffee</p>
    <div className='flex flex-wrap'>
      {drinkItems.nonCoffee.map((item, index)=>
        <Ecommerce key={index} item={item} />
      )}
    </div>
    <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Tea</p>
    <div className='flex flex-wrap'>
      {drinkItems.tea.map((item, index)=>
        <Ecommerce key={index} item={item} />
      )}
    </div>
    <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Coolers</p>
    <div className='flex flex-wrap'>
      {drinkItems.coolers.map((item, index)=>
        <Ecommerce key={index} item={item} />
      )}
    </div>
    <p className='text-lg sm:text-xl m-8 md:text-2xl underline underline-offset-2 font-semibold'>Cold Coffee</p>
    <div className='flex flex-wrap'>
      {drinkItems.coldCoffee.map((item, index)=>
        <Ecommerce key={index} item={item}/>
      )}
    </div>
    <Footer />
  </div>
  )
}

export default Drinks