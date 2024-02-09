import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"
import Stats from './Stats'
const AboutUsNew = () => {
    const content = {
        content:"We are an emerging group of various businesses like real estate development, construction services and planning, corporate brand building, Investment planning, sales & marketing services, and digital services. The group leaders aim to make the best real estate of Pakistan by the integration of modern technology, hardworking team and unique ideas. Thus, the (Vision Group of Companies) will act as the leading smartest Real Estate Company and play its due role in Pakistan's real estate development. The corporations head office is in Peshawar, with a plethora of site offices spreading across the country. Our vision is to become Pakistan's first value-based organization and revolutionize the real estate industry in Pakistan with 100% investor confidence, satisfaction and country-wide projects"
        
      ,companyintro:"In 2017, two visionaries, Tayyab Khan and Shahabul-Islam Sahil, embarked on a journey to create not just a real estate and marketing company, but a platform that would be a beacon of opportunity and empowerment for the jobless. Thus, Vision Group of Companies was born, with a mission to not only provide people with new homes but also to offer meaningful employment opportunities.. Over the past 5-6 years, Vision Group has experienced remarkable growth, becoming a trusted name in the real estate industry. Their commitment to quality construction and innovative design has allowed countless individuals and families to achieve affordable homeownership. The company's success is not only evident in financial terms but also in the positive impact it has made on the lives of many. Vision Group's dedication to social responsibility is evident through its active engagement in community initiatives and support for local causes. As the company looks to the future, the founders remain committed to their original vision, striving to provide opportunities for the jobless and contribute to the well-being of the communities they serve. In the realm of real estate and marketing, Vision Group of Companies stands as a beacon of positive change, transforming both the lives of individuals and the landscape of the industries it operates in."
      }

    
      
  return (
    <div className='bg-gray-200 '>
        
      {/* About Us */}
      <motion.h1 initial={{ x: "2rem", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} 
      viewport={{ once: true }} transition={{ duration: 3, type: "spring" }}
      className="font-light text-2xl lg:text-5xl text-center mt-4 text-gray-700 tracking-[2px] underline decoration-red-500 font-lora">
        {" "}
       COMPANY INTRODCUTION{" "}
      </motion.h1>

{/* CEO  */}
 <div className="px-12 lg:flex md:flex lg:items-center lg:px-16 xl:px-16 xl:mx-auto gap-[30px] mt-10">
        {/* Image */}
        <motion.div initial={{ x: "2rem", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} 
    viewport={{ once: true }} transition={{ duration: 3, type: "spring" }}
        
        className="items-center md:ml-10 flex mx-auto md:w-1/2 lg:1/3 justify-center">
          <Image
            src={'https://res.cloudinary.com/dmlr7y0xh/image/upload/v1704434309/_AAA0218_j7s0xv.jpg'}
            alt="image"
            width={500}
            height={300}
            objectFit="cover"
            className="rounded-full drop-shadow-xl object-cover md:rounded-lg lg:rounded-lg xl:rounded-xl"
          />
        </motion.div>
        {/* Content */}
        <motion.div initial={{ x: "-2rem", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} 
    viewport={{ once: true }} transition={{ duration: 3, type: "spring" }}
           className="mt-5 mx-5 md:w-1/2 lg:1/2">
          <h2 className="text-5xl text-gray-800 text-center font-bold font-lora tracking-[2px]">
            {" "}
            Our Story{" "}
          </h2>
          <p className="sm:text-[16p] mt-2">{content.companyintro}</p>
        </motion.div>
      </div>




 <motion.div initial={{ x: "2rem", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} 
    viewport={{ once: true }} transition={{ duration: 3, type: "spring" }}
      
      
       className="px-4 flex flex-col mx-auto w-100  max-w-[80%] tracking-[2px] md:max-w-[60%] lg:max-w-[50%]   items-center    gap-[30px]">
        {/* Intro */}
        <div className="">
          <h1 className="font-bold text-center text-5xl text-orange-700 mt-4 md:text-4xl lg:text-4xl xl:text-5xl mt-[30px]">
            {" "}
            Who Are We ?{" "}
          </h1>

          <p className="text-md md:text-lg ">{content.content} </p>
        
        </div>
      
    <Link  href='/about-us'>
      <button className='text-white  text-lg m-2 bg-red-800 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'> Learn More About us </button>
    </Link>
      </motion.div>





    </div>
  )
}

export default AboutUsNew
