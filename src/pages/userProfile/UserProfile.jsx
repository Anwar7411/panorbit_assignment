import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UserProfile.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import MenuBar from "../../components/menubar/MenuBar";
import Navbar from "../../components/navbar/Navbar";
import Map from "../../components/map/Map";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getUserData } from "../../redux/Action";
import CircularProgress from "@mui/material/CircularProgress";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const UserProfile = () => {
  const [data, setData] = useState({});
  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector((store) => store.userData);
  const isLoading = useSelector((store) => store.isloading);

  //useEffect for getting single user which profile need to be view
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setData(user);
  }, []);

  //useEffect for if data loss data can be fetch by api using redux
  useEffect(() => {
    if (userData.length == 0) {
      dispatch(getUserData());
    }
  }, [userData]);

  //if data fetching loader will be displayed
  if (isLoading) {
    return <CircularProgress className="loader" />;
  }

  return (
    <div className="profile-main-container">
      {/* rendering side menubar component in following div */}
      <div className="profile-menubar-content">
        <MenuBar page={"Profile"} />
      </div>
      {/* rendering navbar component in following div */}
      <div className="profile-nav-content">
        <Navbar data={data} page={"Profile"} />
        <hr className="bottom-nav-hr-line" />
        {/* displaying user details by Grid  */}
        <Grid container spacing={2} justifyContent={"space-between"}>
          {/* displaying user information,image,company details with this following Grid  */}
          <Grid
            item
            xs={5}
            sm={5}
            md={5}
            lg={5}
            className="profile-summery-container"
          >
            <img
              src={data?.profilepicture}
              alt="profile"
              className="profile-image"
            />
            <h2>{data?.name}</h2>
            <div>
              <Grid
                container
                row
                className="profile-info-summery-Grid-container"
              >
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <p className="profile-info-username">UserName</p>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={1}
                  lg={1}
                  className="profile-info-divider"
                >
                  :
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={7}>
                  <p className="profile-summery-span">{data?.username}</p>
                </Grid>
              </Grid>
              <Grid
                container
                row
                className="profile-info-summery-Grid-container"
              >
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <p className="profile-info-username">e-mail</p>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={1}
                  lg={1}
                  className="profile-info-divider"
                >
                  :
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={7}>
                  <p className="profile-summery-span">{data?.email}</p>
                </Grid>
              </Grid>
              <Grid
                container
                row
                className="profile-info-summery-Grid-container"
              >
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <p className="profile-info-username">Phone</p>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={1}
                  lg={1}
                  className="profile-info-divider"
                >
                  :
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={7}>
                  <p className="profile-summery-span">{data?.phone}</p>
                </Grid>
              </Grid>
              <Grid
                container
                row
                className="profile-info-summery-Grid-container"
              >
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <p className="profile-info-username">Website</p>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={1}
                  lg={1}
                  className="profile-info-divider"
                >
                  :
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={7}>
                  <p className="profile-summery-span">{data?.website}</p>
                </Grid>
              </Grid>
            </div>
            <hr className="profile-summery-container-hr" />
            <h2>Company</h2>
            <div>
              <Grid
                container
                row
                className="profile-info-summery-Grid-container"
              >
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <p className="profile-info-username">Name</p>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={1}
                  lg={1}
                  className="profile-info-divider"
                >
                  :
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={7}>
                  <p className="profile-summery-span">{data?.company?.name}</p>
                </Grid>
              </Grid>
              <Grid
                container
                row
                className="profile-info-summery-Grid-container"
              >
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <p className="profile-info-username">catchPhrase</p>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={1}
                  lg={1}
                  className="profile-info-divider"
                >
                  :
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={7}>
                  <p className="profile-summery-span">
                    {data?.company?.catchPhrase}
                  </p>
                </Grid>
              </Grid>
              <Grid
                container
                row
                className="profile-info-summery-Grid-container"
              >
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <p className="profile-info-username">bs</p>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sm={1}
                  md={1}
                  lg={1}
                  className="profile-info-divider"
                >
                  :
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={7}>
                  <p className="profile-summery-span">{data?.company?.bs}</p>
                </Grid>
              </Grid>
            </div>
          </Grid>
          {/* displaying vertical line or divider with the following Grid */}
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <div className="profile-horizontal-line"></div>
          </Grid>
          {/* displaying user address,location with map component and chat accordian with this following Grid  */}
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <div className="address-info-container">
              <h2>Address :</h2>
              <div>
                <Grid
                  container
                  row
                  className="profile-address-summery-Grid-container"
                >
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <p className="profile-address-info">Street</p>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                    className="profile-info-divider"
                  >
                    :
                  </Grid>
                  <Grid item xs={7} sm={7} md={7} lg={7}>
                    <p className="profile-summery-span">
                      {data?.address?.street}
                    </p>
                  </Grid>
                </Grid>
                <Grid
                  container
                  row
                  className="profile-address-summery-Grid-container"
                >
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <p className="profile-address-info">Suite</p>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                    className="profile-info-divider"
                  >
                    :
                  </Grid>
                  <Grid item xs={7} sm={7} md={7} lg={7}>
                    <p className="profile-summery-span">
                      {data?.address?.suite}
                    </p>
                  </Grid>
                </Grid>
                <Grid
                  container
                  row
                  className="profile-address-summery-Grid-container"
                >
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <p className="profile-address-info">City</p>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                    className="profile-info-divider"
                  >
                    :
                  </Grid>
                  <Grid item xs={7} sm={7} md={7} lg={7}>
                    <p className="profile-summery-span">
                      {data?.address?.city}
                    </p>
                  </Grid>
                </Grid>
                <Grid
                  container
                  row
                  className="profile-address-summery-Grid-container"
                >
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <p className="profile-address-info">Zipcode</p>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                    className="profile-info-divider"
                  >
                    :
                  </Grid>
                  <Grid item xs={7} sm={7} md={7} lg={7}>
                    <p className="profile-summery-span">
                      {data?.address?.zipcode}
                    </p>
                  </Grid>
                </Grid>
              </div>
            </div>

            <div className="profile-map-div">
              <Map data={data} />
              <div className="profile-map-lat-lng">
                <p>
                  Lat :
                  <span className="profile-summery-span">
                    {data?.address?.geo?.lat}
                  </span>
                </p>
                <p>
                  Long :
                  <span className="profile-summery-span">
                    {data?.address?.geo?.lng}
                  </span>
                </p>
              </div>
            </div>

            <div className="chat-accordian">
              <Accordion
                expanded={expanded}
                onChange={() => setExpanded(!expanded)}
                className="accordian-main-container"
                style={expanded ? { top: "-400px" } : {}}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                  className="accordian-heading"
                >
                  <Grid container row spacing={2}>
                    <Grid item>
                      <ChatBubbleOutlineIcon className="chat-icon" />
                    </Grid>
                    <Grid item className="accordian-text">
                      Chats
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  {userData.length > 0 &&
                    userData.map((user, i) => (
                      <Grid container row>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                          <img
                            src={user.profilepicture}
                            alt=""
                            className="online-user-image"
                          />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                          <p className="online-user-name">{user.name}</p>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2}>
                          <div
                            className="online-user-status"
                            style={
                              i == 2 || i == 3 || i == 6 || i == 7 || i == 5
                                ? { backgroundColor: "green" }
                                : {}
                            }
                          ></div>
                        </Grid>
                      </Grid>
                    ))}
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default UserProfile;
