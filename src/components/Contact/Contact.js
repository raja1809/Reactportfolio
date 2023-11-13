import React from 'react'
import {Element} from 'react-scroll'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Contact.css'

const Contact = () => {
    return (
        
    <Element className='contact' id='contact'>
        <h1>CONTACT</h1>
        <div className='contact_'>
            <p>
                Email : <span>rajasekhar8383@gmail.com</span>
            </p>
            <p>
                GitHub Username : <span>@raja1809</span>
            </p>
            <div className='icons'>
                <a href='https://www.facebook.com/profile.php?id=100009314781203'>
                <FacebookIcon />
                </a>
                <a href='https://www.instagram.com/raja1809_/'>
                <InstagramIcon />
                </a>
                <a href='https://www.linkedin.com/in/rajasekar-s-2520a6244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                <LinkedInIcon />
                </a>
            </div>
            </div>
    </Element>
    )
}

export default Contact