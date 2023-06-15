// import React from "react";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import CheckOutForm from "./CheckOutForm";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import useCart from "../../../hooks/useCart";
// import Titile from "../../Common/Titile/Titile";

// const stripePromise = loadStripe(import.meta.env.VITE_Payement_Getway);
// const Payment = () => {
//   const [cart] = useCart();
//   const total = cart.reduce((sum, item) => sum + item.price, 0);
//   const price = parseFloat(total.toFixed(2));
//   return (
//     <div>
//       <Titile subHeading="please process" heading="Payment"></Titile>
//       <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
//       <Elements stripe={stripePromise}>
//         <CheckOutForm cart={cart} price={price} />
//       </Elements>
//     </div>
//   );
// };

// export default Payment;
