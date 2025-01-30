import React from 'react'
import './header.css'
import BlurText from '../../TextAnimations/BlurText/BlurText'
const Header = () => {
  return (
      <div className='header'>
          <div className='checker_bg_container'>
              <img className='checker_bg' src="./checkered-bg.png" alt="checker_bg" />
          </div>
          <div className='sub_header'>
              <div className='header_hero_text_container'>
                  <div className='sub_header_hero_text_container'>
                  <span className='header_hero_span'>let's help you stay</span>
                      <h1>Secured</h1>
                  </div>
          
              <p className='header_hero_p'>Expert cybersecurity solutions tailored to protect <br /> your organization from emerging threats</p>
          </div>

          <div className='header_hero_btns_container'>
              <button className='header_btn_1'>Schedule a call</button>
              <button className='header_btn_2'>Get a Quote</button>
          </div>
          </div>

    </div>
  )
}

export default Header
