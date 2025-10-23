import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import Welcome from "./Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
