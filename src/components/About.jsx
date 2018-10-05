import React from 'react';


const About = () => {
  return (
    <div className="boxCard shadows is-desktop">
    <div className="topOfPage">
      <p className="title is-1">About</p>
      <div className="fade_rule"></div>
      </div>
      <div className="columns is-desktop">
        <div className="column">
          <img className="photo" src={"photo.png"}/>
        </div>
        <div className="column bioCol">
          <p className="bio">
            My name is Eren Altaygil and I am a full-stack web developer that is
            is based, born and raised in Brooklyn, NY.
            <br/>
            <br/>
            My hobbies include sports such as football, baseball, basketball, and 
            I am an avid fisherman. 
            <br/>
            <br/>
            I have always had an interest in web development from back in the days
            of Maxpages & Angelfire and have now decided to make this my career path. 
            <br/>
            <br/>
            I attended New York City College of Technology to learn Advertising Design
            with skills in programs such as Adobe Photoshop, Final Cut Pro and etc..
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;