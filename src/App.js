import React from 'react';
import './assets/stylesheets/app.scss';
// import tree from '../src/assets/images/tree-city.png'
// import profile from '../src/assets/images/profile.jpg'
import Navbar from './components/Navbar';
import Skills from './components/Skills'
import Background from './components/Background';
import Work from './components/Work';

function App() {
  return (
    <>
      <Navbar/>
      <div className="app-container">
        <div className="hero-container intro-page">
          <p className="about-me-content">
            Artist, Full Stack Web Developer & Software Engineering Coach <br/>  
          </p>
          <p className="name-title">Hi, I'm <span className = "make-bold">Vera Protopopova</span> and I'm on a mission to change the world.</p>
          <button class="download-resume-btn">Resume</button>
        </div>
        <Background/>
        <Skills/>
        <Work/>
      </div>
    </>
  );
}

export default App;
