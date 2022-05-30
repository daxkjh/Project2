import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="homeimage1">
        <img
          src="https://i.imgur.com/05Hw3If.jpg"
          style={{ borderRadius: "50px" }}
        />
        <div className="image1text">
          <h1>Imagine having your own business</h1>
          <p>
            Aspiring Entrepreneurs faces the same problem : The hardest part of
            having a million dollar business, is arguably making the first
            dollar.{" "}
          </p>
          <Link to={"/getstarted"}>
            <div className="homestartbutton">Get Started</div>
          </Link>
        </div>
      </div>
      <div className="homeimage2">
        <video loop autoPlay>
          <source src="https://i.imgur.com/A9Tmjn8.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
export default Home;
