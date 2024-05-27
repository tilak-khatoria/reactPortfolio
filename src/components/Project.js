
import React from 'react'
import './Project.css'
import poster from '../assets/project.jpg'


const Project = () => {
return (
    <div>
        <section id = "project">
            
            <h2 className='projectTitle'>My Project</h2>
            <span className='projectDesc'>Here are my projects</span>
            

            
         <div className ="project-item">
            <div className ="item-details">
                <p className ="P1">Project-1</p>
                <p className="P2">TechStack:- HTML and CSS</p>
            </div>
            <a href="#"><img src= {poster} alt="Project-1" className="projectImg" img/></a>
        </div>
        

        
        <div className="project-item">
            <div className="item-details">
                <p className="P1">Project-2</p>
                <p className="P2">TechStake:- HTML, CSS and Bootstrap</p>
            </div>
            <a href="#"><img src= {poster} alt="Project-2" className="projectImg" img/></a>
        </div>
        

        
        <div className="project-item">
            <div className="item-details">
                <p className="P1">Project-3</p>
                <p className="P2">TechStake:- HTML and CSS</p>
            </div>
            <a href="#"><img src= {poster} alt="Project-3" className="projectImg" img/></a>
        </div>
        

        
        <div className="project-item">
            <div className="item-details">
                <p className="P1">Project-4</p>
                <p className="P2">TechStack:- HTML, CSS and JavaScript</p>
            </div>
            <a href="#"><img src= {poster} alt="Project-4" className="projectImg" img/></a>
        </div>
        

        </section>
    </div>
)
}

export default Project