import React from 'react';
import works from '../images/works_img_1.png';
import arrowMenu from "../images/work_arrow_menu.svg";
import { projects } from '../content/projects';
import * as projectStyles from "../styles/projects.module.css";

const Projects = () => {
  const renderedProjects = projects.map((project) => {
    const img2 = () => {
      switch (project.id) {
        case 1:
          return works;
        case 2:
          return works;
        case 3:
          return works;
        default:
          return null;
      }
    };
    return (
      <React.Fragment key={project.id}>
        <div className={projectStyles.workContent}>

          <div className={projectStyles.leftContent}>
            <div className={projectStyles.highlight}>
              <div className={projectStyles.menuSelect}>
                <div className={projectStyles.menuArrow}>
                  <img src={arrowMenu} width="100%" alt="Arrow Menu" />
                </div>
                <h2 className={projectStyles.workSelect}>{project.title}</h2>
              </div>
            </div>
            <p className={projectStyles.descriptionWork}>{project.content}</p>

            <div className={projectStyles.btsUnselect}>
              <div className={projectStyles.unhighlight}>
                <div className={projectStyles.menuUnselect}>
                    <div className={projectStyles.arrowUnselect}>
                      <img src={arrowMenu} width="35px" alt="Arrow Menu" />
                    </div>
                    <h2 className={projectStyles.workUnselect}>FaceFwd</h2>
                </div>
              </div>
              <div className={projectStyles.unhighlight}>
                <div className={projectStyles.menuUnselect}>
                    <div className={projectStyles.arrowUnselect}>
                      <img src={arrowMenu} width="35px" alt="Arrow Menu" />
                    </div>
                    <h2 className={projectStyles.workUnselect}>Recordify</h2>
                </div>
              </div>
            </div>



          </div>

          <div className={projectStyles.rightContent}>
            <div className={projectStyles.frameImageWork}>
              <div className={projectStyles.imageWork}>
                <img src={img2()} width="100%" alt={project.title}></img>
              </div>
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  });

  return (
    <section>
      <div className={projectStyles.flex_container_fluid}>
        <div className={projectStyles.flex_container}>
          <div className={projectStyles.titleSection}>See our Works</div>
          <div>{renderedProjects}</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
