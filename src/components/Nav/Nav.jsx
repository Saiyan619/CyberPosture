import React from 'react'
import { useState } from 'react'
import Hamburger from 'hamburger-react';
import './nav.css'

const Nav = () => {
    const [change, setChange] = useState(false)
    function toggleNav() {
        setChange(!change)
    }


  return (
      <nav>
          
          <div>
              <img src="./Group (4).png" alt="nav logo" />
          </div>
            
          <div className={!change ? 'sub_nav_mobile' : 'sub_nav_mobile_active'}>
          <ul>
              <li>Services</li>
              <li>About</li>
              <li>Contact Us</li>
          </ul>
         
          <div>
              <button className='nav_btn'>Schedule a call</button>
          </div>  
          </div>
      

          <div onClick={toggleNav} className="hamburger">
          <Hamburger size={20} toggled={change} toggle={setChange} />
          </div>


      </nav>
  )
}

export default Nav
