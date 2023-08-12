import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/Action";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import "./Home.css";

const Home = () => {
  //getting state value from store using useSelector
  const userData = useSelector((store) => store.userData);
  const isLoading = useSelector((store)=>store.isloading)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //useEffect for calling userData Api for fetching data through redux
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  //this function for navigating to a perticular clicked user profile
  const handleUserClick = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/user");
  };

    //if data fetching loader will be displayed
  if(isLoading){
    return <CircularProgress sx={{marginTop:"200px"}}/>
  }

  return (
    <div className="home-main-container">
      <div className="home-container">
        <div className="home-heading">Select An Account</div>
        <div className="home-user-section">
          {userData.length > 0 &&
            userData.map((user) => (
              <div onClick={() => handleUserClick(user)} key={user.id}>
                <div className="home-user-detail">
                  <img
                    src={user.profilepicture}
                    alt="profile"
                    className="home-user-icon"
                  />
                  <p>{user.name}</p>
                </div>
                <hr />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
