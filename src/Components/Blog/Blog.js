import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./Blog.css";

const Blog = (props) => {
  const { _id, name, date, time, location, details, image, rating, status } =
    props.blog;
  let starNumber = 0;

  return (
    <div>
      <Col>
        {/* {status === "Approved" && ( */}
        <Card
          style={{
            width: "23rem",
            height: "500px",
            minHeight: "500px",
          }}
          className="mx-auto border-0"
        >
          <Card.Img
            variant="top"
            src={image}
            className=""
            style={{ height: "220px", minHeight: "220px" }}
          />

          <Card.Body className="text-center">
            <Card.Title
              className=""
              style={{
                fontSize: "21px",
                fontFamily: "Merienda,cursive",
                color: "brown",
              }}
            >
              {name}
            </Card.Title>
            <div className="ms-2">
              {[...Array(5)].map((star, i) => {
                starNumber += 1;
                return (
                  <label key={i}>
                    <input
                      style={{ display: "none" }}
                      type="radio"
                      name="rating"
                      id=""
                    />
                    <FaStar color={starNumber <= rating ? "green" : "black"} />
                  </label>
                );
              })}
            </div>
            <Card.Text className="">{date}</Card.Text>
            <Card.Text className="blog-text">{details}</Card.Text>
          </Card.Body>
          <div className="text-center">
            <Link to={`/blogDetails/${_id}`}>
              <Button
                className="border-0"
                style={{ backgroundColor: "skyblue", fontWeight: "600" }}
              >
                See More
              </Button>
            </Link>
          </div>
        </Card>
        {/* )} */}
      </Col>
    </div>
  );
};

export default Blog;
