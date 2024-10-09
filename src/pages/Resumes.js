import React from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import resume from "./..//RAFIU OLAJUMOKE CV.pdf"
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

          <div className="col-md-10 mt-3">
            <img src={require("./../port image/pdfport.jpg")} alt="" className='img-fluid'/>
            <div className='mt-3 cv'>
              <a href={resume} download='resume mt-5' className='btn'>Download Cv</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resumes