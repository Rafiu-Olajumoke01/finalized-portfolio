import React from 'react';
import "./contact.css";
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaGithub, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <Background />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navbar />
          </div>
          <div className="col-md-10">
            <h5 className="social text-white fw-bold m-3">Social Media</h5>
            <div className="contact">
              <div className="facebook">
                <Link to="https://facebook.com"><FaFacebookF size={30} />
                  <span>Facebook</span>
                </Link>
              </div>
              <div className="whatsapp">
                <Link to="https://wa.me/8083790474"><FaWhatsapp size={30} />
                  <span>Whatsapp</span>
                </Link>
              </div>
              <div className="envelope">
                <Link to="mailto:rafiuolajumoke7@gmail.com"><FaEnvelope size={30} />
                  <span>Gmail</span>
                </Link>
              </div>
              <div className="phone">
                <Link to="tel:08083790474"><FaPhoneAlt size={30} />
                  <span>Phone</span>
                </Link>
              </div>
              <div className="linkedln">
                <Link to="https://www.linkedin.com/in/rafiu-olajumoke-084374318"><FaLinkedinIn size={30} />
                  <span>LinkedIn</span>
                </Link>
              </div>
              <div className="twitter">
                <Link to="https://www.twitter.com/@_ByteMe_"><FaTwitter size={30} />
                  <span>Twitter</span>
                </Link>
              </div>
              <div className="instagram">
                <Link to=""><FaInstagram size={30} />
                  <span>Instagram</span>
                </Link>
              </div>
              <div className="youtube">
                <Link to=""><FaYoutube size={30} />
                  <span>YouTube</span>
                </Link>
              </div>
              <div className="github">
                <Link to="https://github.com/Rafiu-Olajumoke01"><FaGithub size={30} />
                  <span>Github</span>
                </Link>
              </div>
            </div>

            <div className="form">
              <form action="">
                <div className="frm-inp">
                  <div className="inp-ctrl">
                    <label>Full name</label>
                    <input type="text" />
                  </div>

                  <div className="inp-ctrl">
                    <label>Email</label>
                    <input type="email" />
                  </div>

                  <div className="inp-ctrl">
                    <label>Type your message:</label>
                    <textarea name="" id=""></textarea>
                  </div>
                </div>

                <div>
                  <Link to="mailto:rafiuolajumoke7@gmail.com" className="btn">Send Message</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
