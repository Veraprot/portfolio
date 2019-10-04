import React, {Component} from 'react';
import '../assets/stylesheets/Work.css'

export default class Work extends Component{
    render(){
        return(
            <div className ="work-main-container" id="projects">
                <p className = "work-heading">My Projects</p>
                <p className = "work-sub-heading">Here are few of my recent projects.</p>

                <div className = "projects-main-container">
                    <div className ="project-container">
                        
                    </div>
                    <div className ="project-container">
                        
                    </div>
                    <div className ="project-container">
                        
                    </div>
                </div>
                <div className = "projects-main-container">
                    <div className ="project-container">
                        
                    </div>
                    <div className ="project-container">
                        
                    </div>
                    <div className ="project-container">
                        
                    </div>
                </div>
            </div>
        )
    }
}