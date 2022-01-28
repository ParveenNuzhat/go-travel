import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <Row
        className="mx-auto my-5 py-4"
        style={{ width: "80%", color: "white" }}
      >
        <Col md={3}>
          <div className="">
            <h4 className="mb-4">Leh&Ladakh Travel Co.</h4>
            <p>
              8, Doctor Lane, Chandra House <br /> (2nd Floor), Gole Market,{" "}
              <br /> New Delhi - 110 001 (INDIA)
            </p>
          </div>
        </Col>
        <Col md={3}>
          <div className="">
            <h4 className="mb-4">Our Services</h4>
            <p>Hotel Booking</p>
            <p>Car Hire</p>
            <p>Tour Packages</p>
            <p>Blog</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="">
            <h4 className="mb-4">Quick Links</h4>
            <p>About us</p>
            <p>Contact us</p>
            <p>Enquiry</p>
            <p>FAQs</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="">
            <h4 className="mb-4">Get Updates & More </h4>
            <p>Be the first to receive updates and special deals</p>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email address"
            />
            <br />
            <button type="submit">Subscribe</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
