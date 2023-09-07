import "./App.css";
import React from "react";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    // <Router>
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
    // </Router>
  );
}

export default App;
