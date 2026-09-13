import React from 'react'
 import 'remixicon/fonts/remixicon.css'

const RightCardContent = (props) => {
  return (
    <div>
         <div className="absolute top-0 left-0 h-full w-full bg-r-300 p-10 flex flex-col justify-between"> 
     <h2 className="bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">{props.id+1}</h2>
    <div >
    <p className="text-lg leading-normal text-white text-2xl mb-10">{props.intro}</p>
    <div className="flex justify-between">
    <button className=" bg-blue-600  text-white font-medium px-8 py-2 rounded-full">{props.tag}</button>
    <button className=" bg-blue-600  text-white font-medium px-3 py-2 rounded-full"> <i className="ri-arrow-right-line"></i></button>
   </div>
   </div>
   </div>
    </div>
  )
}

export default RightCardContent