import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import places from "@/clientData/PlacesData";
import Link from "next/link";
import Image from "next/image";


var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On React JS, remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const ProjectsSlider = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    navClass: ["owl-prev", "owl-next"],
    navText: ["", ""],
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      600: { items: 2 },
      700: { items: 3 },
      1000: { items: 4 },
    },
  };

  return (
    <div className="row no-gutters mx-10 ">
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2"
        id="owl-carousel-products"
      >
        <ul
          id="owl-carousel-ul"
          className="owl-carousel owl-loaded owl-drag"
        >
          <OwlCarousel
            className="owl-theme"
            loop
            margin={0}
            nav={true}
            navText={[
              '<img src="/images/Arrow_left.png" />',
              '<img src="/images/Arrow_right.png" />',
            ]}
            dots={false}
            animateIn={true}
            {...options}
          >
            {places &&
              places.length > 0 &&
              places.map((place) => {
                return (
                  <div key={place.name} className="h-[400px] w-[270px] bg-white shadow-lg flex flex-col cursor-pointer rounded-3xl   drop-shadow-xl">
                  <div className="h-[70%] relative">
                    <Image
                      fill={true}
                      alt="Project Picture"
                      objectFit="cover"
                      src={place.img}
                      className=""
                    />
                  </div>
                  <h3 className=" text-blue-700 block  font-bold ml-2 font-lora"> {place.type}</h3>
            
                  <h2 className="text-3xl font-semibold ml-2 mt-2 font-lora">{place.title}</h2>
                  <hr />
                  <div className="flex pl-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
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
            
                    <p className=""> {place?.location} </p>
                  </div>
                  <div className="mt-2">
                    <Link href={place?.link}
                      
                        type="button"
                        class="text-white m-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                      >
                        View Details
                     
                    </Link>
                  </div>
                </div>
                );
              })}
          </OwlCarousel>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsSlider;
