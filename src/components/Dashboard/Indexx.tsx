import { useEffect } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { get_dashboard_data } from "../../store/reducers/dashboardReducer";
import { useDispatch, useSelector } from "react-redux";

const Indexx = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(get_dashboard_data(userInfo.id));
  }, []);

  const { recentOrders, totalOrders, pendingOrders, cancelledOrders } =
    useSelector((state) => state.dashboard);

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
    <div>
      <div className="grid grid-cols-3 md:grid-cols-1 gap-5">
        <div className="flex justify-center items-center p-5 bg-white rounded-md gap-5">
          <div className="bg-green-100 w-12 h-12 rounded-full flex justify-center items-center text-xl ">
            <span className="text-xl text-green-800">
              <RiShoppingCartFill />
            </span>
          </div>
          <div className="flex flex-col justify-start items-start text-slate-600 ">
            <h2 className="text-3xl font-bold">{totalOrders}</h2>
            <span className="">Orders</span>
          </div>
        </div>
        {/* / */}
        <div className="flex justify-center items-center p-5 bg-white rounded-md gap-5">
          <div className="bg-green-100 w-12 h-12 rounded-full flex justify-center items-center text-xl ">
            <span className="text-xl text-green-800">
              <RiShoppingCartFill />
            </span>
          </div>
          <div className="flex flex-col justify-start items-start text-slate-600 ">
            <h2 className="text-3xl font-bold">{pendingOrders}</h2>
            <span className="">Pending Orders</span>
          </div>
        </div>
        {/* / */}
        <div className="flex justify-center items-center p-5 bg-white rounded-md gap-5">
          <div className="bg-green-100 w-12 h-12 rounded-full flex justify-center items-center text-xl ">
            <span className="text-xl text-green-800">
              <RiShoppingCartFill />
            </span>
          </div>
          <div className="flex flex-col justify-start items-start text-slate-600 ">
            <h2 className="text-3xl font-bold">{cancelledOrders}</h2>
            <span className="">Cancelled Orders</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 mt-5 rounded-md ">
        <h2>Recent Orders</h2>
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
                {recentOrders.map((o) => (
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
    </div>
  );
};

export default Indexx;
