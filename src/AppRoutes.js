import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AllRecipes from "./components/allRecipes/allRecipes";

//use link to access the id

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/*" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<AllRecipes />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
