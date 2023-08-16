import React from 'react'
import './Project.css';
import {BiLinkExternal} from 'react-icons/bi'
const Project = () => {
  return (
      <section className='project section__padding'>
            <div className="project-heading">
                  <h1 className='primaryHeading'>Projects</h1>
                  <p>Here are Few of the projects I have done :</p>
            </div>
            <div className='project-container'>
                    <div className="project-image_first">
                            <div className="project-image-container">
                                  <img src="./gpt.png" alt="" />
                                  <div className="project-para-overlay">
                                          <p>This is a Website made in react.Here in this website ,<br />
                                          I have tried to build a website whose theme is a bit <br />robotic 
                                           and modern .I have used amazing gradients and <br />
                                           the website is completely responsive across all devices . </p>
                                           <a href="https://mrrijan.github.io/react_project1/" target="_blank"><BiLinkExternal size={25} color='#FFF'/></a>
                                  </div>
                                 
                            </div>
                            <div className="project-image-container">
                                  <img src="./restaurant.png" alt="" />
                                  <div className="project-para-overlay">
                                    <p>This is a react based website where<br />
                                                I have  build a website for a Restaurant <br />
                                                The Website has a video of the restaurant , menus <br />
                                                and Chef's word  and is responsive across all devices. </p>
                                           <a href="https://mrrijan.github.io/restaurant_website/" target="_blank"><BiLinkExternal size={25} color='#FFF'/></a>
                                  </div>
                            </div>
                    </div>
                    <div className='project-image_second'>
                              <div className='project-image-container'>
                                    <img src="./project-5.png" alt="" />
                                    <div className="project-para-overlay">
                                          <p>This is a Website made using Tailwind Css and <br />
                                             React Js . As we can see I have cloned Microsoft's Website. 
                                             <br/>                                              
                                           The website is completely responsive across all devices . </p>
                                           <a href="https://tailwind-react-project-joae.vercel.app/" target="_blank"><BiLinkExternal size={25} color='#FFF'/></a>
                                  </div>
                              </div>
                              <div className='project-image-container'>
                                    <img src="./cv.png" alt="" />
                                    <div className="project-para-overlay">
                                          <p>This is a website made using vanilla CSS and JS.<br />
                                          I have  build a CV .<br />
                                           This Website was for my College practical and is <br />
                                           not yet complete and this website is responsive <br />
                                            across all devices. </p>
                                           <a href="https://mrrijan.github.io/cv_college/" target="_blank"><BiLinkExternal size={25} color='#FFF'/></a>
                                  </div>
                              </div>
                    </div>
            </div>
      </section>
  )
}

export default Project
