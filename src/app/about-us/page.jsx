'use client'
import React from 'react'
import Image from 'next/image'
import ceo from "@/assets/ceo.JPG"
import md from "@/assets/md.JPG"
import second from '../../public/aboutusbg.avif'
import manager from "@/public/shahsawar.jpeg"
import Slider from '@/components/Slider';
import TeamSlide from '@/components/TeamSlider'
import video from "../../public/intro.mp4"
import {motion} from "framer-motion"

function Aboutus() {
const content = {
  content:"We are an emerging group of various businesses like real estate development, construction services and planning, corporate brand building, Investment planning, sales & marketing services, and digital services. The group leaders aim to make the best real estate of Pakistan by the integration of modern technology, hardworking team and unique ideas. Thus, the (Vision Group of Companies) will act as the leading smartest Real Estate Company and play its due role in Pakistan's real estate development. The corporations head office is in Peshawar, with a plethora of site offices spreading across the country. Our vision is to become Pakistan's first value-based organization and revolutionize the real estate industry in Pakistan with 100% investor confidence, satisfaction and country-wide projects"
  ,services:"At our marketing agency specializing in real estate, we offer a comprehensive suite of services tailored to meet the evolving needs of our clients in today's dynamic market"
, vision:"Our vision is to surpass all expectations and become the foremost real estate company in Peshawar by harnessing the power of integrated technology, delivering an exceptional, seamless experience to our valued customers, and leading the industry with innovation and excellence.. Our expertise spans a wide spectrum of offerings, including:"
,ceoinfo:"Shahabul-Islam Sahil is the visionary leader at the helm of an organization, responsible for shaping its overall strategic direction and ensuring its successful execution. As the highest-ranking executive, He plays a pivotal role in driving the company's mission, growth, and profitability. Sahil, our esteemed CEO, is a visionary leader who has been instrumental in guiding VISION MARKETING GROUP of COMPANIES to new heights of success. With a distinguished career spanning 5+ years in Peshawar, Sahil has consistently demonstrated a remarkable ability to steer our company towards excellence."
,mdinfo:"M. Tayyab Khan: Leading the Way in Real Estate and Marketing . In the dynamic world of real estate and marketing, leadership plays a pivotal role in shaping the success of a company. At the helm of your organization stands Mr. M. Tayyab Khan, a visionary leader whose dedication and expertise have propelled the company to new heights."
,managerinfo:"Meet Shahnawaz, an exceptional marketing and real estate manager whose expertise and passion have made him a true leader in the industry. With a track record of success that spans several years, Shahnawaz has proven time and again that he is a force to be reckoned with in the world of real estate and marketing."
}



  return (
    <div className="">
      <div className="bg-gray-300 min-h-[300px] h-[400px] md:h-[450px]  relative">
        <Image fill={true} className="object-cover" alt='image' src={second} />
        <div className="min-h-[80px] w-1/2 min-w-1/3 bg-gray-900 absolute bottom-10 lg:min-w-1/3">
          <h1 className="text-white text-3xl font-poppins  pl-6 font-bold items-center">
            About Us{" "}
          </h1>
          <p className="text-white text-sm leading-3 font-poppins font-medium pl-6 pb-4">
            {" "}
            About Our Serivces ,Team and Enviroment{" "}
          </p>
        </div>
      </div>


      {/* About Us */}
      <motion.h1 initial={{ x: "-2rem", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} 
    viewport={{ once: true }} transition={{ duration: 3, type: "spring" }} className="font-light text-5xl text-center mt-4 text-gray-700 tracking-[16px] underline decoration-orange-500/80">
        {" "}
        ABOUT COMPANY{" "}
      </motion.h1>

      <motion.div
      initial={{ x: "-2rem", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} 
      viewport={{ once: true }} transition={{ duration: 3, type: "spring" }}
       className="px-4 flex flex-col mx-auto w-100  max-w-[80%] tracking-[2px] md:max-w-[60%] lg:max-w-[50%]   items-center    gap-[30px]">
        {/* Intro */}
        <div className="">
          <h1 className="font-bold text-left text-5xl text-orange-700 mt-4 md:text-4xl lg:text-4xl xl:text-5xl mt-[30px]">
            {" "}
            Who Are We ?{" "}
          </h1>

          <p className="text-md md:text-lg ">{content.content} </p>
        </div>

        {/* Services */}
        <div className="">
          <h2 className="font-bold text-left text-5xl text-orange-700 mt-4 md:text-4xl lg:text-4xl xl:text-5xl mt-[30px]">
            {" "}
            Our Services & Vision{" "}
          </h2>
          {content.services}
          {content.vision}
          <h2 className="font-bold text-4xl text-gray-600 tracking-[5px]">
            Services{" "}
          </h2>
          <ul className="font-bold">
            <li>► Future investment planning </li>
            <li>► Modern housing projects </li>
            <li>► Highrise projects </li>
            <li>► Business opportunity for young generation </li>
            <li>► Training system for real estate </li>
          </ul>
        </div>
      </motion.div>

      {/* CEO INFO */}

      <motion.div
       initial={{ x: "2rem", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} 
        transition={{ duration: 3, type: "spring" }}
      className="px-12 lg:flex md:flex lg:px-16 xl:px-16 xl:mx-auto gap-[30px] mt-10">
        {/* Image */}
        <div className="items-center md:ml-10 flex mx-auto md:w-1/2 lg:1/3 justify-center">
          <Image
            src={ceo}
            alt="image"
            width={500}
            height={500}
            objectFit="cover"
            className="rounded-full object-cover md:rounded-lg lg:rounded-lg xl:rounded-xl"
          />
        </div>
        {/* Content */}
        <div className="mt-5 mx-5 md:w-1/2 lg:1/2">
          <h2 className="text-2xl text-orange-600 text-center tracking-[15px]">
            {" "}
            CEO{" "}
          </h2>
          <h2 className="text-3xl text-gray-800 text-center font-bold font-lora tracking-[2px]">
            {" "}
            Shahabul-Islam Sahil{" "}
          </h2>
          <p className="sm:text-sm">{content.ceoinfo}</p>
        </div>
      </motion.div>

      <hr className="my-2" />
      <hr className="my-6" />

      {/* MD INFO */}

      <motion.div
       initial={{ x: "-2rem", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} 
       transition={{ duration: 3, type: "spring" }}
      
      className="px-12 lg:flex md:flex  lg:px-16 xl:px-16 xl:mx-auto gap-[30px] mt-10">
        {/* Image */}
        <div className="items-center md:ml-10 flex mx-auto md:w-1/2 lg:1/3 justify-center">
          <Image
            src={md}
            alt="image"
            width={500}
            height={500}
            className="rounded-full object-cover md:rounded-lg lg:rounded-lg xl:rounded-xl"
          />
        </div>
        {/* Content */}
        <div className="mt-5 mx-5 md:w-1/2 lg:1/2  ">
          <h2 className="text-2xl text-orange-600 text-center tracking-[15px] lg:tracking-[2px]">
            {" "}
            MANAGING DIRECTOR{" "}
          </h2>
          <h2 className="text-3xl text-gray-800 text-center font-semibold tracking-[8px] font-bold font-lora">
            {" "}
            M.TAYYAB KHAN{" "}
          </h2>
          <p>{content.mdinfo}</p>
        </div>
      </motion.div>

      <br />
      <hr className="my-2" />
      <hr className="my-16" />


      {/* TEAM INFO  */}
      <div className="mt-20 w-100  items-center ">
        
        <h2 className="text-4xl text-center lg:tracking-[2px] underline-offset-1">
          {"Business Developement " }<span className='font-bold'> Officers </span>
        </h2>
        <div className=' items-center justify-center '>
          <TeamSlide />
          
        </div>
      </div>



      <motion.div
       initial={{ x: "-2rem", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} 
       viewport={{ once: true }} transition={{ duration: 3, type: "spring" }}
      className="px-12 lg:flex md:flex  lg:px-16 xl:px-16 xl:mx-auto gap-[30px] mt-10">
        {/* Image */}
        <div className="items-center md:ml-10 flex mx-auto md:w-1/2 lg:1/3 justify-center">
          <Image
            src={manager}
            alt="image"
            width={400}
            height={400}
            className="rounded-full object-cover md:rounded-lg lg:rounded-lg xl:rounded-xl"
          />
        </div>
        {/* Content */}
        <div className="mt-5 mx-5 md:w-1/2 lg:1/2  items-center text-center">
          <h2 className="text-2xl text-orange-600 text-center tracking-[15px] lg:tracking-[2px]">
            {" "}
           BRANCH 2 MANAGER{" "}
          </h2>
          <h2 className="text-3xl text-gray-800 text-center font-semibold tracking-[8px] font-bold font-lora">
            {" "}
            SHAHSAWAR ALI KHAN{" "}
          </h2>
         <p> {content.managerinfo}
          </p>
        </div>
      </motion.div>


    </div>
  );
}

export default Aboutus