import Image from "next/image";
import React from "react";
import img from "../public/darmangi.jpg";


import Link from "next/link";

const ProjectCard = ({img,type,title,location}) => {
  return (
    <div className=" h-[450px] w-[330px] md:w-[360px]  bg-white shadow-lg flex flex-col cursor-pointer rounded-3xl hover:-translate-y-4 ease-in delay-150 translate-64 drop-shadow-xl justify-center">
      <div className="h-[70%] relative">
        <Image fill={true} alt="Project Picture" objectFit="cover" src={img} className="" />
      </div>
      <h3 className=" text-blue-700 block  font-bold ml-2 font-lora"> {type}</h3>

      <h2 className="text-3xl font-semibold ml-2 mt-2 font-lora">{title}</h2>
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

        <p className=""> {location} </p>
      </div>
      <div className="mt-2">
        <Link href={""}>
          <button
            type="button"
            class="text-white m-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            View Details
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
