import React, { Component } from 'react';
import Projects from './Components/Projects';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';
import AddProject from './Components/AddProject';
import PropTypes from 'prop-types';
import Todos from './Components/Todos'


class App extends Component {

  constructor(){
    super();
    this.state={
      projects: []
    }
  }

getProjects(){
  this.setState({
    projects:      [{
      id: uuid.v4(),
      title:'Business Development',
      category:'Web design for business'
    },
    {
      id: uuid.v4(),
      title:'Web Development',
      category:'Web design'
    },
    {
      id: uuid.v4(),
      title:'Teaching Assistant',
      category:'Tutoring'
    }]  
  })
}
  getTodos(){
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos:data},function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr,status,err){
        console.log(err)
      }
    })
  }
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }


    componentDidMount(){
      this.getTodos();
    }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project)
    this.setState({projects:projects})
    console.log(project)
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects})
  }


  render() {
    return (
      <div className="App">
        <AddProject addproject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
         <hr />
         <Todos todos = {this.state.todos}/>    
      </div>
    );
  }
}

export default App;
