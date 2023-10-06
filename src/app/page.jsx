"use client";
import React from 'react';
import LandingPagevideo from '@/components/LandingPagevideo';
import AboutUs from '../components/AboutUs';
import ProjectCard from '@/components/ProjectCard';
import img1 from "@/public/project1.avif";
import img2 from "@/public/project2.avif";
import AboutUsNew from '@/components/AboutUsNew';
import Projects from './projects/page';

export default function Home() {
  return (
    <div className="">
      <LandingPagevideo />

      <AboutUsNew/>


    <div> <h1 className='text-3xl font-lora text-center py-10 '>Featured Projects  </h1> </div>
      
      
      
      <div className="grid gap-6  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:grid-cols-3 items-center place-items-center ">
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
    </div>
  );
}
