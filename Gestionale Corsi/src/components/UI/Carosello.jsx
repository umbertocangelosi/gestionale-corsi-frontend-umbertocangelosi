import React from "react";


export const Carosello = () => {
  return (
    <div
      className="container"
      style={{
        width: "100%", 
        height: "300px", 
        margin: "5% auto", 
      }}
    >
      <div
        id="carouselExampleInterval"
        className="carousel slide h-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100" data-bs-interval={2000}>
            <img
              src="/src/assets/img1.png"
              className="d-block w-100 h-100"
              alt="..."
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item h-100" data-bs-interval={2000}>
            <img
              src="/src/assets/img2.png"
              className="d-block w-100 h-100"
              alt="..."
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item h-100" data-bs-interval={2000}>
            <img
              src="/src/assets/img3.png"
              className="d-block w-100 h-100"
              alt="..."
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
