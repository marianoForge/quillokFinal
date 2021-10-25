import React, { useState } from 'react';
import * as portStyles from '../../styles/portfolio.module.css';
import { projects } from '../../content/projects';
import arrowMenu from '../../images/work_arrow_menu.svg';
import works from '../../images/works_img_3.png';

const Recordify = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={portStyles.WorksContent}>
      <div className={portStyles.leftContent}>
        <div className={portStyles.WorksMenu} onClick={handleShow}>
          <div className={portStyles.highlight}>
            <div className={portStyles.btSelect}>
              <div className={portStyles.menuArrow}>
                <img src={arrowMenu} width="100%" alt="Arrow Menu" />
              </div>
              <div className={portStyles.workSelect}>Recordify</div>
            </div>
          </div>
        </div>
      </div>
      {show ? (
        <div className={portStyles.rightContent}>
          <div className={portStyles.frameImageWork}>
            <div className={portStyles.imageWork}>
              <img src={works} width="100%" alt="Works" />
            </div>
          </div>
          <div className={portStyles.workDescription}>
            <div className={portStyles.numberDesc}>03</div>
            <div className={portStyles.textDesc}>
              <strong>{projects[2].title}</strong> {projects[2].contentShort}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Recordify;
