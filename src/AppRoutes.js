import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import SingleRecipe from "./components/recipe/singleRecipe";

//use link to access the id

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/*" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/singleRecipe/:id" element={<SingleRecipe />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
