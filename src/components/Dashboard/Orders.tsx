import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { get_orders } from "../../store/reducers/orderReducer";

const Orders = () => {
  const [state, setState] = useState("all");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector(
    (state: { auth: { userInfo: { id: string } } }) => state.auth
  );
  const { myOrders } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(get_orders({ status: state, customerId: userInfo.id }));
  }, [state]);

  const redirect = (o) => {
    let items = 0;
    for (let i = 0; i < o.length; i++) {
      items = o.products[i].quantity + items;
    }
    navigate("/payment", {
      state: {
        price: o.price,
        items,
        orderId: o._id,
      },
    });
  };

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-slate-600">My Orders</h2>
        <select
          className="outline-none px-3 py-1 border rounded-md text-slate-600"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="all">---Order Status---</option>
          <option value="placed">Placed</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
          <option value="warehouse">Warehouse</option>
        </select>
      </div>
      <div className="pt-4">
        <div className="relative overflow-x-auto rounded-md ">
          <table className="w-full text-sm text-left  text-gray-500">
            <thead className="text-xs rounded-md text-gray-700 bg-gray-200 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3">
                  {" "}
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  {" "}
                  Payment Status
                </th>
                <th scope="col" className="px-6 py-3">
                  {" "}
                  Order Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((o) => (
                <tr key={o._id} className="bg-white border-b">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {o._id}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {o.price}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {o.payment_status}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {o.delivery_status}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    <Link to={`/dashboard/order/details/${o._id}`}>
                      <span className="bg-green-200 text-green-800 text-md font-semibold mr-2 px-3 py-1 rounded">
                        View
                      </span>
                    </Link>
                    {o.payment_status !== "paid" && (
                      <span
                        onClick={() => redirect(o)}
                        className="bg-blue-200 text-blue-800 text-md font-semibold mr-2 px-3 cursor-pointer py-1 rounded"
                      >
                        Pay Now
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
