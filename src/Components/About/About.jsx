import React from 'react'
import Typed from 'react-typed';
import './About.css'
import Button from '../Button/Button';
const Home = () => {
  return (
      <section className='h-wrapper section__padding'>
              <div className="left">
                          <div className='content'>
                                  <h1>HELLO , I am.</h1>
                                  <p>RIJAN LAMA</p>
                                  <p>And I'm a Frontend Developer</p>
                                  <div className='para'>
                                        <p>I am profound in </p>
                                        <Typed className="typed" strings={['HTML' ,'CSS' ,'JS' ,'REACT' ,'TAILWIND']} typeSpeed={60} backSpeed={50}
                                        loop/>  
                                  </div>
                                  <div className="images-container">
                                        <div className="image">
                                               <a href="https://www.facebook.com/rijan.lama.545" target='_blank'><img src="./facebook.png" alt="" /></a> 
                                        </div>
                                        <div className="image">
                                              <a href="https://www.instagram.com/mrrijan_/" target='_blank'><img src="./instagram.png" alt="" /></a>
                                        </div>
                                        <div className="image">
                                              <a href="https://twitter.com/La1719108" target='_blank'><img src="./twitter.png" alt="" /></a>
                                        </div>
                                        <div className="image">
                                              <a href="https://www.linkedin.com/in/rijan-lama-372754281/" target='_blank'><img src="./linkedin.png" alt="" /></a>
                                        </div>
                                  </div>
                          </div>
                          <div className="btn">
                              <a href="https://drive.google.com/file/d/1M9uc_57LF2svJ3aTY1tHyCurdxnBkiG-/view?usp=sharing" target='_blank'><Button  text="Download CV"/></a>
                          </div>
              </div>
              <div className='right'>
                      <div className="image-container">
                            <img src="./image.JPG" alt="" />
                      </div>
              </div>
      </section>
  )
}

export default Home
