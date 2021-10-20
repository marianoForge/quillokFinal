import React from 'react';
import works from '../images/works_img_1.png';
import { projects } from '../content/projects';

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
        <div>
          <h2>{project.title}</h2>
          <p>{project.content}</p>
          <div>
            <img src={img2()} alt={project.title}></img>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <section>
      <div>See our Works</div>
      <div>{renderedProjects}</div>
    </section>
  );
};

export default Projects;
