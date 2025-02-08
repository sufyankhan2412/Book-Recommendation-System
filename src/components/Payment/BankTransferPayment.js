import React from "react";
import "./Payment.css";

const BankTransferPayment = () => {
  return (
    <div className="payment-container">
      <h2>Bank Transfer Payment</h2>
      <form>
        <label>Bank Account Number:</label>
        <input type="text" placeholder="Account Number" />
        <label>Bank Name:</label>
        <input type="text" placeholder="Bank Name" />
        <button className="confirm-btn" type="submit">
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default BankTransferPayment;
