import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Book 1", price: 15, quantity: 1 },
    { id: 2, name: "Book 2", price: 20, quantity: 1 },
  ]);
  const [paymentMethod, setPaymentMethod] = useState("");

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <motion.div className="cart-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <motion.div className="cart-item" key={item.id} whileHover={{ scale: 1.05 }}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
            <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
          </motion.div>
        ))}
      </div>
      <h3>Total: ${totalPrice}</h3>
      <div className="payment-section">
        <h4>Select Payment Method</h4>
        <select onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="">Choose...</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Bank Transfer</option>
        </select>
      </div>
      <motion.button className="checkout-btn" whileTap={{ scale: 0.9 }}>Proceed to Payment</motion.button>
    </motion.div>
  );
};

export default Cart;