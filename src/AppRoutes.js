import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/*" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
