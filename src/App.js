
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from "./components/Payment/Payment";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;