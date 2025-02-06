import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  // Initialize cart items in state
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Book 1", price: 12.99, quantity: 1 },
    { id: 2, name: "Book 2", price: 19.99, quantity: 2 },
  ]);

  // Handle remove item action
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  // Handle checkout action (for now, just log to console)
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
    } else {
      console.log("Proceeding to checkout with items: ", cartItems);
      // You could integrate checkout API here
    }
  };

  // Handle quantity change
  const handleQuantityChange = (id, operation) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        if (operation === "increase") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (operation === "decrease" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  // Calculate the total cost of items
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price.toFixed(2)}</span>
            </div>

            <div className="item-quantity">
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange(item.id, "decrease")}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange(item.id, "increase")}
              >
                +
              </button>
            </div>

            <button className="remove-btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3 className="summary-title">Cart Summary</h3>
        <div className="total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
