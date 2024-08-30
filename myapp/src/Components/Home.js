import React from 'react'
import img from './IMG_E2364 (1).png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className=' container-fluid home '>
        <div className='row'>

          <div className='col-12 col-lg-6 pt-5 mt-5 '>
            <div className='d-flex justify-content-center align align-items-center'>
              <div>
                <h1>Hii........Hello</h1>
                <h1>This Is Saifuddin Shaik</h1>
                <h3>I AM a </h3>

                <Link to='/Contact' className='btn btn-success mt-5'>Contact me</Link>


              </div>
            </div>

          </div>
          <div className='col-12 col-lg-6 d-flex justify-content-center align align-items-center p-5'>
            <img className='w-50 img' src={img} alt='' />

          </div>


        </div>
        <div className='container p-5'>
          <h2 className='text-center'>About Me</h2>
          <p className='text-justify'>
            Motivated React Developer with a strong foundation in front-end technologies, includingJavaScript, HTML, CSS, and Bootstrap. Proficient in building responsive and dynamic userinterfaces. Additionally skilled in back-end development with Node.js, Express.js, andMongoDB, enabling the creation of full-stack applications. Quick learner, eager to contribute toteam success and grow in the field.

          </p>

        </div>




      </div>
    </div>
  )
}

export default Home