import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'
import React from 'react'
import img1 from "@/public/project1.avif";
import img2 from "@/public/project2.avif";
import PlacesData from '@/clientData/PlacesData';
import wisalGarden from "@/assets/projects/wisalgarden.jpeg"
import styles from "./styles.module.css"
import Link from 'next/link';

function Projects() {
  return (
    <div className="mt-1">
     <div className=" h-[400px] xl:h-[500px] md:h-[450px] w-full relative">
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

<h1 className="font-light text-3xl md:text-4xl lg:text-5xl xl:text-5xl mt-16 text-center mt-4 text-gray-700 tracking-[2px] underline decoration-orange-500/80 ">
        {" "}
       ON GOING PROJECTS {" "}
      </h1>
    <div className='  max-w-screen-xl mx-auto my-4'>
      <div className="grid gap-6 mt-8 lg:grid-cols-2  md:grid-cols-2 grid-cols-1 xl:grid-cols-2 items-center place-items-center ">




        <Link href={"/projects/wisal-garden"} className={styles.brightness + " bg-red-200 w-full h-[400px] relative hover:brightness-100 cursor-pointer hover:scale-110 transition-transform transition-duration-300 "}>
          <Image  src={wisalGarden} fill={true} objectFit="cover" objectPosition='center'/>
          <h1 className='absolute bottom-0 left-0 text-xl bg-red-600 px-4 text-white'> Housing Area  </h1>
        </Link>



        <Link href={"/projects/vision-orchard-square"} className={styles.brightness + " bg-red-200 w-full h-[400px] relative hover:brightness-100 cursor-pointer hover:scale-105 transition-transform transition-duration-300 "}>
          <Image  src={wisalGarden} fill={true} objectFit="cover" objectPosition='center'/>
          <h1 className='absolute bottom-0 left-0 text-xl bg-red-600 px-4 text-white'> Housing Area  </h1>
        </Link>







      </div>

      </div>


    </div>
  );
}

export default Projects