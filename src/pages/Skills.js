import React from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiRedux, SiMongodb, SiExpress } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaPython } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";

import "./skills.css"

function Skills() {
    return (
        <div>
            <Background />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Navbar />
                    </div>

                    <div className="col-md-10">
                        <h6 className='text-white mt-3'>Languages</h6>
                        <div className="languages">
                            <div className="html">
                                <p className='fw-bold text-white mt-2'>HTML5</p>
                                <FaHtml5 size={50} color="#3498db" />
                            </div>
                            <div className="css">
                                <p className='fw-bold text-white mt-2'>CSS3</p>
                                <FaCss3 size={50} color="#3498db" />
                            </div>
                            <div className="javascript">
                                <p className='fw-bold text-white mt-2'>JavaScript</p>
                                <IoLogoJavascript size={50} color="#3498db" />
                            </div>
                            <div className="python">
                                <p className='fw-bold text-white mt-2'>Python</p>
                                <FaPython size={50} color="#3498db" />
                            </div>
                        </div>

                        <div>
                            <h6 className='text-white mt-5'>Frameworks & Tools</h6>
                            <div className="frameworks">
                                <div className="react">
                                    <p className='fw-bold text-white mt-2'>React.js</p>
                                    <FaReact size={50} color="#3498db" />
                                </div>
                                <div className="tailwind">
                                    <p className='fw-bold text-white mt-2'>Tailwind CSS</p>
                                    <RiTailwindCssFill size={50} color="#3498db" />
                                </div>
                                <div className="vscode">
                                    <p className='fw-bold text-white mt-2'>VS Code</p>
                                    <VscVscode size={50} color="#3498db" />
                                </div>
                                <div className="redux">
                                    <p className='fw-bold text-white mt-2'>Redux</p>
                                    <SiRedux size={50} color="#3498db" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h6 className='text-white mt-5'>Backend & Database</h6>
                            <div className="frameworks">
                                <div className="nodejs">
                                    <p className='fw-bold text-white mt-2'>Node.js</p>
                                    <FaNodeJs size={50} color="#3498db" />
                                </div>
                                <div className="expressjs">
                                    <p className='fw-bold text-white mt-2'>Express.js</p>
                                    <SiExpress size={50} color="#3498db" />
                                </div>
                                <div className="mongodb">
                                    <p className='fw-bold text-white mt-2'>MongoDB</p>
                                    <SiMongodb size={50} color="#3498db" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h6 className=' text-white mt-5'>Version Control</h6>
                            <div className="control">
                                <div className="github">
                                    <p className='fw-bold text-white mt-2'>GitHub</p>
                                    <FaGithub size={50} color="#3498db" />
                                </div>
                                <div className="git">
                                    <p className='fw-bold text-white mt-2'>Git</p>
                                    <FaGitAlt size={50} color="#3498db" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
