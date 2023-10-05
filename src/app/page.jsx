"use client"
import Image from 'next/image'
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
  const latitude = 34.0329245;
  const longitude = 71.5983885;
  const zoomLevel = 100;

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.330685110177!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfb95d84aaae21%3A0x166e06299e5a5f7f!2s${latitude}%2C%20${longitude}!5e0!3m2!1sen!2sen!4v1633280623754!5m2!1sen!2sen&z=${zoomLevel}`;
  return (
    <div className="test max-w-[100vw]">
<div className="relative h-[100vh]">
  <video
    autoPlay
    muted
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
</div>


     

      <div className="mt-6">
        {" "}
        <Hero />
      </div>

      <iframe
        src={mapSrc}
        width="100%"
        height="500px"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>

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
