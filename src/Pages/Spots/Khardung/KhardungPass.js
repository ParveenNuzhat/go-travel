import React from "react";

const KhardungPass = (props) => {
  const { name, image, description } = props.spot;
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <img src={image} alt="" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default KhardungPass;
