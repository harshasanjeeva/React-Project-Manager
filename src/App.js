import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';
import AddProject from './Components/AddProject';

class App extends Component {

  constructor(){
    super();
    this.state={
      projects: []
    }
  }

  componentWillMount(){
    this.setState({
      projects:      [{
        title:'Business Development',
        category:'Web design for business'
      },
      {
        title:'Web Development',
        category:'Web design'
      },
      {
        title:'Teaching Assistant',
        category:'Tutoring'
      }]  
    })
  }


  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project)
    this.setState({projects:projects})
    console.log(project)
  }
  render() {
    return (
      <div className="App">
        <AddProject addproject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
