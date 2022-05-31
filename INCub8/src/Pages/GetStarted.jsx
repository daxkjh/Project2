import { useState } from "react";
import { Outlet } from "react-router-dom";
import { TextField } from "@mui/material";
import BizCheck from "../Components/BizCheck";
import DomainCheck from "../Components/DomainCheck";
import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/ProgressBar";
import { Button } from "@mui/material";

const GetStarted = () => {
  const [bizName, setBizName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setBizName(event.target.bizname.value);
    console.log("test", event.target.bizname.value)
    console.log(bizName);
  };

  return (
    <div className="GetStarted">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default GetStarted;
