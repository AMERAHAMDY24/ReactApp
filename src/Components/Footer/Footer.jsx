import React from 'react'
import "./Footer.css"
export default function Footer() {
  return <>
  <div className='w-100 secondColor py-5'>

  <div className="container ">
<div className="row">

    <div className="col-md-4 p-5">

        <h2 className='text-white'>LOCATION</h2>
        <p className='text-white'>2215 John Daniel Drive</p>
        <p className='text-white'>Clark, MO 65243</p>

    </div>
    <div className="col-md-4 p-5">
    <h2 className='text-white'>AROUND THE WEB</h2>
    <div className="socials d-flex gap-3 ps-5  ">
    <i className="fa-brands fa-facebook text-white icon "></i>
    <i className="fa-brands fa-twitter text-white icon"></i>
    <i className="fa-brands fa-linkedin text-white icon"></i>
    <i className="fa-solid fa-globe text-white icon"></i>
    </div>

    </div>
    <div className="col-md-4 p-5">

    <h2 className='text-white'>ABOUT FREELANCER</h2>
    <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

    </div>

  </div>
  </div>     
  </div>

  <div className='bg-dark w-100 py-4'>

    <p className='text-center text-white'>Copyright © Your Website 2021</p>
  </div>
  
  </>
  
}
