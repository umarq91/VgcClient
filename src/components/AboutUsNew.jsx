import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ceo from "@/public/sahil.JPG"
import {motion} from "framer-motion"
import Stats from './Stats'
const AboutUsNew = () => {
    const content = {
        content:"We are an emerging group of various businesses like real estate development, construction services and planning, corporate brand building, Investment planning, sales & marketing services, and digital services. The group leaders aim to make the best real estate of Pakistan by the integration of modern technology, hardworking team and unique ideas. Thus, the (Vision Group of Companies) will act as the leading smartest Real Estate Company and play its due role in Pakistan's real estate development. The corporations head office is in Peshawar, with a plethora of site offices spreading across the country. Our vision is to become Pakistan's first value-based organization and revolutionize the real estate industry in Pakistan with 100% investor confidence, satisfaction and country-wide projects"
        ,services:"At our marketing agency specializing in real estate, we offer a comprehensive suite of services tailored to meet the evolving needs of our clients in today's dynamic market"
      , vision:"Our vision is to surpass all expectations and become the foremost real estate company in Peshawar by harnessing the power of integrated technology, delivering an exceptional, seamless experience to our valued customers, and leading the industry with innovation and excellence.. Our expertise spans a wide spectrum of offerings, including:"
      ,ceoinfo:"Shahabul-Islam Sahil is the visionary leader at the helm of an organization, responsible for shaping its overall strategic direction and ensuring its successful execution. As the highest-ranking executive, He plays a pivotal role in driving the company's mission, growth, and profitability. Sahil, our esteemed CEO, is a visionary leader who has been instrumental in guiding VISION MARKETING GROUP of COMPANIES to new heights of success. With a distinguished career spanning 5+ years in Peshawar, Sahil has consistently demonstrated a remarkable ability to steer our company towards excellence."
      ,mdinfo:"M. Tayyab Khan: Leading the Way in Real Estate and Marketing . In the dynamic world of real estate and marketing, leadership plays a pivotal role in shaping the success of a company. At the helm of your organization stands Mr. M. Tayyab Khan, a visionary leader whose dedication and expertise have propelled the company to new heights."
      ,managerinfo:"Meet Shahnawaz, an exceptional marketing and real estate manager whose expertise and passion have made him a true leader in the industry. With a track record of success that spans several years, Shahnawaz has proven time and again that he is a force to be reckoned with in the world of real estate and marketing."
      }
      
  return (
    <div className='bg-gray-200 shadow-lg drop-shadow-2xl'>
        
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
            src={ceo}
            alt="image"
            width={300}
            height={300}
            objectFit="cover"
            className="rounded-full drop-shadow-xl object-cover md:rounded-lg lg:rounded-lg xl:rounded-xl"
          />
        </motion.div>
        {/* Content */}
        <motion.div initial={{ x: "-2rem", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} 
    viewport={{ once: true }} transition={{ duration: 3, type: "spring" }}
           className="mt-5 mx-5 md:w-1/2 lg:1/2">
          <h2 className="text-2xl text-orange-600 text-center tracking-[15px]">
            {" "}
            CEO{" "}
          </h2>
          <h2 className="text-5xl text-gray-800 text-center font-bold font-lora tracking-[2px]">
            {" "}
            Shahabul-Islam Sahil{" "}
          </h2>
          <p className="sm:text-sm">{content.ceoinfo}</p>
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
       {/* Only for gitub  */}
    <Link  href='/about-us'>
      <button className='text-white  text-lg m-2 bg-red-800 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'> Learn More About us </button>
    </Link>
      </motion.div>





    </div>
  )
}

export default AboutUsNew