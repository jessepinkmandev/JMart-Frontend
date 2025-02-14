import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import Stripe from "../components/Stripe";

const Payment = () => {
  const {
    state: { price, items, orderId },
  } = useLocation();
  const [paymentMethod, setPaymentMethod] = useState("stripe");

  return (
    <div>
      <Header />
      <section className="bg-slate-300">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16 mt-4">
          <div className="flex flex-wrap md:flex-col-reverse">
            <div className="w-7/12 md:w-full">
              <div className="py-2 md:pr-0">
                <div className="flex flex-wrap">
                  <div
                    className={`w-[20%] border-r cursor-pointer py-8 px-12 ${
                      paymentMethod === "stripe" ? "bg-white" : "bg-slate-200"
                    } `}
                    onClick={() => setPaymentMethod("stripe")}
                  >
                    <div className="flex flex-col gap-1 justify-center items-center">
                      <img
                        className="h-12 w-full mb-2"
                        src="https://www.creativefabrica.com/wp-content/uploads/2018/11/Payment-by-back1design1-2-580x383.png"
                        alt=""
                      />
                    </div>
                    <span>Stripe</span>
                  </div>
                  {/* // */}
                  <div
                    className={`w-[20%] border-r cursor-pointer py-8 px-12 ${
                      paymentMethod === "cod" ? "bg-white" : "bg-slate-200"
                    } `}
                    onClick={() => setPaymentMethod("cod")}
                  >
                    <div className="flex flex-col gap-1 justify-center items-center">
                      <img
                        className="h-12 w-full mb-2"
                        src="https://media.istockphoto.com/id/537487845/vector/payment-by-cash.jpg?s=612x612&w=0&k=20&c=ikEp0CWBCwizA4xdzFGUw1QO0FBGfjE1_iq-aOco8Dg="
                        alt=""
                      />
                    </div>
                    <span>COD</span>
                  </div>
                </div>
              </div>

              {paymentMethod === "stripe" && (
                <div className="">
                  <Stripe />
                </div>
              )}
              {paymentMethod === "cod" && (
                <div className="bg-white py-2 px-2 ">
                  <button className="bg-green-700 px-4 py-2 text-white">
                    Confirm Cod
                  </button>
                </div>
              )}
            </div>

            {/* / */}
            <div className="w-5/12 md:w-full">
              <div className="pl-2 md:pl-0 md:mb-0">
                <div className="bg-white shadow p-5 text-slate-600 flex flex-col gap-3">
                  <h2 className="font-bold text-lg">Order Summary</h2>
                  <div className="flex justify-between items-center">
                    <span>{items} Items and Shipping fee included</span>
                    <span>${price}</span>
                  </div>
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total Amount</span>
                    <span>${price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Payment;
