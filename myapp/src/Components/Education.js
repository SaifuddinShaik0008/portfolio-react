import React from 'react'
import Innerstyles from './Innerpages.module.css';

const Education = () => {
  return (
    <div>
      <div className={Innerstyles.breadgrumb}>
        <h1>MY Education</h1>

      </div>
      <div className='container p-5'>
        <div className='row'>
          <div className='col-12 col-lg-6   p-3'>
            <h1> <i className='bi bi-mortarboard-fill text-info link'>GRADUATION</i></h1>
            <h3><i class="bi bi-building-check text-secondary link"> VIGANANS LARA INSTITUTE OF TECHNOLOGY AND SCIENCE</i></h3>
            <h5><i class="bi bi-check-circle-fill text-primary-emphasis link"> ELECTRICAL AND ELECTRONICS ENGINEERING</i></h5>
            <p><i class="bi bi-clock text-danger link"> june/2020-may/2024</i></p>
            <p><i class="bi bi-reception-4  link"> CGPA:7.72</i></p>
          </div>
          <div className='col-12 col-lg-6   p-3'>
            <h1> <i className='bi bi-mortarboard-fill text-info link'>INTERMEDIATE</i></h1>
            <h3><i class="bi bi-building-check text-secondary link"> SRI CHAITANYA JUNIOR COLLEGE</i></h3>
            <h5><i class="bi bi-check-circle-fill text-primary-emphasis link"> MPC</i></h5>
            <p><i class="bi bi-clock text-danger link"> june/2018-may/2020</i></p>
            <p><i class="bi bi-reception-4  link"> CGPA:7.59</i></p>
          </div>
          <div className='col-12 col-lg-6 p-3 '>
            <h1> <i className='bi bi-mortarboard-fill text-info link'>SECONDARY EDUCATION</i></h1>
            <h3><i class="bi bi-building-check text-secondary link"> KSRT MPL HIGH SCHOOL</i></h3>
            <h5><i class="bi bi-check-circle-fill text-primary-emphasis link"> GENARAL</i></h5>
            <p><i class="bi bi-clock text-danger link"> june/2017-may/2018</i></p>
            <p><i class="bi bi-reception-4  link"> CGPA:8.20</i></p>
          </div>



        </div>
      </div>


    </div>
  )
}

export default Education