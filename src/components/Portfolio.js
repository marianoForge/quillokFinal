import React from "react";
import moreProjects from "../images/work_arrow_MoreProjects.svg";
import arrowMenu from "../images/work_arrow_menu.svg";
import works from "../images/works_img_1.png";
import * as portStyles from "../styles/portfolio.module.css";

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
              <div className={portStyles.highlight}>
                <div className={portStyles.menuShelfSet}>
                  <div className={portStyles.menuArrow}>
                    <img src={arrowMenu} width="100%" alt="Arrow Menu" />
                  </div>
                  <div className={portStyles.workSelect}>ShelfSet</div>
                </div>
              </div>
              <div className={portStyles.workUnselect}>FaceFwd</div>
              <div className={portStyles.workUnselect}>Recordify</div>
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
          <div className={portStyles.rightContent}>
            <div className={portStyles.frameImageWork}>
              <div className={portStyles.imageWork} >
                <img src={works} width="100%" alt="Works" />
              </div>
            </div>
            <div className={portStyles.workDescription}>
              <div className={portStyles.numberDesc}>01</div>
              <div className={portStyles.textDesc}>
                <strong>ShelfSet</strong> is a complete tool for shelf space
                analysis. Leveraging AI technology, users can obtain critical
                data on how the shelves are laid out, so they can take action on
                how to maximize and optimize their operations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
