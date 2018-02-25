import React, { Component } from 'react';



 
class AddProject extends Component {

    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }


    static defaultProps = {
        categories: ['web development','web design','Mobile development']
    }


    handleSubmit(e){
        if (this.refs.title.value === ''){
            alert('Title is required')
        }else{
            this.setState({newProject:{
                title:this.refs.title.value,
                category: this.refs.category.value
            }},function(){
               // console.log(this.state);
                this.props.addproject(this.state.newProject)
            })
        }

        console.log(this.refs.title.value);
        e.preventDefault();

    }



    render() { 
        let categoryOption = this.props.categories.map(category=>{
            return <option key={category} value={category}>{category}</option>
        })
    
    
    
    
    
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label><br />
                <input type="text" ref ="title"/>
            </div>
            <div>
            <label>Category</label><br />
            <select ref="category">
                {categoryOption}
            </select>
            </div>
            <br />
            <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;