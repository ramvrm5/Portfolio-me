import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderSocials from "../header/HeaderSocials";

const PortfolioPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [portfolio, setPortfolio] = useState(location.state.data);

  const handleBackToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="portfolio__page">
      <a
        onClick={() => handleBackToHomePage()}
        className="btn btn-primary portfolio__page_back"
      >
        {" "}
        &larr; Back
      </a>
      <section>
        <div className="portfolio__page_main">
          <div className="portfolio__page_social">
            <HeaderSocials />
          </div>
          <div className="portfolio__page_list">
            <div className="container portfolio__container">
              {portfolio.map(({ id, image, title, github, demo }, i) => {
                return (
                  <>
                    <article key={i} className="portfolio__item">
                      <div className="portfolio__item-image">
                        <img src={image} alt="" style={{ height: "150px" }} />
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                          <a
                            href={github}
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Github
                          </a>
                          <a
                            href={demo}
                            className="btn btn-primary"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </article>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
