'use client'
import Image from 'next/image'
import PlacesData from '@/clientData/PlacesData';
import v21 from "@/public/projects/vision21.jpg"
import styles from "./styles.module.css"
import Link from 'next/link';
import enclaveprofile from "@/public/projects/enclaveprofile.jpg"
import wisalgarden from "@/public/projects/projectimages/wisalgarden.jpeg"
import vision21 from "@/public/projects/projectimages/vision21.jpeg"
import orchardsquare from "@/public/projects/projectimages/visionorchardsquare.jpeg"
import modeltown from "@/public/projects/projectimages/visionmodeltown.jpeg"
import visionenclave from "@/public/projects/projectimages/visionenclave.jpeg"
import mvhc from "@/public/projects/projectimages/mvhc.jpeg"
import umt from "@/public/projects/projectimages/umt.jpeg"
import motorwaycity from "@/public/projects/projectimages/motorwaycity.jpeg"

import {motion} from "framer-motion"





function Projects() {
  return (
    <div className="mt-1 max-w-[100vw]">
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
    <div className='max-w-screen-xl mx-auto my-4'>
      <motion.div
     initial={{x:-20,  opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} 
     viewport={{ once: true }} transition={{ duration: 5, type: "spring" }}  
      
    className="grid gap-6 mt-8 lg:grid-cols-2  md:grid-cols-2 grid-cols-1 xl:grid-cols-2 items-center place-items-center ">


<Link href={"/projects/vision-orchard-square"} className={styles.brightness + " bg-red-200 w-full h-[400px] relative hover:brightness-100 cursor-pointer hover:scale-105 transition-transform transition-duration-300 "}>
          <Image  src={orchardsquare} fill={true} />
          <h1 className='absolute bottom-0 left-0 text-xl bg-red-600 px-4 text-white object-cover object-top'> Housing Society  </h1>
        </Link>


        <Link href={"/projects/wisal-garden"} className={styles.brightness + " bg-red-200 w-full h-[400px] relative hover:brightness-100 cursor-pointer hover:scale-110 transition-transform transition-duration-300 "}>
          <Image  src={wisalgarden} fill={true} />
          <h1 className='absolute bottom-0 left-0 text-xl bg-red-600 px-4 text-white object-cover object-top'> Housing Society  </h1>
        </Link>






        <Link href={"/projects/vision-21"} className={styles.brightness + " bg-red-200 w-full h-[400px] relative hover:brightness-100 cursor-pointer hover:scale-105 transition-transform transition-duration-300 "}>
          <Image  src={vision21} fill={true} />
          <h1 className='absolute bottom-0 left-0 text-xl bg-red-600 px-4 text-white object-cover object-top'> Housing Society  </h1>
        </Link>


        <Link href={"/projects/vision-model-town"} className={styles.brightness + " bg-red-200 w-full h-[400px] relative hover:brightness-100 cursor-pointer hover:scale-105 transition-transform transition-duration-300 "}>
          <Image  src={modeltown} fill={true} />
          <h1 className='absolute bottom-0 left-0 text-xl bg-red-600 px-4 text-white object-cover object-top'> Housing Society  </h1>
        </Link>


        <Link href={"/projects/vision-enclave"} className={styles.brightness + " bg-red-200 w-full h-[400px] relative hover:brightness-100 cursor-pointer hover:scale-105 transition-transform transition-duration-300 "}>
          <Image  src={visionenclave} fill={true} />
          <h1 className='absolute bottom-0 left-0 text-xl bg-red-600 px-4 text-white object-cover object-top'> Housing Society  </h1>
        </Link>

        <Link href={"/projects/malak-vision-housing-complex"} className={styles.brightness + " bg-red-200 w-full h-[400px] relative hover:brightness-100 cursor-pointer hover:scale-105 transition-transform transition-duration-300 "}>
          <Image  src={mvhc} fill={true} />
          <h1 className='absolute bottom-0 left-0 text-xl bg-red-600 px-4 text-white object-cover object-top'> Housing Society  </h1>
        </Link>

        <Link href={"/projects/umt-hazara"} className={styles.brightness + " bg-red-200 w-full h-[400px] relative hover:brightness-100 cursor-pointer hover:scale-105 transition-transform transition-duration-300 "}>
          <Image  src={umt} fill={true} />
          <h1 className='absolute bottom-0 left-0 text-xl bg-red-600 px-4 text-white object-cover object-top'> Housing Society  </h1>
        </Link>


        <Link href={"/projects/vision-motorway-hazara"} className={styles.brightness + " bg-red-200 w-full h-[400px] relative hover:brightness-100 cursor-pointer hover:scale-105 transition-transform transition-duration-300 "}>
          <Image  src={motorwaycity} fill={true} />
          <h1 className='absolute bottom-0 left-0 text-xl bg-red-600 px-4 text-white object-cover object-top'> Housing Society  </h1>
        </Link>



      </motion.div>

      </div>


    </div>
  );
}

export default Projects