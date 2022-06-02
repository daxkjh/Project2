import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Step2 = () => {
  return (
    <div className="menuSelectContainer">
      <Button
        variant="text"
        size="large"
        component={Link}
        to="/getstarted/step1"
      >
        {"<"} Previous Step
      </Button>
      <h1>Step 2 : Deciding on Menu</h1>
      <div style={{ width: "100%", position: "relative" }}>
        <video
          className="homevideo"
          loop
          autoPlay
          muted
          style={{ width: "35%", zIndex: "-1" }}
        >
          <source src="https://i.imgur.com/yRJYwYj.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            width: "100%",
            height: "120%",
            position: "absolute",
            top: "0",
            backgroundColor: "rgba(1, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              textAlign: "left",
              position: "absolute",
              left: "40%",
              top: "3%",
            }}
          >
            <h1 style={{ width: "75%", color: "white", marginBottom: "7%" }}>
              "A Restaurant is only as Good as its Menu" <i>-plato</i>
            </h1>
            <h3 className="image1text" style={{ lineHeight: "250%" }}>
              Now that you're ready to embark on your entrepreneurial journey,
              its time to plan what cuisine you would like to serve. Remember to
              save your selected cuisines so you can refer to it while hiring
              chefs
            </h3>
            <h3 className="image1text" style={{ lineHeight: "250%" }}>
              If you are planning to start a small cafe, diner, or
              all-day-breakfast eatery, its is recommended to start with menu
              items that has less than 8 ingredients. For more professional
              advice, sign up for our{" "}
              <strong><Link to={"/plans"}>PREMIUM MEMBERSHIP</Link></strong> and get exclusive
              newsletters & masterclasses
            </h3>
            <Button
              style={{
                marginLeft:"5%",
                borderRadius: 20,
                color: "black",
                backgroundColor: "gold",
                padding: "12px 28px",
                fontSize: "18px",
              }}
              variant="outlined"
              size="large"
              component={Link}
              to="/getstarted/step2a"
            >
              Begin Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step2;
