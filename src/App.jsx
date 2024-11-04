import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Videos from "./Pages/Videos/Videos";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:category/:videoId" element={<Videos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
