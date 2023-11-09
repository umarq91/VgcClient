import Image from "next/image";
import WhatsAppButton from "./Button";
import { useState } from "react";
import img from "@/assets/team.png"
import {motion} from "framer-motion"
function Hero() {

  return (
    <section className="hero-wrapper  pb-4  max-w-[90vw] mx-auto bg-white rounded-tl-full shadow-lg">
      {/* container */}
      <div className="flex  flex-wrap items-center gap-[25px]">
        {/* Left */}
        <div className="flex-1 relative">
          {/* <div className="h-24 w-24  absolute   top-10 bg-orange-300 rounded-full" /> */}
          {/* <div className="h-10 w-10 bg-blue-300 absolute  left-30 rounded-full"/> */}
          {/* <div className="h-16 w-16 absolute   bg-blue-300 rounded-full" /> */}
         
          <div className="hero-left flex flex-col justify-center">
            <motion.div
                initial={{ x: "-2rem", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 3,
                  type: "spring",
                }}
              className="hero-title  text-center  font-bold text-5xl lg:text-7xl lg:pb-10 md:text-6xl sm:text-5xl  leading-2 z-40"
            >
              <h1 className="leading-[45px] sm:leading-[60px] z-20">
                Vision <br />
                <span className="font-normal">Group of </span> <br /> <span className="text-orange-700"> Companies</span> 
              </h1>
            </motion.div>

            <motion.div
              initial={{ x: "-2rem", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 3,
                type: "spring",
              }}
            className="hero-descr flex flex-col justify-end text-sm opacity-70 italic">
              <span className="font-semibold italic">
                We are an emerging group of various businesses like real estate
                development, construction services and planning, corporate brand
                building, Investment planning, sales & marketing services, and
                digital services. The group leaders aim to make the best real
                estate of Pakistan by the integration of modern technology,
                hardworking team and unique ideas.
              </span>
            </motion.div>

            <motion.div 
              initial={{ x: "2rem", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 3,
                type: "spring",
              }}
            
            
            className="flex mt-4  ml-10">
              {/* Button for Our Location */}

              <a
                target="_blank"
                href={
                  "https://www.google.com/maps/place/MMC+General+Hospital/@34.0337191,71.6001506,19.22z/data=!4m6!3m5!1s0x38d93da3b8f429cb:0xbd5735e90857000!8m2!3d34.0336891!4d71.600201!16s%2Fg%2F1yg4vbl8m?entry=ttu"
                }
                className="w-[30%] hover:bg-black md:w-[130px] border-black border-2 rounded-full   flex items-center justify-center hover:scale-110 transition ease-in"
              > 
                <svg
                  className="pb-1 hover:scale-110 transition ease-in"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="2px"
                  width="30"
                  height="35"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#48b564"
                    d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z"
                  ></path>
                  <path
                    fill="#fcc60e"
                    d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z"
                  ></path>
                  <path
                    fill="#2c85eb"
                    d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z"
                  ></path>
                  <path
                    fill="#ed5748"
                    d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z"
                  ></path>
                  <path
                    fill="#5695f6"
                    d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z"
                  ></path>
                </svg>

                <span className=" font-light text-black text-xl pr-2 hover:text-white">
                  {" "}
                  Location
                </span>
              </a>

              {/* Email  */}
              <div className="border-black cursor-pointer   hover:bg-black hover:text-white border-2 rounded-full  flex justify-center px-2 py-1 ml-2 gap-2 hover:scale-110  transition ease-in">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-8 text-black hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <WhatsAppButton /> */}
                <span className="px-2  py-1 text-lg">

                Projects ►
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right */}

        <div className="hero-right  flex flex-1 justify-center items-center w-full relative ">
          <motion.div
            initial={{ x: "2rem", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 3,
              type: "spring",
            }}
            className="w-[600px] sm:w-[400px] md:w-[500px] relative h-[550px] lg:h-[550px] lg:mt-2  mt-8 overflow-hidden rounded-tl-3xl  border-opacity-[24] "
          >
            
              <Image
                alt="c"
                className="w-full  object-cover opacity-70"
                fill={true}

                src={img}
              />
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero