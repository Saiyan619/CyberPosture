import React from 'react'
import './sectiontwo.css'

const imgData = [
    {src:'/Layer 2.png'},
    {src:'./Esusu-Logo 1.png'},
    {src:'./Mask group.png'},
    {src:'./Layer 1.png'},
    {src:'/Layer 2.png'},
    {src:'/Layer 2.png'},
]

const SectionTwo = () => {
  return (
    <div className='section_2_main_container'>
          <div className='section_2_hero_text_container'>
            <span>Organizations that trust us</span>
          </div>
          
          <div className='section_2_img_container'>
              
              {imgData.map((item, index) => {
                  return <div className='sub_section_2_img_container'>
                     <img key={index} src={item.src} alt="img" /> 
              </div>
              })}

          </div>
    </div>
  )
}

export default SectionTwo
