import React from 'react';
import { NavLink } from 'react-router-dom';
import Typing from 'react-typing-animation';

const Header = () => {
  return (
    <div className="hero has-background-black">
      <div className="textdiv">
        <Typing className="headerTyping" speed={50}>
          Hi!
          <br />
          <Typing.Delay ms={1000} />
            My name is Eren Altaygil and I am a Web Developer based in NYC.
        </Typing>
      </div>
      <div className="imagediv">
        <img className="headerImage" src={"skylinesun.png"} />
      </div>
      <div className="sticky">
        <NavLink className="space link" to="/">About</NavLink>
        <NavLink className="space link" to="/portfolio">Portfolio</NavLink>
        <NavLink className="space link" to="/skills">Skills</NavLink>
        <NavLink className="space link" to="/contact">Contact</NavLink>
      </div>
    </div>
  )
};

export default Header;