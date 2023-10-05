"use client"
import Image from 'next/image'
import { useState } from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import AboutUs from '../components/AboutUs';
import Projects from '@/components/Projects';
import { Carousel } from 'react-responsive-carousel';
import Slider from '@/components/Slider';
import ContactUs from '@/components/contactus';
import ProjectCard from '@/components/ProjectCard';
import img1 from "@/public/project1.avif";
import img2 from "@/public/project2.avif";
import video from "@/public/intro.mp4"
export default function Home() {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  
  return (
    <div className="test max-w-[100vw]">

<div className="relative h-[100vh]">
  {!isVideoPlaying ? (
    
    //  Video and layout div 
    <>
    <video
    autoPlay
    muted
    onPlay={()=>setIsVideoPlaying(true)}
    loop
    className="h-[100vh] w-full object-cover -z-1"
    style={{ filter: "brightness(50%)" }} // Adjust the brightness value as needed
    >
    <source src={video} type="video/mp4" />
  </video>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-white text-center">
      <h1 className="text-6xl font-bold font-serif drop-shadow-lg">Vision Group Of <span className='text-red-800 underline'>Companies </span> </h1>
      <p className="text-2xl  drop-shadow-lg">Private Limited</p>
    </div>
  </div>
    </>
)  : (<div className='text-center h-[100vh] flex justify-center items-center'> 
<div role="status">
    <svg aria-hidden="true" class="w-12 h-12 ml-6 text-gray-200 animate-spin text-center dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
    <h1> Loading Video</h1>
</div>

</div>) }

</div>


     

      <div className="mt-6">
        {" "}
        <Hero />
      </div>

      

      {/* <div className="mt-24 mb-24"> <Stats /></div> */}
      {/* <hr className=" text-black mt-10 opacity-70 innerWidth" /> */}

      <AboutUs />
      {/* <AboutusNew/> */}

      {/* <hr className="pt-20 text-black mt-10 opacity-70 innerWidth" /> */}
      {/* <hr className=" lg:pb-20 opacity-70 innerWidth" /> */}

      {/* <hr className=" lg:pb-20 opacity-70 innerWidth" /> */}
      {/* <h1 className='flex justify-center text-4xl mt-4 font-bold mx-auto sm:text-5xl lg:text-6xl'> Discover Our Projects </h1>
      <div className="mt-20"> <Slider /></div> */}

      <div className="grid gap-6 mt-20 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:grid-cols-3 items-center place-items-center ">
        <ProjectCard
          img={img1}
          title="Darmangi"
          type="Residential"
          location="Peshawar"
        />
        <ProjectCard
          img={img2}
          title="Wisal-garden"
          type="Commercial"
          location="Peshawar"
        />
        <ProjectCard
          img={img1}
          title="Darmangi"
          type="Residential"
          location="Peshawar"
        />
      </div>

      <hr className="pt-20 mt-10 opacity-70 innerWidth" />
      <hr className=" lg:pb-20 opacity-70 innerWidth" />

      {/* <ContactUs/> */}
    </div>
  );
}
