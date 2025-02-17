import React from "react";
import "../components/Payment.css";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { totalAmount, products } = location.state || { totalAmount: 0, products: [] };

  return (
    <main className="page payment-page">
      <section className="payment-form dark">
        <div className="container">
          <div className="block-heading">
            <h2>Payment</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <form>
            <div className="products">
              <h3 className="title">Checkout</h3>
              {products.map((product, index) => (
                <div className="item" key={index}>
                  <span className="price">${product.price}</span>
                  <p className="item-name">{product.name}</p>
                  <p className="item-description">{product.description}</p>
                </div>
              ))}
              <div className="total">Total<span className="price">${totalAmount}</span></div>
            </div>
            <div className="card-details">
              <h3 className="title">Credit Card Details</h3>
              <div className="row">
                <div className="form-group col-sm-7">
                  <label>Card Holder</label>
                  <input type="text" className="form-control" placeholder="Card Holder" />
                </div>
                <div className="form-group col-sm-5">
                  <label>Expiration Date</label>
                  <div className="input-group expiration-date">
                    <input type="text" className="form-control" placeholder="MM" />
                    <span className="date-separator">/</span>
                    <input type="text" className="form-control" placeholder="YY" />
                  </div>
                </div>
                <div className="form-group col-sm-8">
                  <label>Card Number</label>
                  <input type="text" className="form-control" placeholder="Card Number" />
                </div>
                <div className="form-group col-sm-4">
                  <label>CVC</label>
                  <input type="text" className="form-control" placeholder="CVC" />
                </div>
                <div className="form-group col-sm-12">
                  <button type="button" className="btn btn-primary btn-block">Proceed</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Payment;
