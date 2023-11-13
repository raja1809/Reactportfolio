import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header_left'>
        <h1>Develop<span>er</span></h1>
      </div>
      <div className='header_right'>
        <Link to='about' smooth={true} duration={500} offset={-100} spy={true} activeClass='active-link'>
          <h4> About me</h4>
        </Link>
        <Link to='skills' smooth={true} duration={500} offset={-100} spy={true} activeClass='active-link'>
          <h4> Skills</h4>
        </Link>
        <Link to='projects' smooth={true} duration={500} offset={-100} spy={true} activeClass='active-link'>
          <h4> Projects </h4>
        </Link>
        <Link to='exp' smooth={true} duration={500} offset={-100} spy={true} activeClass='active-link'>
          <h4> Experience </h4>
        </Link>
        <Link to='contact' smooth={true} duration={500} offset={-100} spy={true} activeClass='active-link'>
          <h4> Contact </h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
