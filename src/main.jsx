import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Nav from "./companent/Nav.jsx";
import Home from "./companent/Home/Home.jsx";
import Contact from "./companent/Contakt/Contakt.jsx"
import Profil from "./companent/Profil/Profil.jsx";

createRoot(document.getElementById("root")).render(
<div className=" container bg-slate-900 text-white p-3 rounded">
<BrowserRouter>
  <Nav />
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home"  element={<Home />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/profil" element={<Profil />}/>
  </Routes>
</BrowserRouter>
</div>
);
