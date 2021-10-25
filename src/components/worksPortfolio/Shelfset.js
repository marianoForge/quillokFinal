import React, { useState } from 'react';
import * as portStyles from '../../styles/portfolio.module.css';
import { projects } from '../../content/projects';
import arrowMenu from '../../images/work_arrow_menu.svg';
import works from '../../images/works_img_1.png';
// import imgArrowUnselect from "../images/work_arrowUnselect.svg";

const Shelfset = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={portStyles.WorksContent}>
      {/* <button onClick={onOff} > CONCHA LORA</button> */}

      <div className={portStyles.leftContent}>
        <div className={portStyles.WorksMenu} onClick={handleShow}>
          <div className={portStyles.highlight}>
            <div className={portStyles.btSelect}>
              <div className={portStyles.menuArrow}>
                <img src={arrowMenu} width="100%" alt="Arrow Menu" />
              </div>
              <div className={portStyles.workSelect}>ShelfSet</div>
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
            <div className={portStyles.numberDesc}>01</div>
            <div className={portStyles.textDesc}>
              <strong>{projects[0].title}</strong> {projects[0].contentShort}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Shelfset;
