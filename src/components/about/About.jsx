import React from 'react';

import RAM from '../../assets/ram.jpg';

import ME from '../../assets/me-about.jpg';

import { FaAward } from 'react-icons/fa';

import { FiUsers } from 'react-icons/fi';

import { VscFolderLibrary } from 'react-icons/vsc';

import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={RAM} alt="About Me" />
          </div>
        </div> */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>8+ WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>14+ completed</small>
            </article>
          </div>

          <p>
            I'm a Full Stack Developer who works with agencies and/or large stores to efficiently bring their designs to life. I'm deeply passionate about creating loved and trusted products that help people navigate.<br/><br/>

            A self-taught web developer since 2018, I've worked on everything from small websites to large web applications as well as small applications.<br/><br/>

            Currently, I work as a freelancer at Upwork, where I lead both web and mobile app development platforms, and also handle the backend(APIs) for building unique products. you can check my <a href="https://www.upwork.com/freelancers/~01d887a0574e179362" target="_blank" rel="noreferrer">UPWORK PROFILE</a><br/><br/>

            <b>Skills</b>: React.js, TypeScript, React Hooks, Redux, Vue.js, React-Native, Nodejs, AWS, Google Cloud, Blockchain (Tron,web3.js), MongoDB, Firebase, Webpack, SPAs (Single Page Application), RESTful APIs, Webpack, Scrum.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About