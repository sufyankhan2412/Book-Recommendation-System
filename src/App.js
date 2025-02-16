import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart"; // Ensure correct path

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
