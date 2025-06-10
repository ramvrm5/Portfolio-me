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
              <small>5+ Years Working</small>
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
            I'm a Full Stack Developer with a passion for transforming agency designs into captivating and user-friendly digital experiences. With a strong focus on efficiency, I collaborate with agencies and large stores to bring their visions to life in the most effective way possible.<br /><br />

            As a self-taught web developer since 2018, I've honed my skills working on a diverse range of projects, from small websites to large-scale web applications and innovative mobile apps. My experience spans the entire development process, from crafting intuitive front-end interfaces to building robust backend APIs.<br /><br />

            Currently, I thrive as a freelancer, taking charge of both web and mobile app development projects while also spearheading the backend infrastructure required to create exceptional and distinctive products.<br /><br />

            My skill set encompasses cutting-edge technologies such as React.js, TypeScript, and Vue.js, which enable me to deliver dynamic and interactive user interfaces. I'm well-versed in utilizing powerful libraries like React Hooks and Redux to optimize performance and streamline development workflows. Additionally, I have expertise in React-Native for cross-platform mobile app development.<br /><br />

            To ensure seamless deployment and scalability, I possess comprehensive knowledge of cloud platforms like AWS and Google Cloud. I'm also experienced in working with databases such as MongoDB and Firebase, enabling efficient data management for various applications.<br /><br />

            In terms of project optimization and organization, I am well-versed in tools like Webpack and am proficient in developing Single Page Applications (SPAs) and RESTful APIs. I am also familiar with agile development methodologies, particularly Scrum, which enables efficient collaboration and timely delivery.<br /><br />

            With a keen eye for detail and a drive to create products that users love and trust, I'm committed to crafting exceptional digital solutions that empower individuals to navigate the digital landscape with ease.<br /><br />

            Let's collaborate and bring your digital vision to life!<br /><br />

            <b>Skills</b>: React.js, Next.js, TypeScript, Javascript, React Hooks, Redux, Vue.js, React-Native, Tailwindcss, styled-components, Nodejs, AWS, Google Cloud, Blockchain (Tron,web3.js), MongoDB, Firebase, Webpack, SPAs (Single Page Application), RESTful APIs, Webpack, Scrum.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About