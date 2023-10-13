"use client"
import React from 'react'
import introvideo from "@/public/projects/wisalgarden.mp4"
import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';


const WisalGarden = () => {
  const latitude = 34.07059623159645;
  const longitude = 71.71340198281155 ;
  const zoomLevel = 17;

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.330685110177!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfb95d84aaae21%3A0x166e06299e5a5f7f!2s${latitude}%2C%20${longitude}!5e0!3m2!1sen!2sen!4v1633280623754!5m2!1sen!2sen&z=${zoomLevel}`;
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };



  return (
    <>
      {/* Top  */}
      <div className=" h-[300px] xl:h-[500px] md:h-[450px] w-full relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ filter: "brightness(0.5)" }}
        ></div>
        <div className="flex flex-col items-center justify-center h-full relative">
          <h1 className="text-white m-0 text-2xl font-light ">PROJECT</h1>
          <h2 className="text-center text-white text-5xl font-bold font-inconsolata tracking-[4px]">
            {" "}
            WISAL GARDEN
          </h2>
        </div>
      </div>

      {/*  */}
      <div className="mx-8 md:mx-16 mx-auto max-w-[100vw]">
        <div>
          <h1 className="font-light text-3xl md:text-4xl lg:text-5xl xl:text-5xl mt-16 text-center mt-4 text-gray-700 tracking-[2px] underline decoration-orange-500/80 mb-8 ">
            {" "}
            Grand Opening{" "}
          </h1>
          <video
            autoPlay
            muted
            onPlay={() => setIsVideoPlaying(true)}
            loop
            className="h-[100vh] w-full object-cover -z-1"
            style={{ filter: "brightness(50%)" }} // Adjust the brightness value as needed
          >
            <source src={introvideo} type="video/mp4" />
          </video>
        </div>


        <hr className="pt-20 mt-10 opacity-70 innerWidth" />

        <hr className="pt-20 mt-10 opacity-70 innerWidth" />

        {/* Location */}

        <div className="px-12 lg:flex md:flex lg:px-16 xl:px-16 xl:mx-auto gap-[30px] mt-10">
          {/* Content */}
          <div className="mt-5 md:mt-24 mx-5 md:w-1/2 lg:1/2 items-center">
            <h2 className="text-5xl text-orange-600 text-center tracking-[5px] font-lora">
              {" "}
              Location{" "}
            </h2>
            {/* <h2 className="text-3xl text-gray-800 text-center font-bold font-lora tracking-[2px]">
            {" "}
            Shahabul-Islam Sahil{" "}
          </h2> */}

            <p>
              Project Wisal Garden is located at ideal and prime location in the
              city. Residents get the liberty of quick and easy access to
              various locations <br/>
              <span className="font-bold"> 5 minutes From Motorway </span>
            </p>

            <Link
              href="https://www.google.com/maps/dir//3PC7%2B5C6+Wisal+Gardens,+Peshawar,+Khyber+Pakhtunkhwa+25000/@34.0301642,71.461499,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x38d93b9eed3069f7:0x800cbd8e81615354!2m2!1d71.7135111!2d34.0703789?entry=ttu"
              className=" flex items-center justify-center"
            >
              <button className="text-white text-lg flex bg-blue-600 mt-10 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-7 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Get Directions{" "}
              </button>
            </Link>
          </div>

          <div className="items-center md:ml-10 flex mx-auto md:w-1/2 lg:1/3 justify-center">
            <iframe
              src={mapSrc}
              width="100%"
              height="400px"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default WisalGarden