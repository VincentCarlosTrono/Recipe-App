import React from "react";
import Home from "../pages/Home";
import Cuisine from "../pages/Cuisine";
import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
    </div>
  );
};

export default Pages;
