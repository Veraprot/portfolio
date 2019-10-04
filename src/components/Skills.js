import React, {Component} from 'react';
import '../assets/stylesheets/Skills.css'
import Ruby from '../assets/images/ruby_1.png'
export default class Skills extends Component {
    render(){
        return(
            <div className = "skills-main-container">
                <div className = "skills-container">
                    <img alt ="" className = "skill-img" src = "https://cdn4.iconfinder.com/data/icons/technology-83/1000/app_frontend_end_front_front-end_front_end_development-512.png" ></img>
                    <h2>Frontend</h2>
                    <p className = "skill-desc languages">I value simple content structure, clean design patterns and bold colors.</p>
                    <p className ="languages-title">Languages I speak</p>
                    <p className ="languages">HTML <br/> CSS <br/> SCSS <br/>JavaScript<br/> React + Redux<br/> Angular</p>
                </div>
                <div className = "skills-container">
                    <img alt="" className = "skill-img" src ="https://static.thenounproject.com/png/995861-200.png"></img>
                    <h2>Backend</h2>
                    <p className = "skill-desc languages">I value simple content structure, clean design patterns and bold colors.</p>
                    <p className ="languages-title">Languages I speak</p>
                    <p className ="languages">NodeJS<br/> Express<br/> Ruby<br/> Ruby on Rails<br/> Sinatra</p>
                </div>
                <div className = "skills-container">
                    <img alt="" className = "skill-img" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuBG9fTb7D8PhZHsMjCqNKJPGUXA31B-1oA2QjEngs4U0O29BL"></img>
                    <h2>Other</h2>
                    <p className = "skill-desc languages">I value simple content structure, clean design patterns and bold colors.</p>
                    <p className ="languages-title">Tools I've used</p>
                    <p className ="languages">Jira<br/> Confluence<br/> GitHub<br/> AWS<br/> MongoDB</p>
                </div>
            </div>
        )
    }
}