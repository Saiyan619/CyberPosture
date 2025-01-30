import React from 'react'
import "./sectionone.css"

const SectionOne = () => {
  return (
    <div className='section_1_main_container'>
       <div class="container">
              <div class="section_1_header">
                  <span className='section_1_header_text'>catering for all industries</span>
    </div>
    <div class="scroll-container">
                  <div class="carousel-primary">
                      <div className='scroll_text'>Banks</div>
                      <div className='scroll_dot'></div>
                      <div className='scroll_text'>Government</div>
                      <div className='scroll_dot'></div>
                      <div className='scroll_text'>it</div>
                      <div className='scroll_dot'></div>
                      <div className='scroll_text'>fintech</div>
                      <div className='scroll_dot'></div>

      </div>
      <div class="carousel-primary carousel-secondary">
      <div className='scroll_text'>Banks</div>
                      <div className='scroll_dot'></div>
                      <div className='scroll_text'>Banks</div>
                      <div className='scroll_dot'></div>
                      <div className='scroll_text'>government</div>
                      <div className='scroll_dot'></div>
                      <div className='scroll_text'>it</div>
                      <div className='scroll_dot'></div>


      </div>
    </div>
  </div>
    </div>
  )
}

export default SectionOne
