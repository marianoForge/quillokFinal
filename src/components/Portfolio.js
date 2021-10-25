import React from 'react';
import Shelfset from './worksPortfolio/Shelfset';
import Facefwd from './worksPortfolio/Facefwd';
import moreProjects from '../images/work_arrow_MoreProjects.svg';
import Recordify from './worksPortfolio/Recordify';
import * as portStyles from '../styles/portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={portStyles.flex_container_fluid}>
      <div className={portStyles.flex_container}>
        <div className={portStyles.WorksTitle}>
          <h2 className={portStyles.titleSection}>PORTFOLIO</h2>
          <p className={portStyles.subtitleSection}>See our works</p>
        </div>

        <div>
          <Shelfset />
        </div>

        <div>
          <Facefwd />
        </div>
        <div>
          <Recordify />
        </div>
        <div className={portStyles.WorksContent}>
          <div className={portStyles.btMoreProjects}>
            <div className={portStyles.txtMoreProjects}>SEE MORE PROJECTS</div>
            <div className={portStyles.arrowMoreProjects}>
              <img src={moreProjects} width="100%" alt="More Projects" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
