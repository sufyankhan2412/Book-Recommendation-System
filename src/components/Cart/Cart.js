import React, { useState } from "react";
import "./Cart.css"; // Make sure you have this CSS file for styling

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "The Kite Runner", price: 44.00, quantity: 1, img: "https://imgv2-2-f.scribdassets.com/img/word_document/250024294/original/582f636f24/1587740851?v=1" },
        { id: 2, name: "Harry Porter", price: 50.00, quantity: 1, img: "https://th.bing.com/th/id/OIP.qP5WDAHXEBlm1EdKbTlxcAHaLH?rs=1&pid=ImgDetMain" }
    ]);

    const updateQuantity = (id, delta) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <div className="cart">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.img} alt={item.name} className="cart-img" />
                            <div className="cart-details">
                                <h4>{item.name}</h4>
                                <p>€{item.price.toFixed(2)}</p>
                                <div className="quantity-control">
                                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                </div>
                            </div>
                            <span className="remove" onClick={() => removeItem(item.id)}>&times;</span>
                        </div>
                    ))
                )}
                <div className="cart-summary">
                    <h4>Total: €{totalAmount.toFixed(2)}</h4>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
