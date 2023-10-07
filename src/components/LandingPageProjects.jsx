import React from 'react'
import ProjectsSlider from './ProjectsSlider'
import PlacesData from '@/clientData/PlacesData'
const LandingPageProjects = () => {
  return (
    <div>
  {PlacesData && PlacesData.length> 0 &&
      PlacesData.map((place)=>(
        <ProjectsSlider key={place.name} img={place.img} type={place.type} title={place.title} location={"Peshawar"}/>
        
      ))
      }

        
    </div>
  )
}

export default LandingPageProjects