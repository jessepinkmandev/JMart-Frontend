import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { place_order } from "../store/reducers/orderReducer";

const Shipping = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const {
    state: { products, price, shipping_fee, items },
  } = useLocation();
  const cart_products = [1, 2];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [res, setRes] = useState(false);
  const [state, setState] = useState({
    name: "",
    address: "",
    phone: "",
    post: "",
    province: "",
    city: "",
    area: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, address, phone, post, province, city, area } = state;
    if (name && address && phone && post && province && city && area) {
      setRes(true);
    }
  };

  const placeOrder = () => {
    dispatch(
      place_order({
        products,
        price,
        shipping_fee,
        items,
        shippingInfo: state,
        userId: userInfo.id,
        navigate,
      })
    );
    //
  };

  return (
    <div>
      <Header />
      <section className="h-56 mt-6 bg-cover bg-no-repeat relative bg-left bg-[url('http://localhost:5173/banner/shop.png')]">
        <div className="absolute top-0 left-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center w-full h-full text-white">
              <h2 className="text-3xl font-bold">Shipping Page</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full ">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>
                <span>Shipping </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // */}

      <section className="bg-slate-300">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] mx-auto py-16">
          <div className="w-full flex flex-wrap">
            <div className="w-[67%] md-lg:w-full">
              <div className="flex flex-col gap-3">
                <div className="bg-white p-6 shadow-sm rounded-md">
                  <h2 className="text-slate-600 font-bold pb-3">
                    Shipping Information
                  </h2>
                  {!res && (
                    <>
                      <form onSubmit={handleSubmit}>
                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-2 mb-2 w-full">
                            <label htmlFor="name">Name</label>
                            <input
                              onChange={inputHandle}
                              value={state.name}
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Enter Name.."
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                            />
                          </div>
                          <div className="flex flex-col gap-2 mb-2 w-full">
                            <label htmlFor="address">Address</label>
                            <input
                              onChange={inputHandle}
                              value={state.address}
                              type="text"
                              name="address"
                              id="address"
                              placeholder="Enter Address.."
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                            />
                          </div>
                        </div>

                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-2 mb-2 w-full">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                              onChange={inputHandle}
                              value={state.phone}
                              type="text"
                              name="phone"
                              id="phone"
                              placeholder="Enter Phone Number.."
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                            />
                          </div>
                          <div className="flex flex-col gap-2 mb-2 w-full">
                            <label htmlFor="post">Post</label>
                            <input
                              onChange={inputHandle}
                              value={state.post}
                              type="text"
                              name="post"
                              id="post"
                              placeholder="Enter Post.."
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                            />
                          </div>
                        </div>

                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-2 mb-2 w-full">
                            <label htmlFor="province">Province </label>
                            <input
                              onChange={inputHandle}
                              value={state.province}
                              type="text"
                              name="province"
                              id="province"
                              placeholder="Enter Pprovince.."
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                            />
                          </div>
                          <div className="flex flex-col gap-2 mb-2 w-full">
                            <label htmlFor="city">City</label>
                            <input
                              onChange={inputHandle}
                              value={state.city}
                              type="text"
                              name="city"
                              id="city"
                              placeholder="Enter City.."
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                            />
                          </div>
                        </div>

                        <div className="flex md:flex-col md:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-2 mb-2 w-full">
                            <label htmlFor="area">Area</label>
                            <input
                              onChange={inputHandle}
                              value={state.area}
                              type="text"
                              name="area"
                              id="area"
                              placeholder="Enter Area.."
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                            />
                          </div>
                          <div className="flex flex-col gap-2 mb-2 w-full">
                            <button className=" w-full bg-blue-500 text-white py-2 mt-8 hover:shadow-blue-500/50 shadow-lg ">
                              Save Details
                            </button>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                  {res && (
                    <div className="flex flex-col gap-1">
                      <h1 className="text-slate-600 font-semibold pb-2">
                        Deliver To {state.name}
                      </h1>
                      <p>
                        <span className="bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2 py-1 rounded">
                          Home
                        </span>
                        <span>
                          {state.phone + " "}
                          {state.address + " "}
                          {state.province + " "}
                          {state.city + " "}
                          {state.area + " "}
                        </span>
                        <span
                          onClick={() => setRes(false)}
                          className="text-indigo-500 cursor-pointer"
                        >
                          Change
                        </span>
                      </p>
                      <p className="text-slate-600 text-sm">
                        Email to seller@gmail.com
                      </p>
                    </div>
                  )}
                </div>
                {products.map((p, i) => (
                  <div key={i} className="flex bg-white p-4 flex-col gap-2 ">
                    <div className="flex justify-center items-center ">
                      <h2 className="text-md to-slate-600 font-bold">
                        {p.shopName}
                      </h2>
                    </div>
                    {p.products.map((pt) => (
                      <div className="w-full flex flex-wrap ">
                        <div className="flex sm:w-full gap-2 w-7/12 ">
                          <div className="flex gap-2 justify-start items-center ">
                            <img
                              className="h-20 w-20 "
                              src={pt.productInfo.images[0]}
                              alt=""
                            />
                            <div className="pr-4 text-slate-600">
                              <h2 className="text-md font-semibold">
                                {pt.productInfo.name}
                              </h2>
                              <span className="text-sm">
                                Brand: {pt.productInfo.brand}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* // */}

                        <div className="flex justify-between w-5/12 sm:w-full sm:mt-3">
                          <div className="pl-4 sm:pl-0">
                            <h2 className="text-lg text-orange-600">
                              ${" "}
                              {pt.productInfo.price -
                                Math.floor(
                                  (pt.productInfo.price *
                                    pt.productInfo.discount) /
                                    100
                                )}
                            </h2>
                            <p className="line-through">
                              $ {pt.productInfo.price}
                            </p>
                            <p>{pt.productInfo.discount}% OFF</p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex bg-slate-200 h-8 justify-center items-center text-xl">
                              <div className="p-3 ">Qty. {pt.quantity}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[33%] md-lg:w-full">
              <div className="pl-3 md-lg:pl-0 md-lg:mt-5">
                <div className="bg-white p-3 text-slate-600 flex flex-col gap-3">
                  <h2 className="text-left font-bold">Order Summary</h2>
                  <div className="flex justify-between items-center ">
                    <span className="">Total Items ({items})</span>
                    <span className="">${price}</span>
                  </div>
                  <div className="flex justify-between items-center ">
                    <span className="">Delivery Fee</span>
                    <span className="">${shipping_fee}</span>
                  </div>
                  <div className="flex justify-between items-center ">
                    <span className="">Total Payment </span>
                    <span className="">${price + shipping_fee}</span>
                  </div>

                  <div className="flex justify-between items-center ">
                    <span className="">Total </span>
                    <span className="text-lg text-green-600">
                      ${price + shipping_fee}
                    </span>
                  </div>
                  <button
                    disabled={res ? false : true}
                    onClick={placeOrder}
                    className={`px-5 py-1.5 rounded-sm hover:shadow-red-500/50 hover:shadow-lg  text-lg text-white ${
                      res ? "bg-red-500" : "bg-slate-300"
                    } `}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shipping;
