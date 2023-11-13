import React from 'react'
import { Element } from 'react-scroll'
import skill from "../../assets/skill.jpg"
import "./Skill.css"
import LinearProgress from '@mui/material/LinearProgress';


const Skill = () => {
  return (
    <div>
        <Element className='skill' name='skills'>
            <div className='skill_img'>
                <img src={skill} alt='' />
            </div>
            <div className='skill_text'>
                <h2>SKILLSET</h2>
                <div className='skill_skillset'>
  <h5>React</h5>
  <div className='skill_slider skill_slider1'>
    <LinearProgress variant="determinate" value={60} />
  </div>
</div>


<div className='skill_skillset'>
  <h5>Python,Java</h5>
  <div className='skill_slider skill_slider1'>
    <LinearProgress variant="determinate" value={70} />
  </div>
</div>

<div className='skill_skillset'>
  <h5>C++,  C,  R</h5>
  <div className='skill_slider skill_slider1'>
    <LinearProgress variant="determinate" value={70} />
  </div>
</div>

<div className='skill_skillset'>
  <h5>DSA (in C)</h5>
  <div className='skill_slider skill_slider1'>
    <LinearProgress variant="determinate" value={65} />
  </div>
</div>


<div className='skill_skillset'>
  <h5>MongoDB</h5>
  <div className='skill_slider skill_slider1'>
    <LinearProgress variant="determinate" value={70} />
  </div>
</div>

<div className='skill_skillset'>
  <h5>Arduino,Micro-Controllers,R</h5>
  <div className='skill_slider skill_slider1'>
    <LinearProgress variant="determinate" value={45} />
  </div>
</div>

<div className='skill_skillset'>
  <h5>Solidworks (Basic)</h5>
  <div className='skill_slider skill_slider1'>
    <LinearProgress variant="determinate" value={30} />
  </div>
</div>


            </div>

        </Element>
    </div>
  )
}

export default Skill