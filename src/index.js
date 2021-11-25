import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Help from "./pages/Help/Help";
import Communities from "./pages/Communities/Communities";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="cartuchera-comunitaria">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/app" element={<App />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/como-ayudar" element={<Help />} />
        <Route path="/tres-comunidades" element={<Communities />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
