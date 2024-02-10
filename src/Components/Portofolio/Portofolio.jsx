import React, { useEffect } from 'react'
import image1 from "../../assets/images/poert1.png"
import image2 from "../../assets/images/port2.png"
import image3 from "../../assets/images/port3.png"
import "./Portofolio.css"

const listenScroll =()=>{
  let images=Array.from(document.querySelectorAll(".imglayer img"))
let boxContainer=document.querySelector(".boxContainer")
let boxImage=document.querySelector(".boxImage")
for (let i=0;i<images.length;i++){
  images[i].addEventListener("click",function(e){

    boxImage.style.backgroundImage=`url(${e.target.src})`
    boxContainer.style.display="flex"
    console.log('e.target.src')
  });
}
};

 
export default function Portofolio() {
  return <>
  
   <div className="container py-5">

<h1 className='text-center'>PORTFOLIO COMPONENT</h1>
<div className='d-flex justify-content-center align-items-center my-4'>

<div className='blueLine  me-3'></div>
   <i className="fa-solid fa-star "></i>
   <div className='blueLine ms-3'></div>
   </div>
    <div className="row g-5 position-relative">
    <div className="boxContainer "> 
    <div className="boxImage"></div>
    </div>

      <div className="col-md-4 ">

  <div className="imglayer position-relative">

  <img src={image1} className='w-100 rounded-3' alt="" />
<div className="layer d-flex justify-content-center align-items-center bg-success  w-100 h-00   position-absolute
top-0 bottom-0 start-0 end-0 opacity-0">
<i className="fa-solid fa-plus text-white fs-1 "></i>
</div>
</div>

      </div>
      <div className="col-md-4">
      <div className="imglayer position-relative">
  <img src={image2} className='w-100 rounded-3' alt="" />
<div className="layer d-flex justify-content-center align-items-center bg-success  w-100 h-00   position-absolute
top-0 bottom-0 start-0 end-0 opacity-0">
<i className="fa-solid fa-plus text-white fs-1 "></i>
</div>
</div>
      </div>
      <div className="col-md-4">     
      <div className="imglayer position-relative">
  <img src={image3} className='w-100 rounded-3' alt="" />
<div className="layer d-flex justify-content-center align-items-center bg-success  w-100 h-00   position-absolute
top-0 bottom-0 start-0 end-0 opacity-0">
<i className="fa-solid fa-plus text-white fs-1 "></i>
</div>
</div>
</div>
      <div className="col-md-4">
      <div className="imglayer position-relative">
  <img src={image1} className='w-100 rounded-3' alt="" />
<div className="layer d-flex justify-content-center align-items-center bg-success  w-100 h-00   position-absolute
top-0 bottom-0 start-0 end-0 opacity-0">
<i className="fa-solid fa-plus text-white fs-1 "></i>
</div>
</div>
      </div>
      <div className="col-md-4">    
      <div className="imglayer position-relative">
  <img src={image2} className='w-100 rounded-3' alt="" />
<div className="layer d-flex justify-content-center align-items-center bg-success  w-100 h-00   position-absolute
top-0 bottom-0 start-0 end-0 opacity-0">
<i className="fa-solid fa-plus text-white fs-1 "></i>
</div>
</div>
</div>
      <div className="col-md-4">     
      <div className="imglayer position-relative">
  <img src={image3} className='w-100 rounded-3' alt="" />
<div className="layer d-flex justify-content-center align-items-center bg-success  w-100 h-00   position-absolute
top-0 bottom-0 start-0 end-0 opacity-0">
<i className="fa-solid fa-plus text-white fs-1"></i>
</div>
</div>
</div>

    </div>
   </div>
  </>}
/*
   useEffect(()=>{

    document.title=`Portofolio`
    listenScroll()
  })*/
