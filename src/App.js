import React from "react"
import { HelmetProvider } from "react-helmet-async"
import "../src/styles/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home"
import Aboutus from "./pages/aboutus/AboutUs"
import FicheLogement from "../src/pages/logements/PageLogement"
import Error from "../src/pages/Error/Error"

const App = () => {
  return (
    <HelmetProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus/>}/>
        <Route path="/logements/:id" element={<FicheLogement/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
    </HelmetProvider>
  );
};

export default App;
