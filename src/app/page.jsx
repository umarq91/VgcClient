"use client";
import React from 'react';
import LandingPagevideo from '@/components/LandingPagevideo';
import ProjectCard from '@/components/ProjectCard';
import AboutUsNew from '@/components/AboutUsNew';
import Projects from './projects/page';
import ProjectsSlider from '@/components/ProjectsSlider';

import LandingPageProjects from '@/components/LandingPageProjects';
export default function Home() {
  return (
    <div className="">
      <LandingPagevideo />

      <AboutUsNew/>


    <div> <h1 className='font-light text-2xl lg:text-5xl text-center mt-4 text-gray-700 tracking-[2px] underline decoration-red-500 font-lora text-center py-10  '> FEATURED PROJECTS </h1> </div>
      
      

    <ProjectsSlider/>

{/* <h2> View All Projects </h2> */}

      {/* <div className="grid gap-6  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:grid-cols-3 items-center place-items-center ">
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
      </div> */}

     
    </div>
  );
}
