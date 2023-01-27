import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram, BsYoutube } from 'react-icons/bs' 

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
            <BsYoutube />
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia