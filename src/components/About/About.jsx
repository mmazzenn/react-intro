import React, { useEffect } from 'react';
import style from "./About.module.css"

const About = () => {
  useEffect(() => {
    document.title = 'About';
  }, []);
  return (
    <div className={`${style.about} main d-flex justify-content-center align-items-center text-white`}>
      <div className="container">
        <h2 className='text-uppercase mb-3 fs-1 fw-bolder text-center'>About Component</h2>
        <div className={`star-shape ${style.aboutStar} mb-4 mx-auto text-center`}>
          <span><i className='fa-solid fa-star'></i></span>
        </div>
        <div className="row px-5">
          <div className="col-md-6 ps-md-5">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6 pe-md-5">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
