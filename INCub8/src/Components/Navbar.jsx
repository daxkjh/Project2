import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import { Button, Menu, MenuItem, Typography, Paper } from "@mui/material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClickNav(event) {
    // if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
  //   }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div
      className="Navbar"
      style={{ backgroundColor: "black", height: "90px", position:"fixed" }}
    >
      <Link to={"/"}>
        <img className="Logo" src="https://i.imgur.com/a6JQfBz.png?1" />
      </Link>
      <Link className="nav" to={"/"}>
        <Typography
          variant="h6"
          sx={{
            "&:hover": {
              color: "gold",
            },
          }}
        >
          Home
        </Typography>
      </Link>
      <div className="nav">
        <Typography
          variant="h6"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClickNav}
          onMouseOver={handleClickNav}
          sx={{
            color: "white"
          }}
        >
          Get Started
        </Typography>
  
        <Menu
          id="simple-menu"
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          // open={open}
          onClose={handleClose}
          // MenuListProps={{ onMouseLeave: handleClose }}
          sx={{"& .MuiPaper-root":{
            backgroundColor:"black",
            color:"white",
            
          }}}
        >
           <Paper
            
          >
            <MenuItem
              component={Link}
              to="/getstarted/step1"
              onClick={handleClose}
              sx={{
                fontSize:"large",
                "&:hover": {
                  color: "gold",
                },
              }}
            >
              Business Name Checker
            </MenuItem>
            <MenuItem
              component={Link}
              to="/getstarted/step2a"
              onClick={handleClose}
              sx={{
                fontSize:"large",
                "&:hover": {
                  color: "gold",
                },
              }}
            >
              Menu Selection
            </MenuItem>
            <MenuItem
              component={Link}
              to="/getstarted/summary"
              onClick={handleClose}
              sx={{
                fontSize:"large",
                "&:hover": {
                  color: "gold",
                },
              }}
            >
              Summary
            </MenuItem>
            </Paper>
        </Menu>
       
      </div>
      {/* <Link to={"/getstarted/step1"}>
        <div className="nav"><h1>Getting Started</h1></div>
      </Link> */}
      {/* <Link className="nav" to={"/plans"}>
        <Typography variant="h6"  sx={{
            "&:hover": {
              color: "gold",
            },
          }}>Plan</Typography>
      </Link> */}
      <Link className="nav" to={"/contacts"}>
        <Typography variant="h6"  sx={{
            "&:hover": {
              color: "gold",
            },
          }}>Contact Us</Typography>
      </Link>
    </div>
  );
};
export default Navbar;
