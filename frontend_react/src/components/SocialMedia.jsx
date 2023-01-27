import React from 'react'
import { BsLinkedin, BsGithub, BsYoutube } from 'react-icons/bs' 

function SocialMedia() {
  return (
    <div className='app__social'>
        <a href="https://www.linkedin.com/in/muhammad-rafi-ardiansyah" target='_blank'>
            <div>
                <BsLinkedin />
            </div>
        </a>
        <a href="https://github.com/Chainz7" target='_blank'>
            <div>
                <BsGithub />
            </div>
        </a>
        <a href="https://www.youtube.com/@chainz9492" target='_blank'>
            <div>
                <BsYoutube />
            </div>
        </a>
    </div>
  )
}

export default SocialMedia