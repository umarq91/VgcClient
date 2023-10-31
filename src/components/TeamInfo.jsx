
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import Image from "next/image";



var $ = require("jquery");
if (typeof window !== "undefined") {
window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const TeamInfo = () => {
const options = {
  margin: 30,
  responsiveClass: true,
  nav: true, dots: true,
  autoplay: true,
  smartSpeed: 1000,
  navClass: ["owl-prev", "owl-next"],
  navText: ["", ""],
  responsive: {
    0: { items: 1,}, 400: {items: 1,}, 600: {  items: 2,}, 700: {items: 3,}
    , 1000: { items: 4,},},
};

return (
<div className="row no-gutters">
<div
className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2"
id="owl-carousel-products"
>
<ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
<OwlCarousel
className="owl-theme"
loop
margin={4}
nav={true}
navText={[
'<img src="/images/Arrow_left.png" />',
'<img src="/images/Arrow_right.png" />',
]}
dots={false}
animateIn={true}
{...options}
>

{/* {PlacesData && PlacesData.length > 0

&& PlacesData.map((product) => {
return (

    <Link key={product.title} href={`/projects/${product.name}`} className=" relative  hover:scale-105 transform transition duration-300 ease-out">
       
       <div className="relative min-h-[300px]   overflow-hidden">
        <Image  alt="" fill={true} className="rounded-xl bg-top" src={product.img} />
       </div>
       <h3 className="text-2xl mt-3 font-bold "> {product.title}</h3> </Link> 
);
})
} */}
</OwlCarousel>
</ul>
</div>
</div>

)}
export default TeamInfo;
        

        