import Image from 'next/image'
import React from 'react'
import img from "../public/darmangi.jpg"
import Link from 'next/link'

const ProjectCard = () => {
  return (
    <div className=' ml-10 h-[450px] w-[400px] bg-white shadow-lg flex flex-col cursor-pointer rounded-3xl hover:bg-red-600 hover:text-white hover:opacity-100 opacity-80'>
    <div className='h-[70%] relative bg-blue-200  '>
        <Image 
        fill={true}
         alt="Project Picture"
         objectFit='cover'
         src={img}
      
        />
        </div>   
        <h3 className='bg-red-600 text-white block text-center font-semibold'> -- Residential</h3>     
        
    <h2 className='text-3xl font-bold ml-2 mt-2'>
        Project Title
    </h2>
    <div className='mt-2'>
    <Link href={""}><button className=' px-2 py-2 mt-2 ml-3 bg-red-500 text-white ml-2 hover:bg-black hover:text-white cursor-pointer ml-2'> View Details </button> </Link>
        </div>

    </div>
  )
}

export default ProjectCard