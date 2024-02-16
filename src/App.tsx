import React from "react";
import "./global.css";
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Home from "./Home";
import Vitimas from "./projectsPages/Vitimas";
import ConnectPharmacy from "./projectsPages/ConnectPharmacy";
import Watchfolio from "./projectsPages/Watchfolio";
import Potterdle from "./projectsPages/Potterdle";

function App() {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/vitimas" element={<Vitimas />} />
          <Route path="/connectPharmacy" element={<ConnectPharmacy />} />
          <Route path="/watchfolio" element={<Watchfolio />} />
          <Route path="/potterdle" element={<Potterdle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
