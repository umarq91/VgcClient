"use client";
import React from 'react';
import LandingPagevideo from '@/components/LandingPagevideo';
import ProjectCard from '@/components/ProjectCard';
import AboutUsNew from '@/components/AboutUsNew';
import Projects from './projects/page';
import ProjectsSlider from '@/components/ProjectsSlider';

import LandingPageProjects from '@/components/LandingPageProjects';
import Hero from '@/components/Hero';
import ContactUs from '@/components/contactus';
export default function Home() {
  return (
    <div className="  max-w-[100vw]  sm:w-full overflow-hidden">
      <Hero/>
      <LandingPagevideo />

      <AboutUsNew/>


    <div> <h1 className='font-light text-2xl lg:text-5xl text-center mt-4 text-gray-700 tracking-[2px] underline decoration-red-500 font-lora text-center py-10  '> FEATURED PROJECTS </h1> </div>
      
      

    <ProjectsSlider/>

  

     
    </div>
  );
}
