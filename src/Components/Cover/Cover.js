import React from "react";
import { Carousel } from "react-bootstrap";
import "./Cover.css";
import image1 from "../../assets/Images/banner_1.jpg";
import image2 from "../../assets/Images/banner_2.jpg";
import image3 from "../../assets/Images/banner_3.jpg";

const Cover = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item className="item">
          <img
            className="carousel-img d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="caption">
            <div>
              <h3 className="cover-title">Leh&Ladakh Travel Co.</h3>
              <p className="cover-para">A Complete Tour Package</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-img d-block w-100"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption className="caption">
            <div>
              <h3 className="cover-title">Ready to Explore?</h3>
              <p className="cover-para"></p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-img d-block w-100"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption className="caption">
            <div>
              <h3 className="cover-title">Enjoy Our Service</h3>
              <p className="cover-para">FIND YOURSELF IN THE NATURE</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Cover;
