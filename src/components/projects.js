import React, { Component } from 'react';
import ProjectItem from './projectItem'

class Projects extends Component {
  render() {
    let projectItems
    if(this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem key={project.title} project={project} />
        )
      })
    }
    return (
      <div className="Project">
        <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

export default Projects;
