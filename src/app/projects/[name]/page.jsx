"use client"
import React from 'react'
import {useParams} from 'next/navigation'
function SingleProject() {
  
  const params = useParams()
  console.log(params);
  return (
    <div>
        {params.name}
    </div>
  )
}

export default SingleProject