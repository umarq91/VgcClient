'use client'
import React from 'react'
import Image from 'next/image'
import ceo from "@/assets/ceo.JPG"
import md from "@/assets/md.JPG"

import Slider from '@/components/Slider';
function Aboutus() {
const content = {
  content:"We are an emerging group of various businesses like real estate development, construction services and planning, corporate brand building, Investment planning, sales & marketing services, and digital services. The group leaders aim to make the best real estate of Pakistan by the integration of modern technology, hardworking team and unique ideas. Thus, the (Vision Group of Companies) will act as the leading smartest Real Estate Company and play its due role in Pakistan's real estate development. The corporations head office is in Peshawar, with a plethora of site offices spreading across the country. Our vision is to become Pakistan's first value-based organization and revolutionize the real estate industry in Pakistan with 100% investor confidence, satisfaction and country-wide projects"
  ,services:"At our marketing agency specializing in real estate, we offer a comprehensive suite of services tailored to meet the evolving needs of our clients in today's dynamic market"
, vision:"Our vision is to surpass all expectations and become the foremost real estate company in Peshawar by harnessing the power of integrated technology, delivering an exceptional, seamless experience to our valued customers, and leading the industry with innovation and excellence.. Our expertise spans a wide spectrum of offerings, including:"
,ceoinfo:"Shahabul-Islam Sahil is the visionary leader at the helm of an organization, responsible for shaping its overall strategic direction and ensuring its successful execution. As the highest-ranking executive, He plays a pivotal role in driving the company's mission, growth, and profitability. Sahil, our esteemed CEO, is a visionary leader who has been instrumental in guiding VISION MARKETING GROUP of COMPANIES to new heights of success. With a distinguished career spanning 5+ years in Peshawar, Sahil has consistently demonstrated a remarkable ability to steer our company towards excellence."
,mdinfo:"M. Tayyab Khan: Leading the Way in Real Estate and Marketing . In the dynamic world of real estate and marketing, leadership plays a pivotal role in shaping the success of a company. At the helm of your organization stands Mr. M. Tayyab Khan, a visionary leader whose dedication and expertise have propelled the company to new heights."}



  return (
    <div className="mt-4">
      <div className="bg-gray-300 min-h-[300px]  relative">
        <Image
          fill={true}
          className="object-cover"
          src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        <div className="min-h-[80px] w-1/2 min-w-1/3 bg-green-400 absolute bottom-10 lg:min-w-1/3">
          <h1 className="text-black text-3xl font-poppins  pl-6 font-bold items-center">
            About Us{" "}
          </h1>
          <p className="text-black text-sm leading-3 font-poppins font-medium pl-6 pb-4">
            {" "}
            About Our Serivces ,Team and Enviroment{" "}
          </p>
        </div>
      </div>
      {/* About Us */}
      <h1 className="font-light text-5xl text-center mt-4 text-gray-700 tracking-[16px] underline decoration-orange-500/80">
        {" "}
        ABOUT US{" "}
      </h1>
      
      <div className="px-4 md:flex lg:flex  lg:px-16 xl:px-16 xl:mx-auto gap-[30px]">
        {/* Intro */}
        <div className="flex-3  md:w-full lg:w-1/2">
          <h1 className="font-semibold text-center text-3xl text-orange-700 mt-4 md:text-4xl lg:text-4xl xl:text-5xl">
            {" "}
            Who Are We ?{" "}
          </h1>

          <p className="text-sm md:text-lg">{content.content} </p>
        </div>

        {/* Services */}
        <div className="flex-2  md:w-full lg:w-1/2">
          <h2 className="font-semibold text-center text-3xl text-orange-700 mt-4 md:text-4xl lg:text-4xl xl:text-5xl">
            {" "}
            Our Serices & Vision{" "}
          </h2>
          {content.services}
          {content.vision}
          <h2 className="font-bold text-2xl text-gray-600 tracking-[5px]">
            Services{" "}
          </h2>
          <ul>
            <li>► Future investment planning </li>
            <li>► Modern housing projects </li>
            <li>► Highrise projects </li>
            <li>► Business opportunity for young generation </li>
            <li>► Training system for real estate </li>
          </ul>
        </div>
      </div>



                                               {/* CEO INFO */}


      <div className="px-4 lg:flex md:flex lg:px-16 xl:px-16 xl:mx-auto gap-[30px] mt-10">
        {/* Image */}
        <div className="items-center md:ml-10 flex mx-auto md:w-1/2 lg:1/3 justify-center">
          <Image
            src={ceo}
            alt='image'
            width={500}
            height={500}
            objectFit='cover'
            className="rounded-full object-cover md:rounded-lg lg:rounded-lg xl:rounded-xl"
          />
        </div>
        {/* Content */}
        <div className="mt-5 md:w-1/2 lg:1/2">
          <h2 className="text-2xl text-orange-600 text-center tracking-[15px]">
            {" "}
            CEO{" "}
          </h2>
          <h2 className="text-3xl text-gray-800 text-center font-semibold tracking-[5px]">
            {" "}
            Shahabul-Islam Sahil{" "}
          </h2>
          <p className='sm:text-sm'>{content.ceoinfo}</p>
        </div>
      </div>


<hr className='my-2'/>
<hr className='my-6'/>

{/* MD INFO */}

      <div className="px-4 lg:flex md:flex  lg:px-16 xl:px-16 xl:mx-auto gap-[30px] mt-10">

    
        {/* Image */}
        <div className="items-center md:ml-10 flex mx-auto md:w-1/2 lg:1/3 justify-center">
          <Image
            src={md}
            alt='image'
            width={500}
            height={500}
            className="rounded-full object-cover md:rounded-lg lg:rounded-lg xl:rounded-xl"
          />
        </div>
        {/* Content */}
        <div className="mt-5 md:w-1/2 lg:1/2  ">
          <h2 className="text-2xl text-orange-600 text-center tracking-[15px] lg:tracking-[2px]">
            {" "}
            MANAGING DIRECTOR{" "}
          </h2>
          <h2 className="text-3xl text-gray-800 text-center font-semibold tracking-[8px]">
            {" "}
           M.TAYYAB KHAN{" "}
          </h2>
          <p>{content.mdinfo}</p>
          <button className='bg-green-400 text-white hover:opacity-60  px-2 py-1 flex'>
          <svg xmlns="http://www.w3.org/2000/svg" className='pb-1' x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
</svg>
            Send a Message
          </button>
        </div>

      </div>


     
      <br />
      TEAM INFO <br />
    </div>
  );
}

export default Aboutus