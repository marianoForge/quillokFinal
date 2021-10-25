import React from 'react';
import * as portStyles from '../../styles/portfolio.module.css';
import { projects } from '../../content/projects';
import works from '../../images/works_img_3.png';

const Recordify = () => {
  return (
    <div className={portStyles.rightContent}>
      <div className={portStyles.frameImageWork}>
        <div className={portStyles.imageWork}>
          <img src={works} width='100%' alt='Works' />
        </div>
      </div>
      <div className={portStyles.workDescription}>
        <div className={portStyles.numberDesc}>03</div>
        <div className={portStyles.textDesc}>
          <strong>{projects[2].title}</strong> {projects[2].contentShort}
        </div>
      </div>
    </div>
  );
};

export default Recordify;
