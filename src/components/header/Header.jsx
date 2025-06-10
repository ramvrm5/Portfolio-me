import React from 'react';

import CTA from './CTA';
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png';
import RAM from '../../assets/ram.jpg';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ram Kumar Verma</h1>
        <h5 className="text-light">Experienced Full Stack Developer with a passion for creating scalable and efficient web applications | REACT.JS, Next.js, NODE.JS</h5>
        <CTA />
        <HeaderSocials />

        <div className="conatiner__me">
          <div className="me">
            <img src={RAM} alt="" />
          </div>
        </div>

        <a href="#about" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header


/* 
demo
github
id
image
title

*/