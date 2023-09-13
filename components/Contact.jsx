import React from 'react'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import {AiOutlineMail} from 'react-icons/ai'





function Contacts() {
  return (
    <section>
        <h1 className='bg-gray-900 paddings innerWidth flexCenter text-white text-4xl italic'> Contact Section </h1>
<div className='paddings innerWidth flexCenter  c-container flex justify-between bg-gray-900 gap-12' >
{/* Left */}

<div className='c-left flexColStart flex  pb-4 text-white '>
    {/* <span className='orangeText text-3xl'>Our Contacts</span> */}
    
    <span className='text-blue-600 text-3xl  font-medium'> Easy to Contact Us</span><span className='secondaryText text-white'> We Always ready to help by providing the best services
        beleive <br/> a good place to live can make life better
    </span>

    <div className="flex contactModes mt-4 gap-2 "> 


<div className="grid lg:grid-cols-2 gap-x-20 gap-y-10 ">


    {/* first row */}
    
    <div className="flex  gap-4  ">
                <div className="flexColCenter mode w-[30rem] md:w-[25rem] lg:w-[16rem] p-[1rem] border-[0.8px] gap-[1rem] transition duration-150 ease-in hover:scale-110 hover:shadow-md">
<div className="flexStart">
    <div className="flexCenter bg-gray-200 p-2 text-blue-700">
        <MdCall size={25} />
    </div>
    <div className="flexColStart pt-1 detail text-[1.1rem] text-medium">
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

{/* right */}
<div className="c-right  w-1/3 ">

        <div className="image-container h-full w-[400px] items-center  flex justify-center">
            <img className='' src='https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg'/>
        </div>

</div>

</div>

    </section>
  )
}

export default Contacts