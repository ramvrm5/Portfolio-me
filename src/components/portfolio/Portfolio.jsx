import React, { useEffect, useState } from 'react';

import { collection, doc, getDocs } from "firebase/firestore"; 
import { db } from '../../firebase'
import './portfolio.css';

const Portfolio = () => {
  const [ portfolio, setPortfolio ] = useState([]);

  useEffect(() => {
    const getPortfolio = async () => {
      const querySnapshot = await getDocs(collection(db, 'porfolio'));
      setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
    }
    getPortfolio();
  }, [])
  
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          portfolio.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                    <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio