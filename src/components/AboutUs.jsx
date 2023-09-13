import React from 'react'
import Image from 'next/image'
function AboutUs() {
  return (
    <div className='flex gap-[50px] flex-wrap pt-2   p-4  mt-20'>
{/* Left */}
    <div className="bg-gray-500 flex-1 min-h-[300px] min-w-[350px] relative">

<div className="flex flex-col  justify-center items-center">

</div>
<div className="w-[100%] h-[90%]  flex justify-center mt-2 sm:h-64 sm:w-[400px] lg:w-[400px] h-[850px]">
<Image className='w-full h-[500px]  object-cover opacity-70'  fill={true} src="https://images.unsplash.com/photo-1621745860091-1f5544d538af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
   
    {/* <img  className='h-full w-full' src='https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'/> */}
</div>


    </div>
    {/* Right */}
    <div
    variants={''}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}
    
    className="max-w-[500px] min-w-[400px] flex-1 my-4 sm:my-10  lg:my-auto md:my-auto text-md sm:text-sm sm:max-w-[400px] md:max-w-[400px] lg:max-w-[500px]">
   <div className='mb-3'>
    <h1 className='font-bold text-3xl  '> About Us </h1>
    <strong> Vision </strong>Discover a life where every sunrise brings the promise of a new
beginning. Welcome to VGC where we turn your dream of owning the perfect
home into a reality. Experience the extraordinary with us.
<strong> Vision </strong>Discover a life where every sunrise brings the promise of a new
beginning. Welcome to VGC where we turn your dream of owning the perfect
home into a reality. Experience the extraordinary with us.fdgdfg
Experience the extraordinary with us.
<strong> Vision </strong>Discover a life where every sunrise brings the promise of a new
beginning. Welcome to VGC where we turn your dream of owning the perfect
home into a reality. Experience the extraordinary with us.fdgdfg
    </div>
<a href='/about-us' className='rounded-xl  px-4 mt-2   py-2 bg-gray-100 text-black mt-2 cursor-pointer hover:opacity-80' >  Read More </a>
    </div>


    </div>

  )
}

export default AboutUs