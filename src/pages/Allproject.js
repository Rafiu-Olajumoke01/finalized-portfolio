import React from 'react'
import Navbar from '../components/Navbar'
import Background from '../components/Background'
import { Link } from 'react-router-dom'
import "./allproject.css"

function Allproject() {
  return (
    <div>
      <Background />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navbar />
          </div>

          <div className="col-md-10">
            <div className="container">
              <div className="row allpro">

                {/* Jumia Clone */}
                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img-top" src={require("./../port image/JumiaCloning Image.jpg")} alt="Jumia Clone" />
                    <div className="card-body">
                      <h6 className="card-title">Jumia Clone Website</h6>
                      <p>Cloning Jumia, a modern e-commerce platform built using React and Redux for seamless state management!</p>
                      <a href="https://jumiaecommerce-l35n.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                  </div>
                </div>

                {/* Novakhay Brand */}
                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img-top" src={require('./../port image/novakhay.jpg')} alt="Novakhay Brand" />
                    <div className="card-body">
                      <h6 className="card-title">Novakhay Brand</h6>
                      <p>Novakhay Brand, your ultimate destination for stylish and sophisticated outfits.</p>
                      <a href="https://kelechi-bay.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                  </div>
                </div>

                {/* Nomoarh Project */}
                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img-top" src={require('./../port image/nomoarhimage.jpg')} alt="Nomoarh Project" />
                    <div className="card-body">
                      <h6 className="card-title">Nomoarh Design Project (Saudi Arabia)</h6>
                      <p>Designed a visually appealing and user-friendly interface using HTML and CSS.</p>
                      <a href="https://testing.nomoarhosting.cloud" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                  </div>
                </div>

                {/* Shoe Haven */}
                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img-top" src={require("./../port image/myshoeproject.jpg")} alt="Shoe Haven" />
                    <div className="card-body">
                      <h6 className="card-title">My Personal Shoe Website</h6>
                      <p>Welcome to Shoe Haven — stylish and comfortable footwear for every occasion.</p>
                      <a href="https://shoe-h-aven-3q64.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                  </div>
                </div>

                {/* Blog Website */}
                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img-top" src={require("./../port image/whatfoodblog.jpg")} alt="Food & Travel Blog" />
                    <div className="card-body">
                      <h6 className="card-title">Multipurpose Blog</h6>
                      <p>Food & Faraway – your go-to for delicious recipes and travel adventures.</p>
                      <a href="https://f-f-client.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                  </div>
                </div>

                {/* Portfolio Project */}
                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img-top" src={require("./../port image/myprojectimage.jpg")} alt="My Portfolio" />
                    <div className="card-body">
                      <h6 className="card-title">My Portfolio Project</h6>
                      <p>A full showcase of my personal projects and MERN Stack journey.</p>
                      <Link to="/myproject">View Project</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Allproject
