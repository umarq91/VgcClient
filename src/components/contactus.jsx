import React from 'react'
import Image from 'next/image'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import {AiOutlineMail} from 'react-icons/ai'

function ContactUs() {
  return (
    <div className='flex gap-[50px] flex-wrap pt-2    p-4  mt-20'>
{/* Left */}
<div className='c-left flex-col  w-7/12 flex-2  flex  pb-4 text-white '>
    {/* <span className='orangeText text-3xl'>Our Contacts</span> */}
    
    <span className='text-blue-600 text-3xl  font-medium'> Easy to Contact Us</span><span className='secondaryText text-white'> We Always ready to help by providing the best services
        beleive <br/> a good place to live can make life better
    </span>

    <div className="flex contactModes mt-4 gap-2 "> 


<div className="grid lg:grid-cols-2 gap-x-20 gap-y-10 ">


    {/* first row */}
    
    <div className="flex   ">
                <div className="flex flex-col justify-center mode w-[30rem] md:w-[25rem] lg:w-[16rem] p-[1rem] border-[0.8px] gap-[1rem] transition duration-150 ease-in hover:scale-110 hover:shadow-md">
<div className="flexStart   flex flex-start">
    <div className="flexCenter flex items-center justify-center bg-gray-200 p-2 text-blue-700">
        <MdCall size={25} />
    </div>
    <div className="flex flex-col justify-start pt-1 detail text-[1.1rem] text-medium">
        <span className=' px-2 gap-[1.6rem] text-[1.6rem] w-100 text-white'>Call </span><span className='secondaryText pl-2 text-white'>0312 09125234</span>
    </div>
</div>
<button className="flexCenter flex justify-center button bg-blue-100  p-2 py-1 text-blue-600 w-100 text-[0.9rem] cursor-pointer hover:bg-blue-800 hover:text-white hover:scale-[0.8] transition duration-150 ease-in">
    Call Now
</button>

                </div>
        </div>
        
{/* Message */}
<div className=" row gap-4">
<div className="flexColCenter mode w-[30rem] md:w-[25rem] lg:w-[16rem] p-[1rem] border-[0.8px] gap-[1rem] transition duration-150 ease-in hover:scale-110 hover:shadow-md">

<div className="flexStart">
    <div className="flexCenter bg-gray-200 p-2 text-blue-700">
        <HiChatBubbleBottomCenter size={25} />
    </div>
    <div className="flexColStart pt-1 detail text-[1.1rem] text-medium">
        <span className=' px-2 gap-[1.6rem] text-[1.6rem] w-100'>Message </span><span className='secondaryText pl-2 text-white'>0312 09125234</span>
    </div>
</div>
<button className="flexCenter flex justify-center button bg-blue-100 p-2 py-1 text-blue-600 w-100 text-[0.9rem] cursor-pointer hover:bg-blue-800 hover:text-white hover:scale-[0.8] transition duration-150 ease-in">
    Call Now
</button>

                </div>
        </div>

{/* Third Row */}
<div className=" row gap-4">
<div className="flexColCenter mode w-[30rem] md:w-[25rem] lg:w-[16rem] p-[1rem] border-[0.8px] gap-[1rem] transition duratio n-150 ease-in hover:scale-110 hover:shadow-md">

<div className="flexStart">
    <div className="flexCenter bg-gray-200 p-2 text-blue-700">
        <BsFillChatDotsFill size={25} />
    </div>
    <div className="flexColStart pt-1 detail text-[1.1rem] text-medium">
        <span className=' px-2 gap-[1.6rem] text-[1.6rem] w-100'>Whatsapp </span><span className='secondaryText pl-2 text-white'>0312 09125234</span>
    </div>
</div>
<button className="flexCenter flex justify-center button bg-blue-100 p-2 py-1 text-blue-600 w-100 text-[0.9rem] cursor-pointer hover:bg-blue-800 hover:text-white hover:scale-[0.8] transition duration-150 ease-in">
    Message Now
</button>

                </div>
        </div>
{/*Forth */}
<div className=" row gap-4">
<div className="flexColCenter mode w-[30rem] md:w-[25rem] lg:w-[16rem] p-[1rem] border-[0.8px] gap-[1rem] transition duration-150 ease-in hover:scale-110 hover:shadow-md">

<div className="flexStart">
    <div className="flexCenter bg-gray-200 p-2 text-blue-700">
        <AiOutlineMail size={25} />
    </div>
    <div className="flexColStart pt-1 detail text-[1.1rem] text-medium">
        <span className=' px-2 gap-[1.6rem] text-[1.6rem] w-100'> Mail </span><span className='secondaryText pl-2 text-white'>helpVGC@gmail.com</span>
    </div>
</div>
<button className="flexCenter flex justify-center button bg-blue-100 p-2 py-1 text-blue-600 w-100 text-[0.9rem] cursor-pointer hover:bg-blue-800 hover:text-white hover:scale-[0.8] transition duration-150 ease-in">
    Mail Now
</button>

                </div>
        </div>


        </div>
    </div>
</div>
    {/* Right */}
    <div className="c-right  flex-2 ">

<div className="image-container h-full min-h-[300px] min-w-[500px] items-center  flex justify-center relative">
    <Image alt='' className='object-cover' fill={true} src='https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'/>
</div>

</div>


    </div>

  )
}

export default ContactUs