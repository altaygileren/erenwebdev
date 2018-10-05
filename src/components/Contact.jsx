import React from 'react';


const Contact = () => {
  return (
    <div className="is-flex-mobile is-mobile">
      <div className="boxCard shadows page">
        <div>
          <p className="title is-1">Contact</p>
          <div className="fade_rule"></div>
        </div>
        <ul className="is-1 contactLinks">
          <li><a href="https://www.linkedin.com/in/altaygileren"><i class="fab fa-linkedin iconColor zoom"></i></a></li>
          <li><a href="mailto:erenaltaygil@gmail.com"><i class="far fa-envelope iconColor zoom"></i></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact;