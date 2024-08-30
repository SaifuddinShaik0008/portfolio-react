import React from 'react'
import Innerstyles from './Innerpages.module.css';

const Contact = () => {
  return (
    <div>
       <div className={Innerstyles.breadgrumb}>
        <h1>Contact Me</h1>

      </div>

      <div className='container p-4'>
        <div className='row'>
          <div className='col-12 col-lg-6 border shadow rounded p-3'>
            <h1>Contact</h1>
            <form>
              <div className="mb-3" id='contact'>
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone number</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter phone number" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
          </div>
          <div className='col-12 col-lg-6 p-5 text-center'>
           <h1 className='text-center text-info '>Find me here</h1>
            <a href="https://www.instagram.com/__itz___saifu___08?igsh=MWozZDlxcHlnbWwxbw=="><i className='bi bi-instagram  link me-5'></i></a>
            <a href="https://www.facebook.com/profile.php?id=100024770146414"><i className='bi bi-facebook link me-5'></i></a>
            
            <a href="https://www.linkedin.com/in/saifuddin-sk-9a15a8276/"><i className='bi bi-linkedin link me-5'></i></a>
            <a href="https://github.com/SaifuddinShaik0008"><i className='bi bi-github text-danger-emphasis link'></i></a>

            <h4><i className='bi bi-phone text-success link me-3'> +919642342792</i></h4>
            <a href='https//:saifuddin.shaik008@gmail.com'><i className='bi bi-envelope text-warning link'>Saifuddin.shaik008@gmail.com</i></a>
            
           
          
          </div>
        </div>

      
      </div>
    </div>
  )
}

export default Contact