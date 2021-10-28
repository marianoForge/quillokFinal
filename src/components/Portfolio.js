import React, { useState } from 'react';
import arrowMenu from '../images/work_arrow_menu.svg';
import Shelfset from './worksPortfolio/Shelfset';
import Facefwd from './worksPortfolio/Facefwd';
import moreProjects from '../images/work_arrow_MoreProjects.svg';
import Recordify from './worksPortfolio/Recordify';
import * as portStyles from '../styles/portfolio.module.css';
import { Link } from 'react-router-dom';

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
          <p className={portStyles.subtitleSection}>Work we’re proud of.</p>
        </div>
        <div className={portStyles.WorksContent}>
          <div className={portStyles.leftContent}>
            <div className={portStyles.WorksMenu}>
              <div className={portStyles.btWorks}>
                <div
                  className={
                    showShelf ? portStyles.workSelect : portStyles.workUnselect
                  }
                  onClick={showShelf ? null : handleShowShelf}
                  disabled={true}
                >
                  <div
                    className={
                      showShelf ? portStyles.highlight : portStyles.unhighlight
                    }
                    onClick={showShelf ? null : handleShowShelf}
                    disabled={true}
                  >
                    <div
                      className={
                        showShelf
                          ? portStyles.arrowSelect
                          : portStyles.arrowUnselect
                      }
                      onClick={showShelf ? null : handleShowShelf}
                      disabled={true}
                    >
                      <img src={arrowMenu} alt='Arrow Menu' />
                    </div>

                    <div
                      className={
                        showShelf
                          ? portStyles.textSelect
                          : portStyles.textUnselect
                      }
                      onClick={showShelf ? null : handleShowShelf}
                      disabled={true}
                    >
                      ShelfSet
                    </div>
                  </div>
                </div>
              </div>

              <div className={portStyles.btWorks}>
                <div
                  className={
                    showFace ? portStyles.workSelect : portStyles.workUnselect
                  }
                  onClick={showFace ? null : handleShowFace}
                  disabled={true}
                >
                  <div
                    className={
                      showFace ? portStyles.highlight : portStyles.unhighlight
                    }
                    onClick={showFace ? null : handleShowFace}
                    disabled={true}
                  >
                    <div
                      className={
                        showFace
                          ? portStyles.arrowSelect
                          : portStyles.arrowUnselect
                      }
                      onClick={showFace ? null : handleShowFace}
                      disabled={true}
                    >
                      <img src={arrowMenu} alt='Arrow Menu' />
                    </div>

                    <div
                      className={
                        showFace
                          ? portStyles.textSelect
                          : portStyles.textUnselect
                      }
                      onClick={showFace ? null : handleShowFace}
                      disabled={true}
                    >
                      FaceFwd
                    </div>
                  </div>
                </div>
              </div>

              <div className={portStyles.btWorks}>
                <div
                  className={
                    showRec ? portStyles.workSelect : portStyles.workUnselect
                  }
                  onClick={showRec ? null : handleShowRec}
                  disabled={true}
                >
                  <div
                    className={
                      showRec ? portStyles.highlight : portStyles.unhighlight
                    }
                    onClick={showRec ? null : handleShowRec}
                    disabled={true}
                  >
                    <div
                      className={
                        showRec
                          ? portStyles.arrowSelect
                          : portStyles.arrowUnselect
                      }
                      onClick={showRec ? null : handleShowRec}
                      disabled={true}
                    >
                      <img src={arrowMenu} alt='Arrow Menu' />
                    </div>

                    <div
                      className={
                        showRec
                          ? portStyles.textSelect
                          : portStyles.textUnselect
                      }
                      onClick={showRec ? null : handleShowRec}
                      disabled={true}
                    >
                      Recordify
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={portStyles.btMoreProjects}>
              <div className={portStyles.txtMoreProjects}>
                <Link to='/projects'>SEE MORE PROJECTS</Link>
              </div>
              <div className={portStyles.arrowMoreProjects}>
                <img src={moreProjects} width='100%' alt='More Projects' />
              </div>
            </div>
          </div>

          <div className={portStyles.rightContent}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
