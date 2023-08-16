import React, { useState } from 'react'
import './Services.css'
import {AiOutlineArrowDown ,AiOutlineArrowUp } from 'react-icons/ai'
const Services = () => {
  const [more , setMore] = useState(false);
  const [secondmore , SecondsetMore] = useState(false);
  const[thirdmore , setThirdMore ] =useState(false)
  return (
    <section className='services section__padding'>
          <div className='services-heading'>
                    <h1 className='primaryHeading'>Services</h1>
          </div>
          <div className='services-box'>
                  <div className="services-container">
                            <h1>Web Development</h1>
                            <p>I specialize in creating custom websites that are tailored to <br />
                             meet your unique needs .Using a combination of HTML, CSS, and JavaScript,
                             </p>
                             {more &&
                             <p>
                             I can bring your vision to life by designing and developing a website <br />
                              that is both visually appealing and highly functional.
                             </p>
                              }
                              {
                             more ? <AiOutlineArrowUp size={20} color='#FFF' onClick={()=>setMore(false)} style={{cursor : 'pointer' , marginTop : '1rem'}} /> : <AiOutlineArrowDown   size={20} color='#FFF' onClick={()=>setMore(true)} style={{cursor : 'pointer' , marginTop : '1rem'}}/>
                              }
                  </div>
                  <div className="services-container">
                            <h1>Responsive Web Design</h1>
                            <p>In today's mobile-first world, having a website that looks great and functions seamlessly <br />
                             across all devices is crucial. I am experienced in building responsive websites <br />
                           </p>
                              {secondmore &&
                             <p>
                            that adapt to different screen sizes, ensuring a smooth and consistent <br />
                              user experience on desktops, tablets, and smartphones.
                             </p>}
                                {
                                  secondmore ? <AiOutlineArrowUp size={20} color='#FFF' onClick={()=>SecondsetMore(false)} style={{cursor : 'pointer' , marginTop : '1rem'}}/> : <AiOutlineArrowDown size={20} color='#FFF' onClick={()=>SecondsetMore(true)} style={{cursor : 'pointer' , marginTop : '1rem'}}/>
                                }
                  </div>
                  <div className="services-container">
                            <h1>Interactive User Interfaces</h1>
                            <p>With my expertise in JavaScript and React, I can create interactive and engaging user <br />
                            interfaces that enhance user experience. Whether it's building dynamic forms, <br />
                           </p>
                             {thirdmore &&
                             <p>
                              implementing animations, or developing interactive components, I can bring <br />
                             interactivity to your website, making it more engaging and user-friendly.
                             </p>}
                             {
                              thirdmore ? <AiOutlineArrowUp size={20} color='#FFF' onClick={()=>setThirdMore(false)} style={{cursor : 'pointer' , marginTop : '1rem'}}/> :
                             <AiOutlineArrowDown   size={20} color='#FFF' onClick={()=>setThirdMore(true)} style={{cursor : 'pointer' , marginTop : '1rem'}}/>
                            }
                  </div>
          </div>
    </section>
  )
}

export default Services
