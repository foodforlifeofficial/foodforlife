import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// const initialOptions = {
//   "client-id":
//     "AY79nw8WW4f3AmL5S2zo2KzEH3n3FkMA3dd0yTynSvZ7n7nvsZCBB3ZpX6XkEbweWXs-AGbUjCXrp5is",
//   currency: "USD",
//   intent: "capture",
//   components: "buttons",
// };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <PayPalScriptProvider options={initialOptions}> */}
      <App />
    {/* </PayPalScriptProvider> */}
  </StrictMode>
);
