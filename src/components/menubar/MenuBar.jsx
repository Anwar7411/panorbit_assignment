import React from "react";
import "./MenuBar.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MenuBar = ({ page }) => {
  return (
    <div className="menubar-main-container">
      {/* component for user to navigate different pages with Link */}
      <div className="menubar-container">
        <div className="menubar-with-arrow-icon">
        <Link
          to="/user"
          className="menubar-route-text"
          style={page == "Profile" ? { color: "white" } : {}}
        >
          Profile
        </Link>
      {page== "Profile" ? <ArrowForwardIosIcon  sx={{color:"white",marginTop:"3px"}}/> : ""}
        </div>
        <hr className="menubar-horizontal-line" />
        <div className="menubar-with-arrow-icon">
        <Link
          to="/posts"
          className="menubar-route-text"
          style={page == "Posts" ? { color: "white" } : {}}
        >
          Posts
        </Link>
        {page== "Posts" ? <ArrowForwardIosIcon  sx={{color:"white",marginTop:"3px"}}/> : ""}
        </div>
        <hr className="menubar-horizontal-line" />
        <div className="menubar-with-arrow-icon">
        <Link
          to="/gallery"
          className="menubar-route-text"
          style={page == "Gallery" ? { color: "white" } : {}}
        >
          Gallery
        </Link>
        {page== "Gallery" ? <ArrowForwardIosIcon  sx={{color:"white",marginTop:"3px"}}/> : ""}
        </div>
        <hr className="menubar-horizontal-line" />
        <div className="menubar-with-arrow-icon">
        <Link
          to="/todo"
          className="menubar-route-text"
          style={page == "Todo" ? { color: "white" } : {}}
        >
          Todo
        </Link>
        {page== "Todo" ? <ArrowForwardIosIcon  sx={{color:"white",marginTop:"3px"}}/> : ""}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
