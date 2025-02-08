import React from "react";
import "./Payment.css";

const CreditCardPayment = () => {
  return (
    <div className="payment-container">
      <h2>Credit Card Payment</h2>
      <form>
        <label>Card Number:</label>
        <input type="text" placeholder="Card Number" />
        <label>Expiry Date:</label>
        <input type="text" placeholder="MM/YY" />
        <label>CVV:</label>
        <input type="text" placeholder="CVV" />
        <button className="confirm-btn" type="submit">
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default CreditCardPayment;
