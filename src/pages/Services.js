import React from 'react'
import Background from '../components/Background'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { FaDesktop, FaCode, FaDatabase, FaCloud, FaShieldAlt } from 'react-icons/fa';
import './services.css'

function Services() {
  return (
    <div>
      <Background />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navbar />
          </div>

          <div className="col-md-10">
            <h5 className="f-bold text-white mt-3 text-center">My Services as a MERN Stack Developer</h5>

            <div className="services-section">
              {/* Custom Web Development */}
              <div className="service-item">
                <FaDesktop size={40} color="#13bbff" />
                <h6 className="service-title text-white mt-3">Custom Web Development</h6>
                <p className="text-muted">Build responsive and user-friendly web applications using the MERN stack, focusing on performance and design.</p>
              </div>

              {/* Frontend Development */}
              <div className="service-item">
                <FaCode size={40} color="#13bbff" />
                <h6 className="service-title text-white mt-3">Frontend Development (React)</h6>
                <p className="text-muted">Creating seamless and dynamic user interfaces with React, tailored to meet your project needs.</p>
              </div>

              {/* Backend Development */}
              <div className="service-item">
                <FaDatabase size={40} color="#13bbff" />
                <h6 className="service-title text-white mt-3">Backend Development (Node.js & Express)</h6>
                <p className="text-muted">Develop scalable and secure server-side applications using Node.js and Express to handle complex logic.</p>
              </div>

              {/* Database Design & Management */}
              <div className="service-item">
                <FaDatabase size={40} color="#13bbff" />
                <h6 className="service-title text-white mt-3">Database Design & Management</h6>
                <p className="text-muted">Efficiently design and manage databases with MongoDB to ensure optimal performance and security.</p>
              </div>

              {/* Cloud Deployment */}
              <div className="service-item">
                <FaCloud size={40} color="#13bbff" />
                <h6 className="service-title text-white mt-3">Cloud Deployment</h6>
                <p className="text-muted">Deploy and manage your web applications on cloud platforms such as AWS, Heroku, and DigitalOcean for scalability and reliability.</p>
              </div>

              {/* Security Implementation */}
              <div className="service-item">
                <FaShieldAlt size={40} color="#13bbff" />
                <h6 className="service-title text-white mt-3">Web Security</h6>
                <p className="text-muted">Implement robust security measures to protect your web applications from cyber threats, including authentication and authorization.</p>
              </div>
            </div>

            {/* Contact Call to Action */}
            <div className="text-center mt-5">
              <h5 className="text-white">Let's Work Together!</h5>
              <p className="text-muted">Have a project in mind? Feel free to reach out, and let's create something amazing!</p>
              <Link to="mailto:rafiuolajumoke7@gmail.com" className="btn btn-primary">Contact Me</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
