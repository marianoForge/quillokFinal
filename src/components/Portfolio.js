import React from 'react';
import moreProjects from '../images/work_arrow_MoreProjects.svg';
import PortfolioItems from './PortfolioItems';
import works from '../images/works_img_1.png';
import * as portStyles from '../styles/portfolio.module.css';
import { projects } from '../content/projects';

const Portfolio = () => {
  return (
    <div className={portStyles.flex_container_fluid}>
      <div className={portStyles.flex_container}>
        <div className={portStyles.WorksTitle}>
          <h2 className={portStyles.titleSection}>PORTFOLIO</h2>
          <p className={portStyles.subtitleSection}>See our works</p>
        </div>
        <div className={portStyles.WorksContent}>
          <div className={portStyles.leftContent}>
            <div className={portStyles.WorksMenu}>
              <div>
                {projects.map((project) => {
                  const img2 = () => {
                    switch (project.id) {
                      case 1:
                        return works;
                      case 2:
                        return works;
                      case 3:
                        return works;
                      default:
                        return null;
                    }
                  };
                  const status = () => {
                    switch (project.id) {
                      case 1:
                        return true;
                      case 2:
                        return false;
                      case 3:
                        return false;
                      default:
                        return null;
                    }
                  };
                  const num = () => {
                    switch (project.id) {
                      case 1:
                        return '01';
                      case 2:
                        return '02';
                      case 3:
                        return '03';
                      default:
                        return null;
                    }
                  };
                  return (
                    <React.Fragment key={project.id}>
                      <PortfolioItems
                        title={project.title}
                        content={project.contentShort}
                        status={status()}
                        image={img2()}
                        num={num()}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
              <div className={portStyles.btMoreProjects}>
                <div className={portStyles.txtMoreProjects}>
                  SEE MORE PROJECTS
                </div>
                <div className={portStyles.arrowMoreProjects}>
                  <img src={moreProjects} width="100%" alt="More Projects" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
