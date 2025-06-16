import { useState } from "react";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Uncontrolled from "./components/Uncontrolled";
import Validation from "./components/Validation";
import ImageUpload from "./components/ImageUpload";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
// import SearchParams from "./components/SearchParams"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        {/* <Route path="/SearchParams" element={ <SearchParams/>} /> */}
      </Routes>
      <Form />
      <Uncontrolled />
      <Validation />
      <ImageUpload />
      {/* <SearchParams/> */}
    </Router>
  );
}

export default App;
