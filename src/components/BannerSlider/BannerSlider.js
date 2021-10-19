import React from 'react';
import slider1 from '../../images/home_slider1.jpg';
import slider2 from '../../images/home_slider2.jpg';
import slider3 from '../../images/home_slider3.jpg';
import './BannerSlider.css';

const BannerSlider = () => {
    return (
      <div>
        <div id="carouselExampleCaptions" className="carousel slide mb-5" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-dark">Coronary Artery Disease</h5>
              <p className="text-dark">Blockage in the coronary arteries is called coronary artery disease—a condition in which the heart muscles don't get enough blood and oxygen.</p>
              <div className="btn btn-info fw-bold">See more...</div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-dark">Silent Ischemia</h5>
              <p className="text-dark">A form of coronary artery disease in which the blood flow to the heart muscle is reduced but produces very little pain or symptoms.</p>
              <div className="btn btn-info fw-bold">See more...</div>
            </div>
          </div>
          <div className="carousel-item">
          <img src={slider3} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-dark">Angina</h5>
            <p className="text-dark">Angina is discomfort or pain that occurs when your heart is not getting enough oxygen and nutrients. Angina may be caused by a narrowing of the arteries or muscle spasms in the coronary arteries.</p>
            <div className="btn btn-info fw-bold">See more...</div>
          </div>
          </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
};

export default BannerSlider;