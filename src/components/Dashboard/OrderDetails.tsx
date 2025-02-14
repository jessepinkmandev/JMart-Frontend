import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_order_details } from "../../store/reducers/orderReducer";
import { DiVim } from "react-icons/di";
import Rating from "../Rating";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();

  const { myOrder } = useSelector((state) => state.order);
  const { userInfo } = useSelector(
    (state: { auth: { userInfo: { id: string } } }) => state.auth
  );

  useEffect(() => {
    dispatch(get_order_details(orderId));
  }, [orderId]);

  return (
    <div className="bg-white p-5">
      <h2 className="text-slate-600  font-semibold">
        #{myOrder._id} <span className="pl-8">{myOrder.date}</span>
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-slate-600 font-semibold font-sans">
            Deliver To: {myOrder.shippingInfo?.name}
          </h2>
          <p>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2 py-2 rounded">
              Home
            </span>
            <span className="text-slate-600 text-sm ">
              {myOrder.shippingInfo?.address}
            </span>
          </p>
        </div>
        <div className="text-slate-600">
          <h2 className="font-mono">
            Price: ${myOrder.price} Includes shipping
          </h2>
          <p className="font-mono">
            Payment Status:{" "}
            <span
              className={`py-1 text-sm px-3 rounded-md ${
                myOrder.payment_status === "paid"
                  ? "bg-green-300 text-green-800"
                  : "bg-red-300 text-red-800"
              }`}
            >
              {myOrder.payment_status}
            </span>
          </p>
          <p className="font-mono">
            Delivery Status:{" "}
            <span
              className={`py-1 text-sm px-3 rounded-md ${
                myOrder.delivery_status === "paid"
                  ? "bg-green-300 text-green-800"
                  : "bg-red-300 text-red-800"
              }`}
            >
              {myOrder.delivery_status}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-slate-600 text-lg pb-2 font-sans font-bold">
          Order Products:
        </h2>
        <div className="flex gap-5 flex-row">
          {myOrder.products?.map((p) => (
            <div className=" gap-5 justify-start items-center text-slate-600">
              <div className="flex  gap-2">
                <div
                  className="border group transition-all duration-500 hover:shadow-md hover:-mt-3"
                  key={p}
                >
                  <div className="relative overflow-hidden">
                    <img
                      className="w-8 h-12 mx-auto"
                      src={p.images[0]}
                      alt=""
                    />
                  </div>
                  <div className="py-3 text-slate-600 px-2 ">
                    <h2 className="font-bold">{p.name}</h2>
                    <div className="flex justify-start items-start gap-3">
                      <span className="text-md font-semibold">
                        ${p.price - Math.floor((p.price * p.discount) / 100)}
                      </span>
                    </div>
                    <div className="">
                      <span>Brand: {p.brand}</span>
                      <br />
                      <span>Qty: {p.quantity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
