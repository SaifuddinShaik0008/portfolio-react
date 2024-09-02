import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light position-sticky head background-image ">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-white  " to="#">
            <i className='bi bi-heart-fill text-danger border p-2 bg-black rounded link '>Portfolio</i>
              
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item ">
                  <NavLink className="nav-link text-white nnav" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white nnav" to="/Work">Work</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white nnav" to="/Skills">Skills</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white nnav" to="/Education">Education</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white nnav" to="/Contact">Contact</NavLink>
                </li>
                
               
               
              </ul>
              
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav  mb-1 mb-lg-0">
                
                 <Link to="/Contact" className="btn btn-primary w-100 rounded"><i className='bi bi-telegram'>Contact me</i></Link>
                
                
             
                
               
               
              </ul>
              
            </div>
          </div>
        </nav>


    </div>
  )
}

export default Header