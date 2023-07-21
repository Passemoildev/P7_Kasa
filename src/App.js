import React from "react";
import "../src/styles/App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import FicheLogement from "./pages/Logement/Logement"
import Error from "../src/pages/Error/Error"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={FicheLogement}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
};

export default App;