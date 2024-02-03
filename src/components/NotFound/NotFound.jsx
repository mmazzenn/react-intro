import React, { useEffect } from 'react';
import style from "./NotFound.module.css"

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page not found';
  }, []);
  return (
    <div className='error main d-flex justify-content-center align-items-center flex-column'>
      <h2 className='text-uppercase mb-3 fs-1 fw-bolder text-center'>Page Not Found</h2>
      <div className={`star-shape ${style.error} mb-4 mx-auto text-center`}>
        <span><i className='fa-solid fa-star'></i></span>
      </div>
    </div>
  );
}

export default NotFound;
