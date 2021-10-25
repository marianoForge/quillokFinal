import React, { useState } from 'react';
import { projects } from '../../content/projects';
import * as portStyles from '../../styles/portfolio.module.css';
import arrowMenu from '../../images/work_arrow_menu.svg';
import works from '../../images/works_img_2.png';
// import imgArrowUnselect from "../images/work_arrowUnselect.svg";

const Facefwd = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  console.log(projects);

  return (
    <div id="facefwd" className={portStyles.WorksContent}>
      <div className={portStyles.leftContent}>
        <div className={portStyles.WorksMenu} onClick={handleShow}>
          <div className={portStyles.highlight}>
            <div className={portStyles.btSelect}>
              <div className={portStyles.menuArrow}>
                <img src={arrowMenu} width="100%" alt="Arrow Menu" />
              </div>
              <div className={portStyles.workSelect}>FaceFwd</div>
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
            <div className={portStyles.numberDesc}>02</div>
            <div className={portStyles.textDesc}>
              <strong>{projects[1].title}</strong> {projects[1].contentShort}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Facefwd;
