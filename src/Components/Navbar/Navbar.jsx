import React , {useState} from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import {RiMenu3Line , RiCloseLine } from 'react-icons/ri';
const Navbar = () => {

  const [toggleMode , setToggleMode ] = useState(false);
  return (
      <nav className='nav'>
            <div className="name">
                 <p>Web Developer</p>
                 <p>/</p>
                 <p>Rijan Lama</p>
            </div>
            <ul className='nav-links'>
                <NavLink  className={'nav-items'} to="/">About</NavLink>
                <NavLink  className={'nav-items'} to="/services">Services</NavLink>
                <NavLink className={'nav-items'} to="/projects">Projects</NavLink>
                <NavLink className={'nav-items'} to="/contact">Contact</NavLink>
            </ul>
            <div className="mobile-menu">
              {
                toggleMode ?   <RiCloseLine size={27} color='#FFF' onClick={()=>setToggleMode(false)}/> :  
                               <RiMenu3Line size={27} color='#FFF' onClick={()=>setToggleMode(true)}/>
              }
              {
                toggleMode && (
                  <div className='mobile-menu-links'>
                        <ul>
                            <NavLink  className={'nav-items'} to="/" onClick={()=>setToggleMode(false)}>About</NavLink>
                            <NavLink  className={'nav-items'} to="/services" onClick={()=>setToggleMode(false)}>Services</NavLink>
                            <NavLink className={'nav-items'} to="/projects" onClick={()=>setToggleMode(false)}>Projects</NavLink>
                            <NavLink className={'nav-items'} to="/contact" onClick={()=>setToggleMode(false)}>Contact</NavLink>
                        </ul>
                  </div>
                )
              }
            </div>
      </nav>
  )
}

export default Navbar
