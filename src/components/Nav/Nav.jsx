import React from 'react'
import { useState } from 'react'
import Hamburger from 'hamburger-react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './nav.css'

const Nav = () => {
    const [change, setChange] = useState(false)
      const [ref, InView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
      });
    
    function toggleNav() {
        setChange(!change)
    }


  return (
      <nav >
          
          <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 0 }}
              animate={InView ? { opacity: 1, y: 2 } : {}}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}>
              <img src="./Group (4).png" alt="nav logo" />
          </motion.div>
            
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={InView ? { opacity: 1, y: 2 } : {}}
            exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={!change ? 'sub_nav_mobile' : 'sub_nav_mobile_active'}>
          <ul>
              <li>Services</li>
              <li>About</li>
              <li>Contact Us</li>
          </ul>
         
          <div>
              <button className='nav_btn'>Schedule a call</button>
          </div>  
          </motion.div>
      

          <div onClick={toggleNav} className="hamburger">
          <Hamburger size={20} toggled={change} toggle={setChange} />
          </div>


      </nav>
  )
}

export default Nav
