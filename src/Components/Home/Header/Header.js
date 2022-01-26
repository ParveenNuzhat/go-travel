import React from "react";
import { Carousel } from "react-bootstrap";
import "./Header.css";
import image1 from "../../../Images/banner_1.jpg";
import image2 from "../../../Images/banner_2.jpg";
import image3 from "../../../Images/banner_3.jpg";

const Header = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item className="item">
          <img
            className="carousel-img d-block"
            src={image1}
            alt="First slide"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption className="caption">
            <h3>Kolkata</h3>
            <p>INTELLECTUAL and ARTISTIC CAPITAL OF INDIA</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-img d-block w-100"
            src={image2}
            alt="Second slide"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption className="caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-img d-block"
            src={image3}
            alt="Third slide"
            style={{
              height: "100vh",
              // minHeight: "565px",
              objectPosition: "bottom center",
            }}
          />
          <Carousel.Caption className="caption">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
