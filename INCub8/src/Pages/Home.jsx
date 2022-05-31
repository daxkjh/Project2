import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="homeimage1">
        <video className="homevideo" loop autoPlay muted>
          <source src="https://i.imgur.com/A9Tmjn8.mp4" type="video/mp4" />
        </video>
        <div className="image1textcontainer">
        <h1 className="image1text">Imagine having your own business</h1>
        <h3 className="image1text">
          Aspiring Entrepreneurs faces the same problem : The hardest part of
          having a million dollar business, is arguably making the first dollar.
          Starting a Food & Beverage Business is usually the shortest path towards having your own branding.
          At Incubegg, We work with aspiring Entrepreneurs to embark on their journey towards their dream.
        </h3>
        <Link to={"/getstarted"}>
          <div className="homestartbutton">Get Started</div>
        </Link>
      </div>
      </div>

      
    </div>
  );
};
export default Home;
