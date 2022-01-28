import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import "./UserBlog.css";

const UserBlog = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://quiet-waters-33050.herokuapp.com/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Blog Added");
          reset();
        }
      });
  };
  return (
    <div className="booking">
      <h2 className="text-center mb-4" style={{ color: "orange" }}>
        Write Your Blog
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          defaultValue={user.displayName}
          placeholder=""
        />
        <input
          {...register("email", { required: true })}
          defaultValue={user.email}
          placeholder=""
        />
        <input
          type="text"
          {...register("location", { required: true })}
          placeholder="Location"
        />
        <input
          type="text"
          {...register("date", { required: true })}
          placeholder="Date"
        />
        <input
          type="number"
          {...register("cost", { required: true })}
          placeholder="Cost"
        />
        <input
          type="text"
          {...register("details", { required: true })}
          placeholder="Details"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserBlog;
