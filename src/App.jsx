import { useState } from "react";
import React from "react";
import "./App.css";
import Form from "./components/Form";
import Uncontrolled from "./components/Uncontrolled";
import Validation from "./components/Validation";
import ImageUpload from "./components/ImageUpload";
function App() {
  return (
    <>
      <Form />
      <Uncontrolled />
      <Validation />
      <ImageUpload/>
    </>
  );
}

export default App;
