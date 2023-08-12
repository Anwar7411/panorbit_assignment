import React, { useEffect, useState } from "react";
import MenuBar from "../components/menubar/MenuBar";
import Navbar from "../components/navbar/Navbar";

const Todo = () => {
  const [data, setData] = useState({});

  //useEffect for getting single user which profile need to be view
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setData(user);
  }, []);
  return (
    <div className="profile-main-container">
      {/* rendering side menubar component in following div */}
      <div className="profile-menubar-content">
        <MenuBar page={"Todo"} />
      </div>
      {/* rendering navbar component in following div */}
      <div className="profile-nav-content">
        <Navbar data={data} page={"Todo"} />
        <hr className="bottom-nav-hr-line" />
        {/* displaying comming soon page with the following div */}
        <div className="comming-soon-div">
          <img
            src="https://phanrangkitesurfingholidays.com/wp-content/uploads/2017/06/Coming-Soon.png"
            alt="cooming soon"
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
