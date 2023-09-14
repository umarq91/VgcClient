import React from 'react'
import Image from 'next/image'
function Aboutus() {
  return (
    <div className='mt-4'>
      
      
      
      
      <div className='bg-gray-300 min-h-[300px] relative'>
    <Image fill={true} className='object-cover' src='https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' />
      <div className='min-h-[80px] w-1/2 min-w-1/3 bg-green-400 absolute bottom-10 lg:min-w-1/3' >
        <h1 className='text-black text-3xl font-poppins  pl-6 font-bold items-center'>About Us </h1>
        <p className='text-black text-sm leading-3 font-poppins font-medium pl-6 pb-4'> About Our Serives , people who work here and how everything works  </p>
      </div>
      </div>


      
      About Us Page <br/>
        WHAT DO WE DO<br/>
        WHAT ARE OUR SERVICES<br/>
        CEO INFO <br/>
        MD INFO<br/>
        TEAM INFO <br/>
    </div>
  )
}

export default Aboutus