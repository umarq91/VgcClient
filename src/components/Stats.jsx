"use client"
import CountUp from 'react-countup'

function Stats() {
  return (
    <>
    <div className='max-w-[90vw] mx-auto'>

   <div className='flex items-center  text-5xl '> Stats Over the Years</div>
    <div
    variants={''}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}   
    
    className='flex justify-between  items-center flex-wrap gap-5 pt-4  '>

    <div className=' flex flex-col  p-20 bg-white shadow-lg w-1/4 lg:h'>
       <span className='text-5xl  font-medium'><CountUp start={6500} end={7000} duration={4}/>
      <span className='text-orange-300'> + </span> </span>
       <span className='text-gray-600 text-3xl font-light font-poppins'> Happy Customers </span>
    </div>

    <div className=' flex flex-col justify-start  p-20 bg-white shadow-lg w-1/4'>
       <span className='text-5xl font-medium'><CountUp start={0} end={10} duration={4}/>
      <span className='text-orange-300'> + </span> </span>
      <span className='text-gray-600 text-4xl font-light'>Projects </span>
    </div>


    <div className=' flex flex-col justify-start p-20 w-1/4 bg-white shadow-lg'>
       <span className='text-5xl font-medium'><CountUp start={0} end={5} duration={5}/>
      <span className='text-orange-300'> + </span> </span>
      <span className='text-gray-600 text-3xl font-light'>Cities </span>
    </div>



</div>
      </div>
</>
  )
}

export default Stats