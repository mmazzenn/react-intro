import React, { useEffect } from 'react';
import avatar from "../../assets/imgs/avataaars.svg"
import style from "./Home.module.css";

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <div className={`${style.home} main d-flex justify-content-center align-items-center text-white text-center`}>
      <div className="content">
        <img src={avatar} alt="Avatar" className='w-75 mb-4' />
        <div className="homeInfo">
          <p className="text-uppercase mb-2 fw-bolder fs-1">Start Framework</p>
          <div className="star-shape mb-3">
            <span><i className='fa-solid fa-star'></i></span>
          </div>
          <div className="skillsInfo">Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
