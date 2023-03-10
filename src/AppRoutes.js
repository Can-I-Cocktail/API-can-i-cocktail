import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import SingleRecipe from "./components/recipe/singleRecipe";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/*" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<SingleRecipe />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
