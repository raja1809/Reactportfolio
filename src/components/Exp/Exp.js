import React from 'react'
import { Element } from 'react-scroll'
import ExpB from '../ExpB/ExpB'
import './Exp.css'
const Exp = () => {
  return (
    <Element className='exp' id='exp'>
        <h1>EXPERIENCE</h1>
        <div className='exp_info'>
            <ExpB number="Internship" title="Internship in Web-Development for 12 weeks with Readycoder Pvt. Ltd." style={{backgroundColor:"orangered"}}/>
            <ExpB number="Make-a-thon" title="Make-a-thon on Design of High-speed VLSI Circuits using CADENCE EDA tool" style={{backgroundColor:"orange"}}/>
            <ExpB number="Internship" title="Created a Full-Stack website for Shanka Educational Academy" style={{backgroundColor:"orangered"}}/>            
        </div>
    </Element>
  )
}

export default Exp