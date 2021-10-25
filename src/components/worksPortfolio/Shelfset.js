import * as portStyles from '../../styles/portfolio.module.css';
import { projects } from '../../content/projects';

import works from '../../images/works_img_1.png';
// import imgArrowUnselect from "../images/work_arrowUnselect.svg";

const Shelfset = () => {
  return (
    <div className={portStyles.rightContent}>
      <div className={portStyles.frameImageWork}>
        <div className={portStyles.imageWork}>
          <img src={works} width='100%' alt='Works' />
        </div>
      </div>
      <div className={portStyles.workDescription}>
        <div className={portStyles.numberDesc}>01</div>
        <div className={portStyles.textDesc}>
          <strong>{projects[0].title}</strong> {projects[0].contentShort}
        </div>
      </div>
    </div>
  );
};

export default Shelfset;
