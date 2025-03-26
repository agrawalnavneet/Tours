import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import Navbar from "./components/Navbar.jsx"; // Import your Navbar component
//app.css
import "./app.css";
const App = () => {
  return (
    <Router>
      {/* Include Navbar across all pages */}
      
      <Routes>
        {/* Define Route paths and corresponding components */}
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
    
  );
};

export default App;
