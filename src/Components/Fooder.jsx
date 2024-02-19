import React from 'react'

function Fooder() {
  return (    <div className='bg-black text-white p-4 md:p-6 '>
    <div className='flex gap-20 text-[10px] md:text-[13px] lg:text-[15px]'>
    
      <div className='flex flex-col gap-3'>
        <h1>Udemy Business</h1>
        <h1>Teach of Udemy</h1>
        <h1>Get the App</h1>
        <h1>About Us</h1>
        <h1>Contact Us</h1>
        </div>
        <div className='flex flex-col gap-3'>
        <h1>Careers</h1>
        <h1>Blog</h1>
        <h1>Help and Support</h1>
        <h1>Afilliate</h1>
        <h1>Investers</h1>
      </div>
    </div>
    <div className='mt-10 flex justify-between md:mb-6 '>
        <h1 className='font-bold text-xl md:text-3xl'>Udemy</h1>
        <p className='text-[5px] md:text-[10px]'>©Udemy,lnc</p>
    </div>
    </div>
  )
}

export default Fooder
