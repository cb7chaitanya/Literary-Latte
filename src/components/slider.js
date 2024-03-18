import React from 'react'
import Marquee from "react-fast-marquee";
import hp from './hp.png'
import dauntless from './divergent.jpeg'
import gatsby from './gatsby.png'
import goosebumps from './goosebumps.png'
import hunger from './hunger.jpeg'
import narnia from './narnia.png'

function Slider() {
  return (
    <div>
        <Marquee play >
          <div>
            <img src={hp} className='w-1/2 sm:w-2/3 md:w-2/3'></img>
          </div>
          <div>
            <img src={dauntless} className='w-1/2 sm:w-2/3 md:w-2/3'></img>
          </div>
          <div>
            <img src={gatsby} className='w-1/2 sm:w-2/3 md:w-2/3'></img>
          </div>
          <div>
            <img src={goosebumps} className='-ml-36 w-1/2 sm:w-2/3 md:w-2/3'></img>
          </div>
          <div>
            <img src={hunger} className='w-1/2 sm:w-2/3 md:w-2/3 '></img>
          </div>
          <div>
            <img src={narnia} className='w-1/2 sm:w-2/3 md:w-2/3'></img>
          </div>
        </Marquee>
    </div>
  )
}

export default Slider