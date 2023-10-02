import React from 'react'
import PlacesData from '@/clientData/PlacesData'
import Image from 'next/image'



const Projects = () => {
  return (
    <div className="max-w-[90vw] mx-auto bg-gray-100  p-6 shadow-lg rounded-4xl">

      <h1 className='text-5xl font-poppins font-bold mx-auto text-center pb-10 '> Projects </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-10">
      {PlacesData && PlacesData.length > 0

&& PlacesData.map((product) => (

  <div key={product.title} className='bg-blue-500 h-[65vh] w-96  relative hover:bg-red-500 cursor-pointer  shadow-md rounded-3xl overflow-hidden transition ease-in-out hover:-translate-y-3'>
    <Image alt='image' src={product.img} fill={true}  className='object-cover opacity-40'/>
  <h3 className='text-white absolute bottom-12 left-4'> {product.type} </h3>
  <h3 className='text-white text-2xl absolute bottom-5 left-4 font-semibold '>{product.title} </h3>
    </div>


)


)}
      </div>
    </div>
  );
}

export default Projects