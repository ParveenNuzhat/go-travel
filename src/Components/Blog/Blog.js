import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Blog = (props) => {
  const { _id, name, date, location, image, rating } = props.blog;
  let starNumber = 0;

  return (
    <div>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{location}</p>
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
      <div className="">
        <Link to={`/blogDetails/${_id}`}>
          <Button
            className="border-0"
            style={{ backgroundColor: "skyblue", fontWeight: "600" }}
          >
            See More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
