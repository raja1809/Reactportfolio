import React from 'react'
import './ExpB.css'

const ExpB = ({number,title,style}) => {
  return (
    <div style={{...style}} className='expb'>
        <h1>{number}</h1>
        <p>{title}</p>
    </div>
  )
}

export default ExpB