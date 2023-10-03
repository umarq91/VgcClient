import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'
import React from 'react'


function Projects() {
  return (
    <div className="">
     <div className="bg-blue-400 h-[400px] xl:h-[500px] md:h-[450px] w-full relative">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
    }}
  ></div>
  <div className="absolute inset-0 bg-black opacity-50" style={{ filter: "brightness(0.5)" }}></div>
  <div className="flex flex-col items-center justify-center h-full relative">
    <h1 className="text-white m-0 text-5xl font-bold tracking-[9px]">PROJECTS</h1>
    <h2 className="text-center text-white"> By VISION GROUP OF COMPANIES</h2>
  </div>
</div>


      <div className="grid gap-6 mt-20 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:grid-cols-3 items-center place-items-center ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects