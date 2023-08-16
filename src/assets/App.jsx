import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
const App = () => {
  return (
    <Router>
            <Navbar />
                  <Routes>
                        <Route element={<Home/>} path='/' />
                        <Route element={ <Services />} path='/services'/>
                        <Route element={ <Projects />} path='/projects'/>
                        <Route element={ <Contact />} path='/contact' />
                 </Routes>  
            <Footer />
     </Router>
 
  )
}

export default App

