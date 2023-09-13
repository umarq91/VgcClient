
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PlacesData from "@/clientData/PlacesData";
import Link from "next/link";
import Image from "next/image";
const Countries = [


    {country:"London","img": "https://a.cdn-hotels.com/gdcs/production27/d274/43014cca-c88c-4061-ace8-58edc24531ee.jpg?impolicy=fcrop&w=800&h=533&q=medium"},
    {country:"Canada","img": "https://palmzeducation.com/wp-content/uploads/2023/08/28-mar-2023-blog.jpg"},
    {country:"Pakistan","img": "https://www.mashreqbank.com/-/jssmedia/Images/UAE/corporate/cibg/CIBG-images-4/global-footprint-2.ashx?h=2329&iar=0&w=3491&hash=73CBD9C61CDAC8F5039EF20A4ED280BD"},
    {country:"London","img": "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?cs=srgb&dl=pexels-pixabay-46160.jpg&fm=jpg"},

    {country:"London","img": "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?cs=srgb&dl=pexels-pixabay-46160.jpg&fm=jpg"},
    
]


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

const Slider = () => {
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

{PlacesData && PlacesData.length > 0

? PlacesData.map((product) => {
return (

    <Link key={product.title} href={`/projects/${product.name}`} className=" relative  hover:scale-105 transform transition duration-300 ease-out">
       
       <div className="relative min-h-[300px]   overflow-hidden">
        <Image  fill={true} className="rounded-xl bg-top" src={product.img} />
       </div>
       <h3 className="text-2xl mt-3 font-bold "> {product.title}</h3> </Link> 
);
})
: ""}
</OwlCarousel>
</ul>
</div>
</div>

)}
export default Slider;
        

        