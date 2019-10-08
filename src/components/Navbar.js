import React from 'react'
import linkedin from '../../src/assets/images/linkedin-logo.png'
import github from '../../src/assets/images/github.png'
import message from '../../src/assets/images/envelope.png'

const Navbar = () => {
  return (
    <div className="nav-links fixed-menu">
      {/* <ul className="nav-icons">
        <li>
          <img src={linkedin} alt="" className = "profile-link-logos"/>
        </li>
        <li>
          <img src={github} alt="" className = "profile-link-logos"/>
        </li>
        <li>
          <img src={message} alt="" className = "profile-link-logos"/>
        </li>
      </ul> */}
      <ul className="links">
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <img src={linkedin} alt="" className = "profile-link-logos"/>
        </li>
        <li>
          <img src={github} alt="" className = "profile-link-logos"/>
        </li>
        <li>
          <img src={message} alt="" className = "profile-link-logos"/>
        </li>
      </ul>
    </div>
  )
}

export default Navbar