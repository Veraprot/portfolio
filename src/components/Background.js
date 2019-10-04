import React, {Component} from 'react';
import '../assets/stylesheets/Background.css'

export default class Background extends Component{
    render(){
        return(
            <div className = "background-main-container" id="about">
                <p className = "background-heading">Hi, I'm Vera. Nice to meet you.</p>
                <p className = "background-desc">
                    Currently employed at Flatiron School as an Software Engineering Coach. 
                    I have taught over 100 people how to create web apps with Ruby, Rails, SQL, JavaScript, React and Redux, and given self-made lectures on essential skills like Git, CSS, pair-programming and problem solving. 
                    I'm always looking for new ways to grow my skills as a software engineer and work with brilliant, dedicated people to create something amazing.
                </p>
            </div>
        )
    }
}
