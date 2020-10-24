import React from 'react';
import ReactDOM from 'react-dom';  
import myProjects from './myProjects';
import './Projects.css';


class Projects extends React.Component {

    componentDidMount(){
        document.title = "Chrisi Webster | Projects";

      }

     
    render() {
        return (
          <div>
          <div className="flex-container">
          <div className="pageHead">
            <h1>These are my projects and designs</h1>
            <p className="description">Below is a snapshot of the projects I've worked on recently. </p>
            </div>
            <div><i className="fas fa-laptop-code fa-5x"></i></div>
     
          </div>
           <div class="project-flex" >
              {myProjects.map((project) => {
                return  <div className="card">
                     <h2>{project.title}</h2>
                   <a href={project.url} alt={project.title} title="Link to project" target="_blank"> <img className="logo" alt={project.language} src={project.logo}/></a>
                   <p>Click the logo see the full project</p>
                  </div>
             
              }) }
              </div>
          </div>
        );
    }
}

export default Projects;