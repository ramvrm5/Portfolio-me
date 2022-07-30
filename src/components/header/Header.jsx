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
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={RAM} alt="" />
        </div>

        <a href="#about" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header