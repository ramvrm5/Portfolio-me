import React from 'react';

import {BiCheck} from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed full-stack web applications which processed, analyzed, and rendered data visually.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Establish an interactive and dynamic website that guarantees high traffic, page views, and maximum user experience, generating a 45% increase in the company's sales revenue</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managed time-sensitive updates, including content changes and database upgrades.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Planned, wrote, and debugged web applications and software with complete accuracy.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed app integration with REST and other APIs for Google Maps, social media logins, payment processors, and other services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maximized applications’ efficiency, data quality, scope, operability, and flexibility.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services