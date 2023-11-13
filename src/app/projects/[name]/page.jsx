'use client'
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import googlemap from "@/assets/gmap.jpg"
import projectsData from '@/clientData/projectsData';
import Link from 'next/link';
import Image from 'next/image';
import styles from  "./style.module.css"
import wisalGarden from "@/assets/projects/wisalgarden.jpeg"



function SingleProject() {
  const [data, setdata] = useState(null);
  const params = useParams();

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  useEffect(() => {
    function getProjectByName(name) {
      return projectsData?.find(project => project?.name === name);
    }

    let foundProject = getProjectByName(params.name);

    if (foundProject) {
      setdata(foundProject);
      console.log(foundProject);
      console.log("Yes, found it");
    } else {
      console.log("Nope");
    }
  }, [params.name]); // Add params.name as a dependency to the useEffect


  return (
    
    <div className={styles.body} id='' >
      {/* Top  */}
      <div className=" h-[300px] xl:h-[500px] md:h-[450px] w-full relative ">
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


        <div className="flex flex-col data?s-center justify-center h-full relative">
          <h1 className="text-white m-0 text-2xl font-light text-center  ">PROJECT</h1>
          <h2 className="text-center text-white text-5xl font-bold font-inconsolata tracking-[4px] bg-red-500 py-1 px-3 bg-opacity-70">
            {" "}
           {data?.name.toUpperCase()}
          </h2>
        </div>
      </div>



      {/*  */}
     

    
      <div className="mx-10  mx-auto max-w-screen-lg mx-auto bg-white">

          {/* TEST */}
          <div className='my-10 '>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-openSans mb-4 text-gray-900'> {data?.title} - {data?.info?.city} </h1>
          <div className='max-h-[400px] h-[400px] relative'>
           <Image src={wisalGarden} fill={true} objectFit='cover' />
            </div>

            <h2 className='text-4xl text-gray-900 font-bold mt-8 mb-10'> Overview | <span className="text-blue-900 mb-10">Project Information  </span>  </h2>

            <table className='w-full  h-full' style={{ borderSpacing: '20px 10px' }}>
  <tbody className='text-left'>
    <tr className='hover:bg-gray-200 ' style={{ borderBottom: '1px solid lightgray' }}>
      <th>Locality</th>
      <td>{data?.info?.locality}</td>
    </tr>
    <tr className='hover:bg-gray-200 ' style={{ borderBottom: '1px solid lightgray' }}>
      <th>City</th>
      <td>{data?.info?.city}</td>
    </tr>
    <tr className='hover:bg-gray-200 ' style={{ borderBottom: '1px solid lightgray' }}>
      <th>Type</th>
      <td>{data?.info?.type}</td>
    </tr>
    <tr className='hover:bg-gray-200' style={{ borderBottom: '1px solid lightgray' }}>
      <th>Developer</th>
      <td>{data?.info?.developer}</td>
    </tr>
    <tr className='hover:bg-gray-200' style={{ borderBottom: '1px solid lightgray' }}>
      <th>Payment Plan</th>
      <td>{data?.info?.paymentplan}</td>
    </tr>
    <tr className='hover:bg-gray-200' style={{ borderBottom: '1px solid lightgray' }}>
      <th>Accepted payment mode</th>
      <td>{data?.info?.paymentmodes}</td>
    </tr>
  </tbody>
</table>


            </div>






      {data?.openingvideo && (
        <div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-5xl mt-16  mt-4 text-gray-700 tracking-[2px]  mb-1 ">
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
            <source src={data?.openingvideo} type="video/mp4" />
          </video>
        </div>
      )}
   
        {/* Location */}

        <div className="px-12 lg:flex md:flex lg:px-16 xl:px-16 xl:mx-auto gap-[30px] mt-10 bg-gray-100 shadow-lg rounded-lg">
          {/* Content */}
          <div className="mt-5 md:mt-24 mx-5 md:w-1/2 lg:w-1/2 data?s-center flex-1">
            <h2 className="text-5xl  mb-2 text-center tracking-[5px] font-lora">
              {" "}
              Location{" "}
            </h2>
      

            <p>
             {data?.locationdescription} <br />
            </p>
             <p className='font-bold'> {data?.info?.locality} </p>
              {/* <span className="font-bold"> 5 minutes From Motorway </span> */}

            {/* <Link
              href={data?.location|| ""}
              className=" flex data?s-center justify-center"
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
            </Link> */}
          </div>

          <div className="data?s-center md:ml-10 py-10 flex mx-auto md:w-1/2 lg:w-1/3 justify-center flex-1 relative ">
            <Image src={googlemap} width={800 } height={900} className='relative'/>
            <Link
              href={data?.location || ""}
              className=" flex data?s-center justify-center"
            >
             <button className="text-white text-lg flex bg-blue-600 mt-10 absolute left-[30%] top-[40%] hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-7 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
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
        </div>

        <hr className="pt-10 mt-4 opacity-70 innerWidth" />



{/* Schedule */}
        <div className="mt-5 md:mt-24 mx-5  data?s-center bg-gray-100 shadow-lg rounded-lg">
          <h2 className="text-5xl text-orange-600 text-center tracking-[5px] font-lora">
            {" "}
            SCHEDULE{" "}
          </h2>

          <div className='w-full data?s-center flex justify-center '>
            <div className="relative w-full h-auto md:w-[500px]">
              <Image src={data?.schedule} width={500} height={400} />
            {data?.schedule2 && ( 
            <div> 
                <Image className='my-10' src={data?.schedule2} width={500} height={400} />
            </div>)}
            </div>
          </div>


        </div>

{data?.gallery && (
  <>
<h1 className='text-center text-4xl font-semibold mt-10'> --- Gallery --- </h1>
  <div className="grid grid-cols-1 gap-6 mt-8   lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 items-center place-items-center">
  {data?.gallery?.map((item, index) => (
    <div key={index} className="bg-red-200 w-full h-[400px] relative hover:brightness-100 cursor-pointer hover:scale-110 transition-transform transition-duration-300">
      <Image src={item.image} fill={true} objectFit="cover" objectPosition="center" />
    </div>
  ))}
</div>
  </>
  )}


      </div>
       
 
    </div>

  );
}

export default SingleProject;
