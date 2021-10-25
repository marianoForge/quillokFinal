import React from 'react';
import { projects } from '../../content/projects';
import * as portStyles from '../../styles/portfolio.module.css';
import works from '../../images/works_img_2.png';
// import imgArrowUnselect from "../images/work_arrowUnselect.svg";

const Facefwd = () => {
  console.log(projects);

  return (
    <div className={portStyles.rightContent}>
      <div className={portStyles.frameImageWork}>
        <div className={portStyles.imageWork}>
          <img src={works} width='100%' alt='Works' />
        </div>
      </div>
      <div className={portStyles.workDescription}>
        <div className={portStyles.numberDesc}>02</div>
        <div className={portStyles.textDesc}>
          <strong>{projects[1].title}</strong> {projects[1].contentShort}
        </div>
      </div>
    </div>
  );
};

export default Facefwd;
