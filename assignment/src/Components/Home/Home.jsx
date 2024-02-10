import React from 'react'
import  "./Home.css"
import img1 from "../../assets/images/avataaars.svg"



export default function Home() {
  return <>
    <div className="color text-center py-4">

<img src={img1} className='w-25' alt="" />

   <h1 className=' text-white py-4'>START FRAMEWORK</h1>
   <div className='d-flex justify-content-center align-items-center'>

<div className='line text-center me-3'></div>
   <i className="fa-solid fa-star text-white"></i>
   <div className='line ms-3'></div>

    </div>
    <p className='text-white py-5'>Graphic Artist - Web Designer - Illustrator</p>
    </div>

    </>

}
