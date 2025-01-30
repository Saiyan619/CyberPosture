import React from 'react'
import './sectionthree.css'



const SectionThree = () => {
  return (
    <div className='section_3_container'>
      <span>how we work</span>
      <h2><span>We ensure your organization is protected</span> <br />against evolving threats and meets all <br />regulatory requirements.</h2>
      
      <div className='section_3_cards_container'>

        <div className='section_3_card'>
          <img src="/Frame 19.png" alt="img" />
          <span>Proactive approach</span>
          <p>We stay ahead of emerging threats to ensure your organization is always protected.</p>
        </div>
        <div className='section_3_card'>
          <img src="/Frame 17.png" alt="img" />
          <span>Expertise</span>
          <p>Our team of seasoned professionals brings deep industry knowlegde and experience</p>
        </div>
        <div className='section_3_card'>
          <img src="/Frame 18.png" alt="img" />
          <span>Tailored solutions</span>
          <p>We understand that every organization is unique. Our solutions is customized to meet your specific needs.</p>
        </div>
        <div className='section_3_card'>
          <img src="/Frame 20.png" alt="img" />
          <span>Commitment to execellence </span>
          <p>We are dedicated to delivering the highest quality services and achieving the best outcomes of our clients.</p>
        </div>
        

      </div>
    </div>
  )
}

export default SectionThree
