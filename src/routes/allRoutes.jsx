import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import UserProfile from "../pages/userProfile/UserProfile";
import Posts from "../pages/Posts";
import Gallery from "../pages/Gallery";
import Todo from "../pages/Todo";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/user" element={<UserProfile />}></Route>
      <Route exact path="/posts" element={<Posts />}></Route>
      <Route exact path="/gallery" element={<Gallery />}></Route>
      <Route exact path="/todo" element={<Todo />}></Route>
    </Routes>
  );
};

export default AllRoutes;
