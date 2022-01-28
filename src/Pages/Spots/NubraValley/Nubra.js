import React from "react";

const Nubra = (props) => {
  const { name, image, description } = props.spot;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default Nubra;
