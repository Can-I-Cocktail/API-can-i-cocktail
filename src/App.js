import "./App.css";
import React from "react";
import AppRoutes from "./AppRoutes";
import Navbar from "../client/components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
