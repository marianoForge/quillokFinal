import React, { useState } from 'react';
import arrowMenu from '../images/work_arrow_menu.svg';
import * as projectStyles from '../styles/projects.module.css';
import { projects } from '../content/projects';

const Accordion = ({ title, content, status, image }) => {
  const [isActive, setIsActive] = useState(status);

  return (
    <div className={projectStyles.workContent}>
      <div className={projectStyles.leftContent}>
        <div className={projectStyles.highlight}>
          <div
            className={projectStyles.menuSelect}
            onClick={() => setIsActive(!isActive)}
          >
            <div
              className={
                isActive
                  ? projectStyles.menuArrow
                  : {
                      /*ACA VA LA OTRA FLECHA*/
                    }
              }
            >
              <img src={arrowMenu} width='100%' alt='Arrow Menu' />
            </div>
            <h2
              className={
                isActive ? projectStyles.workSelect : projectStyles.workUnselect
              }
            >
              {title}
            </h2>
          </div>
        </div>
        {isActive ? (
          <p className={projectStyles.descriptionWork}>{content}</p>
        ) : null}
      </div>
      {isActive ? (
        <div className={projectStyles.rightContent}>
          <div className={projectStyles.frameImageWork}>
            <div className={projectStyles.imageWork}>
              <img src={image} width='100%' alt={title} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Accordion;
