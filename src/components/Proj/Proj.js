import React, { useState } from 'react'
import "./Proj.css"

const Proj = ({img,title,desc,link}) => {
    const [show, setShow] = useState(false)
    return (
    <a href={link}>
        <div
        className='proj'
        onMouseEnter={()=>setShow(true)}
        onMouseLeave={()=>setShow(false)}>
            {show?(
                <div className='projcc'>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            ) : (
                <img src={img} alt=''/>
            )}
        </div>
    </a>
    )
}

export default Proj