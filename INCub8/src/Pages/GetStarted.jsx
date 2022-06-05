import { useState } from "react";
import { Outlet } from "react-router-dom";
import { TextField } from "@mui/material";
import BizCheck from "../Components/BizCheck";
import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/ProgressBar";
import { Button } from "@mui/material";

const GetStarted = () => {
  



  return (
    <div className="GetStarted">
      <Navbar />
      <div className="belowNav">
      <Outlet />
      </div>
    </div>
  );
};
export default GetStarted;
