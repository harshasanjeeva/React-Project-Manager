import React, { Component } from 'react';
import PropTypes from 'prop-types'

 
class ProjectItem extends Component {
    
    deleteProject(id){
        this.props.onDelete(id);
        // console.log("text")
    }

    render() {  
    return (
      <li className="Project">
       <strong> {this.props.project.title}</strong> : {this.props.project.category} <span><a href='#' onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a></span>
      </li>
    );
  }
}
ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
}
export default ProjectItem;
