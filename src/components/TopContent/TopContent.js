import React from 'react'
import {Link} from 'react-scroll'
import "./TopContent.css"

const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent_container'>
            <h1>Mr. Rajasekar S</h1>
            <p>An ambitious and driven third-year student pursuing a degree in </p>
            <p>Electronics and Computer Engineering. With a strong foundation in the </p>
            <p> fundamentals of the field, I'm seeking to gain practical experience and further </p><p>develop my skills through an internship opportunity.</p>
            <a href='https://drive.google.com/drive/folders/1cE8T5aPHMVermPBLpaf1U8WEVrMfuUJ0?usp=sharing'>
                <button className='downloadbutton'>Download Resume</button>
            </a>
            <Link to='projects' smooth={true} duration={500}>
                <button className='workbutton'>My Work</button>
            </Link>

        </div>

    </div>
  )
}

export default TopContent