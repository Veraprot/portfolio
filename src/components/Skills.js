import React, {Component} from 'react';
import '../assets/stylesheets/Skills.css'
import Ruby from '../assets/images/ruby_1.png'
export default class Skills extends Component {
    render(){
        return(
            <div className = "skills-main-container">
                <div className = "skills-container">
                    <h2>Frontend</h2>
                    <p className = "skill-desc languages">I value simple content structure, clean design patterns and bold colors.</p>
                    <p className ="languages-title">Languages I speak</p>
                    <p className ="languages">HTML, CSS, SCSS, JavaScript, React + Redux, Angular</p>
                </div>
                <div className = "skills-container">
                    <h2>Backend</h2>
                    <p className = "skill-desc languages">I value simple content structure, clean design patterns and bold colors.</p>
                    <p className ="languages-title">Languages I speak</p>
                    <p className ="languages">NodeJS, Express, Ruby, Ruby on Rails, Sinatra</p>
                </div>
                <div className = "skills-container">
                    <h2>Other</h2>
                    <p className = "skill-desc languages">I value simple content structure, clean design patterns and bold colors.</p>
                    <p className ="languages-title">Tools I've used</p>
                    <p className ="languages">Jira, Confluence, GitHub, AWS, MongoDB</p>
                </div>
            </div>
        )
    }
}