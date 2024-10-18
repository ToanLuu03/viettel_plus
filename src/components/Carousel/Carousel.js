import React from 'react';
import ca1 from '../../assets/ca1.jpg'; // Your image imports
import ca2 from '../../assets/ca2.png';
import ca3 from '../../assets/ca3.jpg';

function Carousel() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide z-0" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ca1} className="d-block w-100" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src={ca2} className="d-block w-100" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src={ca3} className="d-block w-100" alt="Third slide" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
