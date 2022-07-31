import React from 'react'

import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>RAM VERMA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/ramvrm5" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/ramvrm5/" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="https://linkedin.com/in/ramverma-softwaredeveloper" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; RAM VERMA. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer