import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'; // Import motion for animations

function AboutUs() {
  return (
    <div className='bg-white text-black shadow-lg xl:rounded-tr-full max-w-[90vw] mx-auto'>
      <div className='flex gap-[50px] flex-wrap pt-2 p-4 mt-20 max-w-[80vw] mx-auto '>
        {/* Left */}
        <div className=" flex-1 min-h-[300px] min-w-[350px] relative">
          <div className="flex flex-col justify-center items-center"></div>
          <div className="w-70 h-[90%] relative flex justify-center mt-2 sm:h-64 sm:w-[400px] lg:w-[400px] h-[850px]">
            <Image
              className='w-1/2 h-[300px] object-cover  '
              alt='image'
              fill={true} // Use layout="fill" to fill the container
              src="https://images.unsplash.com/photo-1621745860091-1f5544d538af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
          </div>
        </div>
        {/* Right */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{}}
          whileInView={{ once: false, amount: 0.7 }}
          className="max-w-[500px] min-w-[400px] flex-1 my-4 sm:my-10 lg:my-auto md:my-auto text-md sm:text-sm sm:max-w-[400px] md:max-w-[400px] lg:max-w-[500px]"
        >
          <div className='mb-3'>
            <h1 className='font-bold text-3xl'> About VGC </h1>
            We are an emerging group of various businesses like real estate development, construction services and planning, corporate brand building, Investment planning, sales & marketing services, and digital services. The group leaders aim to make the best real estate of Pakistan by the integration of modern technology, hardworking team and unique ideas.
          </div>
          <a href='/about-us' className='rounded-xl px-4 mt-2 py-2 bg-black text-gray-100 mt-2 cursor-pointer hover:opacity-60' >  Read More ► </a>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutUs
