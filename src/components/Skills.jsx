import React from 'react';


const Skills = () => {

  return (
    <div>
      <div className="boxCard shadows page is-mobile">
        <div className="topOfPage">
          <p className="title is-1">Skills</p>
          <div className="fade_rule"></div>
        </div>
        <img src={"headerimage.png"} />
        <div className="skillsCenter">
        <p>Strengths</p>
          <div className="skillsList">
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>PostgreSQL</li>
              <li>Ruby</li>
              <li>Ruby On Rails</li>
              <li>Adobe Photoshop</li>
            </ul>
          </div>
          <br />
          <p>Currently studying</p>
          <div className="studying">
            <ul>
              <li>Python</li>
              <li>React Native</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;