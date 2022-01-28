import React, { useEffect, useState } from "react";
import ThikseyMona from "./ThikseyMona";

const Thiksey = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch(`https://quiet-waters-33050.herokuapp.com/spots`)
      .then((res) => res.json())
      .then((data) => setSpots(data.slice(2, 3)));
  }, []);

  return (
    <div>
      {spots.map((thiksey) => (
        <ThikseyMona key={thiksey._id} thiksey={thiksey}></ThikseyMona>
      ))}
    </div>
  );
};

export default Thiksey;
