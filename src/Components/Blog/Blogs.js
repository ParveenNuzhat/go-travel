import React, { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import Blog from "./Blog";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetch("https://quiet-waters-33050.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  });

  // Set Current Page

  const lastPost = currentPage * pageSize;
  const firstPost = lastPost - pageSize;
  const currentBlogs = blogs.slice(firstPost, lastPost);

  const pageIndex = [];
  const totalPage = Math.ceil(blogs.length / pageSize) + 1;
  for (let i = 1; i < totalPage; i++) {
    pageIndex.push(i);
  }

  const handleChangePageSize = (e) => {
    setPageSize(e.target.value);
  };

  const handlePaginate = (index) => {
    setCurrentPage(index);
  };

  return (
    <div>
      <h3 className=" mt-5 text-center">Blog Post</h3>
      <select onChange={handleChangePageSize}>
        <option value={5}>5</option>
        <option selected value={10}>
          10
        </option>
        <option value={15}>15</option>
      </select>
      <div className="container">
        <Row md={3} className="g-4">
          {currentBlogs.map((blog) => (
            <Blog key={blog._id} blog={blog}></Blog>
          ))}
        </Row>
      </div>

      <div className="blogs-pagination">
        <div className="pagination-buttons">
          {pageIndex.map((index) => (
            <button
              className={index === currentPage && "active-page-btn"}
              onClick={() => handlePaginate(index)}
            >
              {index}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
