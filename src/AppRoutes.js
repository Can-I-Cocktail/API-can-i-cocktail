import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../client/components/home/Home";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route to="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
