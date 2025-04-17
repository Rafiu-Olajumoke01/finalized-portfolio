import React from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import "./about.css"

function About() {
  return (
    <div>
      <Background />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navbar />
          </div>

          <div className="col-md-6">
            <div className="about-me">
              <h1 className='text-white fw-bold'>About Me</h1>
              <hr />
              <p className='text-white'>
                Hi, I'm <strong>Rafiu Olajumoke</strong>, a dedicated <strong>MERN Stack Frontend Developer</strong> based in Nigeria — with a strong passion for building dynamic and responsive user interfaces using <strong>React.js</strong>.
              </p>

              <p className='text-white'>
                I specialize in crafting seamless, accessible, and scalable frontend applications with great attention to detail, pixel perfection, and clean code. My primary focus is on the <strong>frontend of the MERN stack</strong>, using modern tools like <strong>React, Redux, TailwindCSS</strong>, and other libraries to create fast and beautiful interfaces.
              </p>

              <p className='text-white'>
                Beyond the frontend, I have working experience with backend technologies like <strong>Node.js, Express.js, and MongoDB</strong> which empowers me to collaborate efficiently with backend teams or build full-stack applications when needed.
              </p>

              <div className="skills mt-4">
                <h2 className='text-white fw-bold'>What I Can Do</h2>
                <hr />
                <ul className='text-white'>
                  <li>Build modern and responsive web applications using <strong>React.js</strong></li>
                  <li>Implement state management with <strong>Redux</strong></li>
                  <li>Style applications using <strong>Tailwind CSS, Bootstrap, and custom CSS</strong></li>
                  <li>Consume REST APIs and handle async operations with <strong>fetch, Axios, and async/await</strong></li>
                  <li>Collaborate via Git & GitHub efficiently</li>
                  <li>Understand and work with <strong>Node.js and Express</strong> for backend APIs</li>
                  <li>Perform CRUD operations with <strong>MongoDB</strong></li>
                </ul>
                <p className='mt-2'>Check my <strong>Skills</strong> page for a full breakdown of my tech stack.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 myself">
            <img src={require("./../port image/Olajumoke birthday.jpg")} alt="Rafiu Olajumoke" className='img-fluid rounded shadow' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
