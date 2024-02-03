import React from 'react';
import style from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className= {`${style.footer} text-center text-white`}>
      <div className= {`${style.mainFooter}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="location">
                <h3>Location</h3>
                <p>2215 John Daniel Drive</p>
                <p className="mb-0">Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3>Around The Web</h3>
              <ul className= {`${style.socialLinks} list-unstyled d-flex justify-content-center gap-3`}>
                <li><i className='fa-brands fa-facebook'></i></li>
                <li><i className='fa-brands fa-twitter'></i></li>
                <li><i className='fa-brands fa-linkedin-in'></i></li>
                <li><i className='fa-solid fa-globe'></i></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3>About Freelancer</h3>
              <p className="mb-0">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.copyright} p-4`}>
        <p className='mb-0'>Copyright &copy; Your Website 2021</p>
      </div>
    </footer>
  );
}

export default Footer;
