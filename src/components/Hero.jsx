'use client'
import Image from "next/image";
import WhatsAppButton from "./Button";
import { useState } from "react";

function Hero() {
  const [test,settest] = useState('')
  return (
    <section className='hero-wrapper  pb-4 '>
        {/* container */}
        <div className='flex  flex-wrap items-center gap-[50px]'>
{/* Left */}
<div className='flex-1'>
<div  className='hero-left flex flex-col justify-center'>
                   

                   <div
                    variants={''}
                    initial="hidden"
                    animate={"show"}
                    viewport={{once:false,amount:0.7}}
                   
                   className="hero-title  font-bold text-5xl lg:text-7xl lg:pb-10 md:text-6xl sm:text-5xl  leading-4 z-40">
                       <h1 className='leading-[60px] z-20'>
                       Vision <br/><span className='font-normal'>group of </span>  <br/> companies
                       </h1>
                   </div>

                   <div className="hero-descr flex flex-col justify-end text-sm opacity-70 italic pt-4">
                       <span>
                       Discover a life where every sunrise brings the promise of a new
                       <br/> beginning. Welcome to VGC
                     
                    where we turn your dream of owning the perfect  </span>
                   <span> home into a reality. Experience the extraordinary with us.
                   </span>
                   </div>

{/* Button for Our Location */}
{/*  */}
<input onChange={(e)=> settest(e.target.value)} className="w-1/4"/>

{/*  */}



<div className='flex mt-4  '>




<a target="_blank" href={'https://www.google.com/maps/place/MMC+General+Hospital/@34.0337191,71.6001506,19.22z/data=!4m6!3m5!1s0x38d93da3b8f429cb:0xbd5735e90857000!8m2!3d34.0336891!4d71.600201!16s%2Fg%2F1yg4vbl8m?entry=ttu'} className='w-[30%] bg-gray-600  flex items-center justify-center hover:scale-110'>
<svg className='pb-1 hover:scale-110 transition ease-in' xmlns="http://www.w3.org/2000/svg" x="0px" y="2px" width="30" height="35" viewBox="0 0 48 48">
<path fill="#48b564" d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z"></path><path fill="#fcc60e" d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z"></path><path fill="#2c85eb" d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z"></path><path fill="#ed5748" d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z"></path><path fill="#5695f6" d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z"></path>
</svg>

<span className=' font-light text-xl '> Location</span>
</a>
<div className="bg-green-200 text-black ">

<WhatsAppButton msg={test} />
</div>
</div>



               </div>
</div>

{/* Right */}

   <div    className='hero-right  flex flex-1 justify-center items-center w-full relative'>

                    <div
                     
                      initial={{x:"10rem",opacity:0}}
                      whileInView={{x:0,opacity:1}}
                      transition={{
                        duration:3,
                        type:"spring"
                      }}
                    
                    className="w-[400px] h-[450px] lg:h-[550px] lg:mt-2  mt-8 overflow-hidden rounded-tl-3xl  border-opacity-[24] ">
                       <div className="h-[200px] w-[full]">

            <Image alt="c" className='w-full h-[500px] object-cover opacity-70'  fill={true} src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80" />
                       </div>
                    </div>

                </div>
</div>

        </section>
  )
}

export default Hero