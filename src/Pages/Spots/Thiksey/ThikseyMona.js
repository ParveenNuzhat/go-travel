import React from "react";

const ThikseyMona = (props) => {
  const { name, image, description } = props.thiksey;

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <img src={image} alt="" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ThikseyMona;
