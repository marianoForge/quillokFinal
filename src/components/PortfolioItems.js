import React, { useState } from 'react';
import * as portStyles from '../styles/portfolio.module.css';
import arrowMenu from '../images/work_arrow_menu.svg';

const PortfolioItems = ({ title, content, status, image, num }) => {
  const [isActive, setIsActive] = useState(status);

  return (
    <div onClick={() => setIsActive(!isActive)}>
      <div className={portStyles.unhighlight}>
        <div className={portStyles.menuArrow}>
          <img src={arrowMenu} width="100%" alt="Arrow Menu" />
        </div>
        <div className={portStyles.workUnselect}>{title}</div>
      </div>
      {isActive ? (
        <div className={portStyles.rightContent}>
          <div className={portStyles.frameImageWork}>
            <div className={portStyles.imageWork}>
              <img src={image} width="100%" alt="Works" />
            </div>
          </div>
          <div className={portStyles.workDescription}>
            <div className={portStyles.numberDesc}>{num}</div>
            <div className={portStyles.textDesc}>
              <strong>{title}</strong> {content}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PortfolioItems;
