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

          <div className="col-md-10 ">
            <div className="container">
              <div className="row allpro">

                <div className="col-md-4 mt-3">
                  <div className="card">
                    <img className="card-img-top" src={require("./../port image/JumiaCloning Image.jpg")} alt="Title" />
                    <div className="card-body">
                      <h6 className="card-title">Jumia Clone Website</h6>
                      <p>Cloning Jumia, a modern e-commerce platform built using React and Redux for
                        seamless state management! Our Jumia clone offers a smooth shopping experience,
                        allowing users to browse products, and complete transactions effortlessly.</p>
                      <Link to="https://jumiaecommerce-l35n.vercel.app/">Link Here</Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3">
                  <div className="card">
                    <img className="card-img-top" src={require('./../port image/novakhay.jpg')} alt="Title" />
                    <div className="card-body">
                      <h6 className="card-title">Novakhay Brand</h6>
                      <p>Novakhay Brand, your ultimate destination for stylish and sophisticated outfits.
                        We are excited to introduce our brand new collection, carefully curated to make you look and feel amazing
                      </p>
                      <Link to="https://kelechi-bay.vercel.app/">Link Here</Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3">
                  <div className="card">
                    <img className="card-img-top" src={require('./../port image/nomoarhimage.jpg')} alt="Title" />
                    <div className="card-body">
                      <h6 className="card-title">Nomoarh Design Project(Saudi Arabia)</h6>
                      <p>Designed a visually appealing and user-friendly interface using html and css, meeting
                        Nomoarh;s design requirements and expectations
                      </p>
                      <Link to="https://testing.nomoarhosting.cloud">Link Here</Link>
                    </div>
                  </div>
                </div>


                <div className="col-md-4 mt-3">
                  <div className="card">
                    <img className="card-img-top" src={require("./../port image/myshoeproject.jpg")} alt="Title" />
                    <div className="card-body">
                      <h6 className="card-title">My Personal Shoe Website</h6>
                      <p>Welcome to Shoe Haven, your ultimate destination for stylish and comfortable footwear!
                        Whether you're looking for trendy sneakers we offer a wide range of shoes to suit every occasion and lifestyle.!
                      </p>
                      <Link to="https://shoe-h-aven-3q64.vercel.app/">Link Here</Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-4">
                  <div className="card">
                    <img className="card-img-top" src={require("./../port image/whatfoodblog.jpg")} alt="Title" />
                    <div className="card-body">
                      <h6 className="card-title">Multipurpose Blog</h6>
                      <p className="card-text">Welcome to Food&Faraway, your go-to destination for all things
                        food and travel! Whether you're a foodie searching for delicious recipes, the best places to eat,
                        or an adventurer eager to explore new destinations, we’ve got you covered!</p>
                      <Link to="https://f-f-client.vercel.app/">Link Here</Link>
                    </div>
                  </div>

                </div>

                <div className="col-md-4 mt-4">
                  <div className="card">
                    <img className="card-img-top" src={require("./../port image/myprojectimage.jpg")} alt="Title" />
                    <div className="card-body">
                      <h6 className="card-title">My Portfolio Project</h6>
                      <p className="card-text">Checkout for link here</p>
                      <Link to="/myproject">Link Here</Link>
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