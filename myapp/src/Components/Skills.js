import React from 'react'
import Innerstyles from './Innerpages.module.css';
const Skills = () => {
  return (
    <div>
       <div className={Innerstyles.breadgrumb}>
        <h1>MY Skills</h1>

      </div>
      <div className='container  '>

        <div className='row'>
          <div className='col-12 col-lg-6 '>

            <div className='cardskills p-5 mb-4'>
              <h3 className='text-danger' >Front-End development Skills</h3>
              <div className='card-body'>
                <h5 className='card-title'>HTML5:</h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated  bg-dark w-100' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>HTML5</div>
                </div>
                <h5 className='card-title'>CSS3:</h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated  bg-danger w-100' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>CSS3</div>
                </div>
                <h5 className='card-title'>BOOTSTRAP5:</h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated  bg-success w-75' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>BOOTSTRAP5</div>
                </div>
                <h5 className='card-title'>JAVASCRIPT:</h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated  bg-black w-75' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>JAVASCRIPT</div>
                </div>
                <h5 className='card-title'>REACT.JS:</h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated  bg-primary w-50' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>REACT.JS</div>
                </div>
                <h5 className='card-title'>GIT:</h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated  bg-warning w-75' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>GIT</div>
                </div>
                <h5 className='card-title'>GITHUB</h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated  bg-secondary w-75' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>GITHUB</div>
                </div>
                <h5 className='card-title'>REDUX.JS:</h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated  bg-info w-50' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>REDUX.JS</div>
                </div>
                <h5 className='card-title'>AZILE METHOLODOGY</h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated  bg-danger w-75' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>AZILE METHOLODOGY</div>
                </div>
              </div>
            </div>

          </div>
          <div className='col-12 col-lg-6'>
            <div className='cardskills p-5'>
              <h3 className='text-danger' >Back-End development Skills</h3>
              <div className='card-body'>
                <h5 className='card-title'>NODE.JS:</h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated  bg-black w-75' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>NODE.JS</div>
                </div>
                <h5 className='card-title'>EXPRESS.JS:</h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated  bg-warning w-75' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>NODE.JS</div>
                </div>
                <h5 className='card-title'>MONGO DB:</h5>
                <div className='progress'>
                  <div className='progress-bar progress-bar-striped progress-bar-animated  bg-success w-50' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>NODE.JS</div>
                </div>
              </div>
            </div>
            
            <div className='cardskills p-5 pt-4'>
            <h3 className='text-danger' >Soft Skills</h3>
              <h5 className='card-title'>Problem-solving:</h5>
              <div className='progress'>
                <div className='progress-bar progress-bar-striped progress-bar-animated  bg-dark w-75' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>Problem-solving</div>
              </div>
              <h5 className='card-title'>Communication:</h5>
              <div className='progress'>
                <div className='progress-bar progress-bar-striped progress-bar-animated  bg-danger w-75' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>Communication</div>
              </div>
              <h5 className='card-title'>Teamwork:</h5>
              <div className='progress'>
                <div className='progress-bar progress-bar-striped progress-bar-animated  bg-info w-50' role='progressbar' aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'>Teamwork</div>
              </div>




            </div>


          </div>

        </div>


      </div>





    </div >
  )
}

export default Skills