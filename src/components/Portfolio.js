import React, { useState } from 'react';
import arrowMenu from '../images/work_arrow_menu.svg';
import Shelfset from './worksPortfolio/Shelfset';
import Facefwd from './worksPortfolio/Facefwd';
import moreProjects from '../images/work_arrow_MoreProjects.svg';
import Recordify from './worksPortfolio/Recordify';
import * as portStyles from '../styles/portfolio.module.css';

const Portfolio = () => {
  const [showShelf, setShowShelf] = useState(true);
  const [showFace, setShowFace] = useState(false);
  const [showRec, setShowRec] = useState(false);

  const handleShowFace = () => {
    setShowFace(!showFace);
    if (showRec || showShelf) {
      setShowRec(false);
      setShowShelf(false);
    }
  };

  const handleShowRec = () => {
    setShowRec(!showRec);
    if (showFace || showShelf) {
      setShowFace(false);
      setShowShelf(false);
    }
  };

  const handleShowShelf = () => {
    setShowShelf(!showShelf);
    if (showFace || showRec) {
      setShowFace(false);
      setShowRec(false);
    }
  };

  return (
    <div className={portStyles.flex_container_fluid}>
      <div className={portStyles.flex_container}>
        <div className={portStyles.WorksTitle}>
          <h2 className={portStyles.titleSection}>PORTFOLIO</h2>
          <p className={portStyles.subtitleSection}>See our works</p>
        </div>
        <div id='facefwd' className={portStyles.WorksContent}>
          <div className={portStyles.leftContent}>
            <div className={portStyles.WorksMenu}>
              <div className={portStyles.highlight}>
                <div className={portStyles.btSelect}>
                  <div className={portStyles.menuArrow}>
                    <img src={arrowMenu} width='100%' alt='Arrow Menu' />
                  </div>
                  <div
                    className={
                      showShelf
                        ? portStyles.workSelect
                        : portStyles.workUnselect
                    }
                    onClick={showShelf ? null : handleShowShelf}
                    disabled={true}
                  >
                    ShelfSet
                  </div>
                </div>
                <div className={portStyles.btSelect}>
                  <div className={portStyles.menuArrow}>
                    <img src={arrowMenu} width='100%' alt='Arrow Menu' />
                  </div>
                  <div
                    className={
                      showFace ? portStyles.workSelect : portStyles.workUnselect
                    }
                    onClick={showFace ? null : handleShowFace}
                  >
                    FaceFwd
                  </div>
                </div>
                <div className={portStyles.btSelect}>
                  <div className={portStyles.menuArrow}>
                    <img src={arrowMenu} width='100%' alt='Arrow Menu' />
                  </div>
                  <div
                    className={
                      showRec ? portStyles.workSelect : portStyles.workUnselect
                    }
                    onClick={showRec ? null : handleShowRec}
                  >
                    Recordify
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showShelf && (
          <div>
            <Shelfset />
          </div>
        )}
        {showFace && (
          <div>
            <Facefwd />
          </div>
        )}
        {showRec && (
          <div>
            <Recordify />
          </div>
        )}
        <div className={portStyles.WorksContent}>
          <div className={portStyles.btMoreProjects}>
            <div className={portStyles.txtMoreProjects}>SEE MORE PROJECTS</div>
            <div className={portStyles.arrowMoreProjects}>
              <img src={moreProjects} width='100%' alt='More Projects' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
