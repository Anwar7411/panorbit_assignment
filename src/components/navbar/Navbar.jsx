import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import "./Navbar.css";

const Navbar = ({ data, page }) => {
  const [open, setOpen] = useState(false);

  //function for opening dialog box for signout
  const handleIconClick = () => {
    setOpen(true);
  };

  return (
    <div className="navbar-container">
      <Grid container row justifyContent={"space-between"}>
        {/* This Grid for displaying with page the user landing in navbar */}
        <Grid item className="navbar-page-title">
          {page}
        </Grid>
        {/* This Grid for displaying the user image and name in navbar */}
        <Grid
          item
          className="navbar-icon-container"
          onClick={handleIconClick}
          style={{ cursor: "pointer" }}
        >
          <img
            src={data?.profilepicture}
            alt="profile"
            className="navbar-icon"
          />
          <p>{data?.name}</p>
        </Grid>
      </Grid>
      {/* Based on condition opening of dialog box for user info with signout button */}
      {open ? <Card data={data} setOpen={setOpen} /> : ""}
    </div>
  );
};

export default Navbar;
