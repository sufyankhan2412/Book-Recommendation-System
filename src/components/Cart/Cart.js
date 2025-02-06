import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 25, quantity: 1 },
    { id: 2, name: "Product 2", price: 40, quantity: 1 },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
      className="cart-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <motion.p className="empty-cart">Your cart is empty.</motion.p>
      ) : (
        cartItems.map((item) => (
          <motion.div
            key={item.id}
            className="cart-item"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span>{item.name}</span>
            <div className="cart-controls">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => updateQuantity(item.id, -1)}
              >
                ➖
              </motion.button>
              <span>{item.quantity}</span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => updateQuantity(item.id, 1)}
              >
                ➕
              </motion.button>
            </div>
            <span>${item.price * item.quantity}</span>
            <motion.button
              className="remove-btn"
              whileTap={{ scale: 0.8 }}
              onClick={() => removeItem(item.id)}
            >
              ❌
            </motion.button>
          </motion.div>
        ))
      )}
      {cartItems.length > 0 && (
        <motion.div
          className="cart-summary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Total: ${totalAmount}</h3>
          <motion.button
            className="checkout-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Proceed to Checkout
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Cart;

