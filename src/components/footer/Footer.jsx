import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer_main_container'>
          <div className='sub_footer_container'>
              <div className='sub_footer_container_1'>
                  <img src="./X Logo.png" alt="icon" />
                  <img src="./Logo Instagram.png" alt="icon" />
                  <img src="./Logo YouTube.png" alt="icon" />
                  <img src="./LinkedIn.png" alt="icon" />
              </div>

              <div className='sub_footer_container_2'>
                  <div className='sub_footer_list_container'>
                  <span>Company</span>
                    <span>Services</span>
                    <span>Resources</span>
                    <span>Legal</span>
                    <span>Privacy</span>
                  </div>
                       <div className='sub_footer_list_container'>
                  <span>Company</span>
                    <span>Services</span>
                    <span>Resources</span>
                    <span>Legal</span>
                    <span>Privacy</span>
                  </div>
                       <div className='sub_footer_list_container'>
                  <span>Company</span>
                    <span>Services</span>
                    <span>Resources</span>
                    <span>Legal</span>
                    <span>Privacy</span>
                  </div>
                    
              </div>

              <div className='sub_footer_container_3'>
                  <img src="./Layer_1.png" alt="" />
              </div>
          </div>
          

          <div className='last_div'>
              {/* <span>cyberposture</span> */}
          <img src="./Layer_1.png" alt="" />
          </div>
    </div>
  )
}

export default Footer
