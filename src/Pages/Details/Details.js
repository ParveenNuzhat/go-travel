import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Details = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(`https://quiet-waters-33050.herokuapp.com/blogDetails/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div>
      <h4>Details</h4>
      <img src={blog.image} alt="" />
      <h3>{blog.name}</h3>
      <p>{blog.date}</p>
      <p>{blog.time}</p>
      <p>{blog.location}</p>
      <p>{blog.description}</p>
      <p>{blog.expense}</p>
      <p>{blog.rating}</p>
    </div>
  );
};

export default Details;
