import React from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import resume from "./../RAFIU OLAJUMOKE CV.pdf"
import "./resumes.css"

function Resumes() {
  return (
    <div>
      <Background />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navbar />
          </div>

          <div className="col-md-10 mt-3 resume-container">
            <h2 className="text-white fw-bold mb-4">My Resume</h2>
            <img 
              src={require("./../port image/pdfport.jpg")} 
              alt="CV Preview" 
              className='img-fluid rounded cv-img shadow' 
            />

            <div className='mt-4 text-center'>
              <a href={resume} download='Rafiu-Olajumoke-CV.pdf' className='btn cv-btn'>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resumes
