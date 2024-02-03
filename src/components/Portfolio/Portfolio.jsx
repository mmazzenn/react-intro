import React, { useEffect, useState } from 'react';
import style from "./Portfolio.module.css"

const Portfolio = () => {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);
  const images = require.context('../../assets/imgs/portfolio', true);
  const imageList = images.keys().map(image => images(image));
  let [img, setImg] = useState("");
  return (
    <div className='portfolio main'>
      <div className="container">
        <h2 className='text-uppercase mb-2 fw-bolder fs-1 text-center'>Portfolio Component</h2>
        <div className={`star-shape ${style.portfolioStar} mb-4 mx-auto text-center`}>
          <span><i className='fa-solid fa-star'></i></span>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div onClick={() => {setImg(imageList[0])}} role='button' className={`${style.item} position-relative overflow-hidden rounded-3`} data-bs-toggle="modal" data-bs-target="#imgModal">
              <div className={`${style.overlay} d-flex justify-content-center align-items-center position-absolute top-0 start-0 bottom-0 end-0`}>
                <i className="text-white fa-solid fa-plus fa-6x text-white"></i>
              </div>
              <img src={imageList[0]} alt="portfolio" className='w-100' />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div onClick={() => {setImg(imageList[1])}} role='button' className={`${style.item} position-relative overflow-hidden rounded-3`} data-bs-toggle="modal" data-bs-target="#imgModal">
              <div className={`${style.overlay} d-flex justify-content-center align-items-center position-absolute top-0 start-0 bottom-0 end-0`}>
                <i className="text-white fa-solid fa-plus fa-6x text-white"></i>
              </div>
              <img src={imageList[1]} alt="portfolio" className='w-100' />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div onClick={() => {setImg(imageList[2])}} role='button' className={`${style.item} position-relative overflow-hidden rounded-3`} data-bs-toggle="modal" data-bs-target="#imgModal">
              <div className={`${style.overlay} d-flex justify-content-center align-items-center position-absolute top-0 start-0 bottom-0 end-0`}>
                <i className="text-white fa-solid fa-plus fa-6x text-white"></i>
              </div>
              <img src={imageList[2]} alt="portfolio" className='w-100' />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div onClick={() => {setImg(imageList[0])}} role='button' className={`${style.item} position-relative overflow-hidden rounded-3`} data-bs-toggle="modal" data-bs-target="#imgModal">
              <div className={`${style.overlay} d-flex justify-content-center align-items-center position-absolute top-0 start-0 bottom-0 end-0`}>
                <i className="text-white fa-solid fa-plus fa-6x text-white"></i>
              </div>
              <img src={imageList[0]} alt="portfolio" className='w-100' />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div onClick={() => {setImg(imageList[1])}} role='button' className={`${style.item} position-relative overflow-hidden rounded-3`} data-bs-toggle="modal" data-bs-target="#imgModal">
              <div className={`${style.overlay} d-flex justify-content-center align-items-center position-absolute top-0 start-0 bottom-0 end-0`}>
                <i className="text-white fa-solid fa-plus fa-6x text-white"></i>
              </div>
              <img src={imageList[1]} alt="portfolio" className='w-100' />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div onClick={() => {setImg(imageList[2])}} role='button' className={`${style.item} position-relative overflow-hidden rounded-3`} data-bs-toggle="modal" data-bs-target="#imgModal">
              <div className={`${style.overlay} d-flex justify-content-center align-items-center position-absolute top-0 start-0 bottom-0 end-0`}>
                <i className="text-white fa-solid fa-plus fa-6x text-white"></i>
              </div>
              <img src={imageList[2]} alt="portfolio" className='w-100' />
            </div>
          </div>
        </div>
      </div>
      
      <div className="modal fade" id="imgModal" tabIndex={-1} aria-labelledby="imgModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <img src={img} className='w-100 rounded-2' alt="" />
        </div>
      </div>

      
    </div>
  );
}

export default Portfolio;
