import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs' 

function SocialMedia() {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin />
        </div>
        <div>
          
            <BsGithub/>
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia