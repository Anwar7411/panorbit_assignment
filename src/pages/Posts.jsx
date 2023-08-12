import React, { useEffect, useState } from "react";
import MenuBar from "../components/menubar/MenuBar";
import Navbar from "../components/navbar/Navbar";

const Posts = () => {
  const [data, setData] = useState({});

  //useEffect for getting single user which profile need to be view
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setData(user);
  }, []);
  return (
    <div className="profile-main-container">
      <div className="profile-menubar-content">
        <MenuBar page={"Posts"} />
      </div>
      <div className="profile-nav-content">
        <Navbar data={data} page={"Posts"} />
        <hr className="bottom-nav-hr-line" />
        <div className="comming-soon-div" >
          <img src="https://phanrangkitesurfingholidays.com/wp-content/uploads/2017/06/Coming-Soon.png" alt="cooming soon" />
        </div>
      </div>
    </div>
  );
};

export default Posts;
