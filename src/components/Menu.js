import React, {useState} from 'react'
import DMenu from './DMenu.png'
import BMenu from './BMenu.png'
import FMenu from './FMenu.png'
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { RxDot } from "react-icons/rx";

function Menu() {
    const slides = [
      { 
        url:BMenu
      },
      {
        url: DMenu
      },
      {
        url: FMenu
      }
    ]

    const [currentIndex, setcurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
        setcurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLast = currentIndex === slides.length-1;
        const newIndex = isLast ? 0: currentIndex + 1;
        setcurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setcurrentIndex(slideIndex);
    }
    return (
      <div className='h-[800px] w-full py-8 group my-4 relative sm:my-20'>
        <h1 className='text-3xl text-center font-semibold sm:text-4xl md:text-5xl md:-translate-x-96 md:translate-y-[25vw]'>Menu</h1>
        <div style={{backgroundImage : `url(${slides[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-500 rounded-xl sm:w-3/4 sm:translate-x-20 md:w-[40%] md:translate-x-[130%]'>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] left-5 -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer md:translate-x-[1400%]'>
        <BsChevronLeft onClick={prevSlide} size={30} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] right-5 -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2 md:translate-x-[25%]'>
        {slides.map((slide, slideIndex) => (
            <div key= {slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                <RxDot />
            </div>
        ))}
      </div>
      </div>
    )
}

export default Menu