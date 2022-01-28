import React, { useState } from "react";
import { useEffect } from "react";
import ManageBlog from "./ManageBlog";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://quiet-waters-33050.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleConfirm = (id) => {
    const proceed = window.confirm("Are you sure that you want to approve?");
    if (proceed) {
      const url = `https://quiet-waters-33050.herokuapp.com/updateStatus/${id}`;
      fetch(url, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            alert("successfully approved");
            fetch("https://quiet-waters-33050.herokuapp.com/blogs")
              .then((res) => res.json())
              .then((data) => setBlogs(data));
          }
        });
    }
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure that you want to delete?");
    if (proceed) {
      const url = `https://quiet-waters-33050.herokuapp.com/blogs/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          if (data.deletedCount > 0) {
            alert("successfully deleted");
            const remaining = blogs.filter((product) => product._id !== id);
            setBlogs(remaining);
          }
        });
    }
  };

  return (
    <div>
      {
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-1">
          {blogs.map((blog) => (
            <ManageBlog
              key={blog._id}
              blog={blog}
              handleConfirm={handleConfirm}
              handleDelete={handleDelete}
            ></ManageBlog>
          ))}
        </div>
      }
    </div>
  );
};

export default ManageBlogs;
