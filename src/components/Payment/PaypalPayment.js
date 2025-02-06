import React from "react";
import "./Payment.css";

const PaypalPayment = () => {
  return (
    <div className="payment-container">
      <h2>PayPal Payment</h2>
      <form>
        <label>PayPal Email:</label>
        <input type="email" placeholder="Email Address" />
        <button className="confirm-btn" type="submit">
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default PaypalPayment;
