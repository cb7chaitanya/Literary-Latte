import { motion } from 'framer-motion'
import React from 'react'

function Infinite() {
  return (
    <div className='w-full py-10 bg-brown rounded-tl-md rounded-tr-md overflow-hidden'>
        <div className='border-t-2 border-b-2  border-zinc-300 flex whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:15}} className='text-zinc-300 uppercase text-3xl leading-none font-semibold py-2 sm:text-4xl md:text-9xl pr-5'>Literary Latte </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:15}} className='text-zinc-300 uppercase text-3xl leading-none font-semibold py-2 sm:text-4xl md:text-9xl pr-5'>Literary Latte </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:15}} className='text-zinc-300 uppercase text-3xl leading-none font-semibold py-2 sm:text-4xl md:text-9xl pr-5'>Literary Latte </motion.h1>
        </div>
    </div>
  )
}

export default Infinite