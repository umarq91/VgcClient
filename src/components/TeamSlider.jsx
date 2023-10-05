import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TeamData from "@/clientData/TeamData";
import Link from "next/link";
import Image from "next/image";

import img from "@/public/person.jpg";

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

const TeamSlide = () => {
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
            {TeamData &&
              TeamData.length > 0 &&
              TeamData.map((person) => {
                return (
                  <div
                    key={person.id}
                    className="carousel-item-wrapper flex items-center justify-center" // Added this wrapper div with Tailwind CSS classes
                  >
                    <div className="h-[400px] w-[250px] bg-white shadow-lg flex flex-col cursor-pointer rounded-3xl hover:-translate-y-4 ease-in delay-150 translate-64 drop-shadow-xl">
                      <div className="h-[70%] relative">
                        <Image
                          fill={true}
                          alt="Project Picture"
                          objectFit="cover"
                          src={img}
                          className=""
                        />
                      </div>

                      <h2 className="text-2xl font-semibold ml-2 mt-2 font-lora">
                        {person.name}
                      </h2>
                      <hr />
                      <div className="flex pl-2">
                        <p className="">
                          Contact No: {person.phone}
                        </p>
                      </div>
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

export default TeamSlide;
