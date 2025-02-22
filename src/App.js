import React from "react";
import Payment from "./components/Payment/Payment";

const App = () => {
  // Mock data for products and totalAmount
  const products = [
    { name: "Product 1", price: 10, description: "Description of Product 1" },
    { name: "Product 2", price: 20, description: "Description of Product 2" },
  ];
  const totalAmount = 30;

  return (
    <div>
      <Payment products={products} totalAmount={totalAmount} />
    </div>
  );
};

export default App;