import React from 'react'

import  "./Contact.css"

export default function Contact() {
  return <> <div className='py-5'>

  <h1 className='text-center'>CONATCT SECTION</h1>
  <div className='d-flex justify-content-center align-items-center'>

<div className='blueLine  me-3'></div>
   <i className="fa-solid fa-star "></i>
   <div className='blueLine ms-3'></div>
   </div>
<div className="container">

   <form action="" className='mx-auto'>
    <input type="text"  className='form-control w-50 m-auto border-0 border-bottom my-5' placeholder='userName'/>
    <input type="text"  className='form-control w-50 m-auto border-0 border-bottom my-5' placeholder='userAge'/>
    <input type="email"  className='form-control w-50 m-auto border-0 border-bottom my-5' placeholder='userEmail'/>
    <input type="password"  className='form-control w-50 m-auto border-0 border-bottom my-5' placeholder='userPassword'/>
   <button className='btn text-white '>send Message</button>
   </form>

    </div>
    </div>

  </>
}
