import React from 'react'
import img1 from "./assets/udemy.jpg"

function Hero() {
  return (
    <div>
     <img src={img1} alt="" className='md:w-screen  '/> 
     <div className='border border-black absolute bottom-[570px]  w-48 h-10 p-1 pb-1 left-6 bg-white
     md:border-2 md:bottom-[550px]  md: md:w-72 md:h-16  md:left-6 
     lg:bottom-[420px] lg:left-24 lg:w-[500px]  lg:h-20 lg:'>
        <h1 className='text-[10px] font-bold
        md:font-bold md:text-[15px] 
        lg:text-xl '>Udemy Flash Sale! 24 hours to save.</h1>
        <p className='text-[6px]
        md:text-[10px]
        lg:text-[15px] '>Get the top course for just 499. just one day to save but a lifetime to learn</p>
     </div>
    
      </div>
  )
}

export default Hero
