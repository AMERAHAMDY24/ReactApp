import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return <>
  
 <nav className="navbar navbar-expand-lg secondColor py-4">
  <div className="container  ">
    <NavLink className="navbar-brand text-white fw-bolder fs-2 nav-link " to="/">START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link  text-white fw-bold me-3" aria-current="page" to="About">ABOUT</NavLink>
        </li>       
         <li className="nav-item">
          <NavLink className="nav-link  text-white fw-bold" aria-current="page" to="Portofolio">PORTOFOLIO</NavLink>
        </li>          <li className="nav-item">
          <NavLink className="nav-link  text-white fw-bold ms-3" aria-current="page" to="Contact">CONTACT</NavLink>
        </li>       
      </ul>
   
    </div>
  </div>
</nav>

  
  </>
  
}
