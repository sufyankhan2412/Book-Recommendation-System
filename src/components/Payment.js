import React, { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  
  return (
    <div className="payment-container">
      <div className="payment-steps">
        <div className={step >= 1 ? "step active" : "step"}>1. Select Method</div>
        <div className={step >= 2 ? "step active" : "step"}>2. Enter Details</div>
        <div className={step >= 3 ? "step active" : "step"}>3. Review & Confirm</div>
      </div>
      
      {step === 1 && (
        <div className="payment-methods">
          <h2>Select Payment Method</h2>
          <button onClick={() => { setPaymentMethod("Credit Card"); handleNext(); }}>Credit Card</button>
          <button onClick={() => { setPaymentMethod("PayPal"); handleNext(); }}>PayPal</button>
        </div>
      )}

      {step === 2 && (
        <div className="payment-details">
          <h2>Enter {paymentMethod} Details</h2>
          {paymentMethod === "Credit Card" && (
            <div>
              <input type="text" placeholder="Card Number" />
              <input type="text" placeholder="Expiry Date" />
              <input type="text" placeholder="CVV" />
            </div>
          )}
          {paymentMethod === "PayPal" && <p>You'll be redirected to PayPal</p>}
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      
      {step === 3 && (
        <div className="review-payment">
          <h2>Review & Confirm</h2>
          <p>Payment Method: {paymentMethod}</p>
          <button onClick={handleBack}>Back</button>
          <button className="confirm-btn">Confirm Payment</button>
        </div>
      )}
    </div>
  );
};

export default Payment;