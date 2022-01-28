import React from "react";

const PangongLake = (props) => {
  const { name, image, description } = props.pangong;

  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default PangongLake;
