import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KQm7xGVh2UzXWk0PWTWsNXa5bbKY2k8s5cQkLmdKicl4ZvONygnwfxlzIPyAIt2nm5rKH7Su6UwNLqcaEgGdzm5006rwjUV1C";

  const ontoken = (token) => {
    console.log(token);
    alert("Payment Sussessful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="FP Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={ontoken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
