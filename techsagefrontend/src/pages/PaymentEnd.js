import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "./Paymentform"

const stripePromise = loadStripe('your_stripe_publishable_key'); // Replace with your Stripe Publishable Key

function App() {
  return (
    <div className="App">
      <h1>Buy Accessories</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default App;
