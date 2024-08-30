import React from 'react'
import netflix from './netflix.jpg';
import portfolio from './portfolio.jpg';
import hospital from './doctor.avif';
import car from './car rental.png';
import Innerstyles from './Innerpages.module.css';


const Work = () => {
  return (
    <div>
      <div className={Innerstyles.breadgrumb}>
        <h1>MY Work</h1>

      </div>
        <div className='container p-5 mt-3 work'>
          <div className='row'>
            <div className='col-12 col-lg-3 '>
              <div class="card bg-black text-white border" >
                <img src={netflix} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h3 class="card-title">Netflix</h3>
                  <a href="https://github.com/SaifuddinShaik0008/clone "><i className='bi bi-github link'></i></a>
                  <a href="https://saifuddinshaik0008.github.io/clone/ "><i className='bi bi-browser-chrome ms-3 link'></i></a>
                  
                
                </div>
              </div>
            </div>  
            <div className='col-12 col-lg-3'>
              <div class="card bg-black text-white border" >
                <img src={portfolio} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h3 class="card-title">Portfolio</h3>
                  <a href="https://github.com/SaifuddinShaik0008/mysecond "><i className='bi bi-github link'></i></a>
                  <a href="https://saifuddinshaik0008.github.io/mysecond/ "><i className='bi bi-browser-chrome ms-3 link'></i></a>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-3'>
              <div class="card bg-black text-white border" >
                <img src={hospital} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h3 class="card-title">Hospital</h3>
                  <a href="https://github.com/SaifuddinShaik0008/myfirst-react "><i className='bi bi-github link'></i></a>
                  <a href="https://myfirst-react-1.onrender.com "><i className='bi bi-browser-chrome ms-3 link'></i></a>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-3'>
              <div class="card bg-black text-white border" >
                <img src={car} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h3 class="card-title">Car Rental</h3>
                  <a href="https://github.com/SaifuddinShaik0008/landing "><i className='bi bi-github link'></i></a>
                  <a href="https://saifuddinshaik0008.github.io/landing/ "><i className='bi bi-browser-chrome ms-3 link'></i></a>
                </div>
              </div>
            </div>
  

          </div>
        </div>
    </div>
  )
}

export default Work