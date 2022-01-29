import React, { useState } from "react";
import { useEffect } from "react";
import ManageBlog from "./ManageBlog";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            // fetch("https://quiet-waters-33050.herokuapp.com/blogs")
            //   .then((res) => res.json())
            //   .then((data) => setBlogs(data));
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
          console.log(data.deletedCount);
          if (data.deletedCount) {
            alert("successfully deleted");

            // fetch("https://quiet-waters-33050.herokuapp.com/blogs")
            //   .then((res) => res.json())
            //   .then((data) => setBlogs(data));
            const remaining = blogs.filter((blog) => blog._id !== id);
            setBlogs(remaining);
          } else {
            console.log("nothing found");
          }
        });
    }
  };
  let starNumber = 0;
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
    // <div>
    //   {blogs.map((blog) => (
    //     <div>
    //       <div>
    //         <div className=" mb-5 ms-3 me-3 mt-4 ">
    //           <div className="col h-100">
    //             <div style={{ backgroundColor: "#C2D0C6" }} className="card ">
    //               <img src={blog.image} alt="" className=" w-100   " />

    //               <div className="card-body text-center">
    //                 <div
    //                   style={{ fontSize: 30 }}
    //                   className="card-text text-primary font-weight-bold "
    //                 >
    //                   {blog.name}
    //                   {blog.photoURL ? (
    //                     <img
    //                       style={{ width: 40 }}
    //                       className=" rounded-circle ms-3"
    //                       src={blog.photoURL}
    //                       alt=""
    //                     />
    //                   ) : (
    //                     <img
    //                       style={{ width: 40 }}
    //                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJz0zNSqnwv8ha0697xUZpBKEnE_sT-jnSwA&usqp=CAU"
    //                       alt=""
    //                       className="  d-flex justify-content-center rounded-circle ms-5 p-5"
    //                     />
    //                   )}
    //                 </div>

    //                 <div className="card-text mt-3">
    //                   <span className="text-primary" style={{ fontSize: 20 }}>
    //                     Location:
    //                   </span>{" "}
    //                   {blog.location}{" "}
    //                 </div>

    //                 <div className="card-text mt-3">
    //                   {" "}
    //                   <span className="text-primary" style={{ fontSize: 20 }}>
    //                     Date:
    //                   </span>{" "}
    //                   {blog.date}
    //                 </div>
    //                 <div className="card-text mt-3">
    //                   <span className="text-primary" style={{ fontSize: 20 }}>
    //                     Total Cost:{" "}
    //                   </span>
    //                   ৳{blog.expense}
    //                 </div>
    //                 <div className="card-text mt-3">{blog.description}</div>

    //                 <div className="ms-2">
    //                   {[...Array(5)].map((star, i) => {
    //                     starNumber += 1;
    //                     return (
    //                       <label key={i}>
    //                         <input
    //                           style={{ display: "none" }}
    //                           type="radio"
    //                           name="rating"
    //                           id=""
    //                         />

    //                         <FaStar
    //                           color={
    //                             starNumber <= blog.rating ? "green" : "black"
    //                           }
    //                         />
    //                       </label>
    //                     );
    //                   })}
    //                 </div>

    //                 <h6 className="card-text"> {blog.status}</h6>
    //               </div>
    //               <div className="pb-5">
    //                 <div>
    //                   {blog.status === "pending" && (
    //                     <button
    //                       onClick={() => handleConfirm(blog._id)}
    //                       className="btn"
    //                       style={{ backgroundColor: "indigo", color: "white" }}
    //                     >
    //                       Confirm
    //                     </button>
    //                   )}
    //                 </div>
    //                 <br />
    //                 <div className="d-flex justify-content-between ms-3 me-3">
    //                   <div>
    //                     <Link className="link" to={`blogDetails/${blog._id}`}>
    //                       <button
    //                         type="button"
    //                         className="p-2"
    //                         style={{
    //                           borderRadius: "4px",
    //                           backgroundColor: "skyblue",
    //                           border: "none",
    //                           color: "white",
    //                         }}
    //                       >
    //                         See More...
    //                       </button>
    //                     </Link>
    //                   </div>
    //                   <div>
    //                     <button
    //                       onClick={() => handleDelete(blog._id)}
    //                       className="btn"
    //                       style={{ backgroundColor: "darkred", color: "white" }}
    //                     >
    //                       {" "}
    //                       <i style={{ color: "white" }} class="fa fa-trash"></i>
    //                       <span className="ps-1" style={{ color: "white" }}>
    //                         DELETE
    //                       </span>
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default ManageBlogs;
