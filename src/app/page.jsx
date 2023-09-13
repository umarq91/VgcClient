"use client"
import Image from 'next/image'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import AboutUs from '../components/AboutUs';

import { Carousel } from 'react-responsive-carousel';
import Slider from '@/components/Slider';
import ContactUs from '@/components/contactus';
export default function Home() {
  return (
    <div className=' overflow-hidden'>
      <div className="mt-12"> <Hero /></div>
      <div className="mt-24 mb-24"> <Stats /></div>


      <hr className="pt-20 mt-10 opacity-70 innerWidth" />
      <hr className=" lg:pb-20 opacity-70 innerWidth" />

      <AboutUs />


      <hr className="pt-20 mt-10 opacity-70 innerWidth" />
      <hr className=" lg:pb-20 opacity-70 innerWidth" />
      <h1 className='flex justify-center text-4xl mt-4 font-bold mx-auto sm:text-5xl lg:text-6xl'> Discover Our Projects </h1>
      <div className="mt-20"> <Slider /></div>

      <hr className="pt-20 mt-10 opacity-70 innerWidth" />
      <hr className=" lg:pb-20 opacity-70 innerWidth" />


      <ContactUs/>


    </div>



  );
}
