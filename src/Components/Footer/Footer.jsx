import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
     <footer>
           <div className="left">
                  <p>Powered and Secured by &copy;<u> <a href="https://www.facebook.com/rijan.lama.545" target='_blank'>Rijan Lama</a></u></p>
           </div>
           <div className="right">
                  <div className="first">
                          <p>Call</p>
                          <a href='tel:+977 9865174070'>+977 9865174070</a>
                  </div>
                  <div className="second">
                       <p>Write</p>
                       <a href='mailto:lamarijan34@gmail.com'>lamarijan34@gmail.com</a>
                  </div>
                  <div className="third">
                      <p>Follow</p>
                      <div className='third-images'>
                              <div className='third-images_container'>
                                     <a href="https://www.facebook.com/rijan.lama.545" target='_blank'><img src="./facebook.png" alt="" /></a> 
                              </div>
                              <div className='third-images_container'>
                                      <a href="https://www.instagram.com/mrrijan_/" target='_blank'><img src="./instagram.png" alt="" /></a> 
                              </div>
                              <div className='third-images_container'>
                                       <a href="https://twitter.com/La1719108" target='_blank'><img src="./twitter.png" alt="" /></a>
                              </div>
                              <div className='third-images_container'>
                                       <a href="https://www.linkedin.com/in/rijan-lama-372754281/" target='_blank'><img src="./linkedin.png" alt="" /></a>
                              </div>
                      </div>
                  </div>
           </div>
     </footer>
  )
}

export default Footer
