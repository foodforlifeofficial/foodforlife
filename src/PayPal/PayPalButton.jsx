import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  return (
    <div>
      {/* <h2>Donează prin PayPal</h2> */}
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "10.00", // suma donației
                },
                shipping_preference: "NO_SHIPPING", // Dezactivează adresa de livrare
              },
            ],
            application_context: {
              shipping_preference: "NO_SHIPPING",
              //   user_action: "DONATE",
            },
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Mulțumim pentru donație, ${details.payer.name.given_name}!`);
          });
        }}
        onError={(err) => {
          console.error("Eroare la plată: ", err);
        }}
      />
    </div>
  );
};

export default PayPalButton;
