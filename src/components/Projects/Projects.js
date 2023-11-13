import React from 'react';
import { Element } from 'react-scroll';
import Proj from '../Proj/Proj';
import "./Projects.css"

const Projects = () => {
  const project = [
    {
        img:"https://img1.wsimg.com/isteam/ip/e9c1bdab-ef67-4abe-9ce0-82a400c73871/Untitled.png",
        title:"Advanced footwear technology for safety of visually challenged using arduino",
        desc:"Developed 'Smart Shoes for Visually Challenged' using Arduino, enabling real-time object detection and providing audio feedback through earphones using bluetooth module and safety for the visually impaired.",
        link:"https://drive.google.com/file/d/19NT8anXqtsvWbbxdfV2txwlk7-gej3er/view?usp=drive_link"
    },
    {
        img:"https://politicalmarketer.com/wp-content/uploads/2021/07/Political-Sentiment-Analysis-600x384.png",
        title:"POLITICAL AND PUBLIC SENTIMENTAL ANALYSIS",
        desc:"Analyzed and visualized political party policies to identify similarities, differences, and key issues.Provided valuable insights for voters and enabled strategic adjustments for political parties.",
        link:"https://docs.google.com/document/d/176GVWRlR5gwxaF8NDFOViPrFL0a0Z1-Z/edit?usp=drive_link&ouid=116949865370513255133&rtpof=true&sd=true"
    },
    {
        img:"https://i.ytimg.com/vi/oy58S4beC9c/maxresdefault.jpg",
        title:"Ball and Beam balance using PID controller",
        desc:"Development of a Ball & Beam balance system using a PID controller, implementing hardware and software integration for precise positioning and stability",
        link:"https://drive.google.com/file/d/1smg4HpxGBdhz-CbanjEb0ih91DpNv4R8/view?usp=drive_link"
    },
    {
        img:"https://nextincareer.s3.ap-south-1.amazonaws.com/wp-content/uploads/2019/08/14095818/TNEA-Counselling.png",
        title:"TNEA Councelling Database",
        desc:"Developed TNEA counseling database using SQL Plus for streamlined student admissions and data management.",
        link:"https://drive.google.com/file/d/1Hg5A8m_dwuOpAL1QHBmJUerC1JiDt_8v/view?usp=drive_link"
    }
    ];

    return (
    <Element className='projects' id='projects'>
        <h1>PROJECTS</h1>
        <p>Here are some of my projects</p>
        <div className='projects_'>
        {project.map((proj, index) => {
            return (
            <Proj
                key={index}
                img={proj.img}
                title={proj.title}
                desc={proj.desc}
                link={proj.link}
            />
        );
    })}
    </div>
    </Element>
    );
};

export default Projects;
