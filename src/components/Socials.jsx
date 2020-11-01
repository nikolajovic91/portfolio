import React from 'react'
import fb from '../assets/socials/facebook.svg'
import insta from '../assets/socials/instagram.svg'
import ln from '../assets/socials/linkedin.svg'
import mail from '../assets/socials/email.svg'
import tw from '../assets/socials/twitter.svg'
import github from '../assets/socials/github.svg'
import bitbucket from '../assets/socials/bitbucket.svg'

export default function Socials() {
    return (
        <div className="socials">
            <div>
            <a href="mailto:nikolajovic91@gmail.com"><img src={mail} title="Mail" alt="mail"/></a>
            <a href="https://github.com/nikolajovic91"><img src={github} title="Github" alt="github"/></a>
            <a href="https://bitbucket.org/nikola_991/"><img src={bitbucket} title="Bitbucket" alt="bitbucket"/></a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/nikola-r-jovic/"><img src={ln}  title="Linkedin" alt="linkedin"/></a>
            <a href="https://www.facebook.com/nikola.jovic.127/"><img src={fb} title="Facebook" alt="facebook"/></a>
            <a href="https://www.instagram.com/nykyov/"><img src={insta} title="Instagram" alt="instagram"/></a>
            <a href="https://twitter.com/young_nikola"><img src={tw} title="Twitter" alt="twitter"/></a>
            </div>
            
        </div>
    )
}
