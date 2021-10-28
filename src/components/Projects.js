import React from 'react';
import { projects } from '../content/projects';
import QuillokLogo from '../images/Quillok_Logo.svg';
import BackHome from '../images/Back_Home.svg';
import work1 from '../images/works_img_1.png';
import work2 from '../images/works_img_2.png';
import work3 from '../images/works_img_3.png';
import work4 from '../images/works_img_4.png';
import work5 from '../images/works_img_5.png';
import work6 from '../images/works_img_6.png';
import work7 from '../images/works_img_7.png';
import work8 from '../images/works_img_8.png';
import Accordion from './Accordion';
import * as projectStyles from '../styles/projects.module.css';

const Projects = () => {
  return (
    <section>
      <div className={projectStyles.flex_container_fluid}>
        <div className={projectStyles.containerNavbar}>
          <div className={projectStyles.logoQuillok}>
            <img src={QuillokLogo} alt='Quillok Logo' />
          </div>
          <div className={projectStyles.backHome}>
            <img src={BackHome} alt='back Home' />
          </div>
        </div>
        <div className={projectStyles.flex_container}>
          <div className={projectStyles.titleSection}>Work we’re proud of</div>
          <div>
            {projects.map((project) => {
              const img = () => {
                switch (project.id) {
                  case 1:
                    return work1;
                  case 2:
                    return work2;
                  case 3:
                    return work3;
                  case 4:
                    return work4;
                  case 5:
                    return work5;
                  case 6:
                    return work6;
                  case 7:
                    return work7;
                  case 8:
                    return work8;
                  default:
                    return null;
                }
              };
              const status = () => {
                switch (project.id) {
                  case 1:
                    return true;
                  case 2:
                    return false;
                  case 3:
                    return false;
                  case 4:
                    return false;
                  case 5:
                    return false;
                  case 6:
                    return false;
                  case 7:
                    return false;
                  case 8:
                    return false;
                  default:
                    return null;
                }
              };
              return (
                <React.Fragment key={project.id}>
                  <Accordion
                    title={project.title}
                    content1={project.content1}
                    content2={project.content2}
                    content3={project.content3}
                    content4={project.content4}
                    content5={project.content5}
                    status={status}
                    image={img()}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

// <div className={projectStyles.btsUnselect}>
//               <div className={projectStyles.unhighlight}>
//                 <div className={projectStyles.menuUnselect}>
//                   <div className={projectStyles.arrowUnselect}>
//                     <img src={arrowMenu} width="35px" alt="Arrow Menu" />
//                   </div>
//                   <h2
//                     className={projectStyles.workUnselect}
//                     onClick={() => setIsActive(2)}
//                   >
//                     FaceFwd
//                   </h2>
//                 </div>
//               </div>
//               {isActive === 2 ? (
//                 <p className={projectStyles.descriptionWork}>
//                   {project.content}
//                 </p>
//               ) : null}
//               <div className={projectStyles.unhighlight}>
//                 <div className={projectStyles.menuUnselect}>
//                   <div className={projectStyles.arrowUnselect}>
//                     <img src={arrowMenu} width="35px" alt="Arrow Menu" />
//                   </div>
//                   <h2
//                     className={projectStyles.workUnselect}
//                     onClick={() => setIsActive(3)}
//                   >
//                     Recordify
//                   </h2>
//                 </div>
//               </div>
//               {isActive === 3 ? (
//                 <p className={projectStyles.descriptionWork}>
//                   {project.content}
//                 </p>
//               ) : null}
//             </div>
