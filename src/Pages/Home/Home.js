import React from "react";
import Blogs from "../../Components/Blog/Blogs";
import Cover from "../../Components/Cover/Cover";

const Home = () => {
  return (
    <div>
      <main>
        <Cover></Cover>
        <Blogs></Blogs>
      </main>
    </div>
  );
};

export default Home;
