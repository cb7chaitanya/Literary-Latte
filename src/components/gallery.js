import React, {useState} from 'react'
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { RxDot } from "react-icons/rx";



function Gallery ({slides}) {
    
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
    <div className='bg-white max-w-[1400px] h-[800px] w-full m-auto py-12 px-2 relative group'>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-xl bg-center bg-cover duration-500'>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] left-5 -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] right-5 -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
            <div key= {slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                <RxDot />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery