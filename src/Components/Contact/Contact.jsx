import React from 'react'
import './Contact.css'
import Button from '../Button/Button'
const Contact = () => {
  return (
        <section className='contact section__padding'>
                  <div className="contact-heading">
                      <h1 className='primaryHeading'>Contacts</h1>
                  </div>
                  <div className="contact-forms">
                        <form method='POST' action='https://formspree.io/f/mbjvrvrb'>
                              <div className="form-name">
                                    <input type="text" name='FirstName' placeholder='First Name' required/>
                                    <input type="text" name='SecondName' placeholder='Last Name' required/>
                              </div>
                              <div className="info">
                                    <input type="email" name="Email" placeholder='email' required/>
                                    <input type="number" name='Number'  placeholder='Number' required/>
                              </div>
                              <div className="message">
                                    <textarea name="Message" id="" cols="30" rows="5" placeholder='Any Message'></textarea>
                              </div>
                              <div className="contact-btn">
                                  <Button type="submit" text="Send Message"/>
                                  <Button type="reset" text="Reset" />
                              </div>
                        </form>
                  </div>
        </section>
  )
}

export default Contact
