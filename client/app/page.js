import React from "react";
import Banner1 from "./components/Banner1";
import Topics from "./components/Topics";
import Blogs from "./components/Blogs";
import NewsLetter from "./components/NewsLetter";
const Home = () => {
  return (
    <div className="p-5">
      <Banner1 />
      <Topics />
      <Blogs />
      <NewsLetter />
    </div>
  );
};

export default Home;
