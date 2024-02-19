import React from 'react'
import card1 from './assets/tech1.webp'
import card2 from "./assets/tech3.webp"
import card3 from "./assets/tech4.webp"
import card4 from "./assets/tech5.webp"
function Cards() {
  return (
    <div className=''>
      <div>
        <h1 className='text-[20px] font-bold md:text-2xl'>Recommended for you</h1>
        <p className='text-[12px] md:text-[15px]'>pick the best fit</p>
      </div>
      <div className='grid grid-cols-2 gap-2 cursor-pointer p-2 md:grid md:grid-cols-4'>
        <div className=' hover:shadow-2xl  md:hover:scale-[1.02]'>
            <img src={card1} alt="" className='w-screen h-[120px] md:h-[150px] lg:h-[200px]' />
            <h1 className='font-bold text-[12px] md:text-[18px] lg:text-[20px]'>2023 Python Data Visaulisation Materclass</h1>
            <p  className='text-[10px] md:text-[12px] lg:text-[15px]'>Col Steele</p>
            <p className='text-[10px] md:text-[12px] lg:text-[15px]'>3.9 ⭐⭐⭐</p>
            <p className='text-[10px] md:text-[12px] lg:text-[15px]'>499 <del>1999</del></p>
        </div>
        <div className=' hover:shadow-2xl md:hover:scale-[1.02] '>
            <img src={card2} alt="" className='w-screen h-[120px] md:h-[150px] lg:h-[200px]'/>
            <h1 className='font-bold text-[12px] md:text-[18px]'>Basic to Advanced programming with EMC</h1>
            <p className='text-[10px] md:text-[12px] lg:text-[15px]'>Col Steele</p>
            <p className='text-[10px] md:text-[12px] lg:text-[15px]'>3.9 ⭐⭐⭐</p>
            <p className='text-[10px] md:text-[12px] lg:text-[15px]'>499 <del>1999</del></p>
        </div>
        <div className='  hover:shadow-2xl  md:hover:scale-[1.02]'>
            <img src={card3} alt="" className='w-screen h-[120px] md:h-[150px] lg:h-[200px]'/>
            <h1 className='font-bold text-[12px] md:text-[18px]'>Webdevelopment bootcamp 2023</h1>
            <p className='text-[10px] md:text-[12px] lg:text-[15px]'>Col Steele</p>
            <p className='text-[10px] md:text-[12px] lg:text-[15px]'>3.9 ⭐⭐⭐</p>
            <p className='text-[10px] md:text-[12px] lg:text-[15px]'>499 <del>1999</del></p>
        </div>
        <div className=' hover:shadow-2xl  md:hover:scale-[1.02]'>
            <img src={card4} alt="" className='w-screen h-[120px] md:h-[150px]  lg:h-[200px]'/>
            <h1 className='font-bold text-[12px] md:text-[18px] '>Master UX/UI Designing with Figma</h1>
            <p className='text-[10px] md:text-[12px]  lg:text-[15px]'>Col Steele</p>
            <p className='text-[10px] md:text-[12px]  lg:text-[15px]'>3.9 ⭐⭐⭐</p>
            <p className='text-[10px] md:text-[12px]  lg:text-[15px]'>499 <del>1999</del></p>
        </div>
     </div>
    </div>
  )
}

export default Cards
