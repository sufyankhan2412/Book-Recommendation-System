import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CreditCardPayment from "./components/Payment/CreditCardPayment";
import PaypalPayment from "./components/Payment/PaypalPayment";
import BankTransferPayment from "./components/Payment/BankTransferPayment";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Cart} />
        <Route path="/payment/credit-card" component={CreditCardPayment} />
        <Route path="/payment/paypal" component={PaypalPayment} />
        <Route path="/payment/bank-transfer" component={BankTransferPayment} />
      </Switch>
    </Router>


export default App;
