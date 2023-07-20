import React from "react";
import "../src/styles/App.css";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/accueil" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;