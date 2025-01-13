import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Cart = () => {
  const navigate = useNavigate();
  const cart_products = [1, 2];
  const outofstock_Products = [1, 2];
  return (
    <div>
      <Header />
      <section className="h-56 mt-6 bg-cover bg-no-repeat relative bg-left bg-[url('http://localhost:5173/banner/shop.png')]">
        <div className="absolute top-0 left-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center w-full h-full text-white">
              <h2 className="text-3xl font-bold">Cart Page</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full ">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>
                <span>Cart </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#eeeeee]">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] mx-auto py-16">
          {cart_products.length > 0 || outofstock_Products.length > 0 ? (
            <div className="flex flex-wrap">
              <div className="w-[67%] md-lg:w-full">
                <div className="pr-3 md-lg:pr-0">
                  <div className="flex flex-col gap-3">
                    <div className="bg-white p-4 ">
                      <h2 className="text-md text-green-500 font-semibold ">
                        Stock Products {cart_products.length}
                      </h2>
                    </div>
                    {cart_products.map((p) => (
                      <div className="flex bg-white p-4 flex-col gap-2 ">
                        <div className="flex justify-center items-center ">
                          <h2 className="text-md to-slate-600 font-bold">
                            J Mart
                          </h2>
                        </div>
                        {[1, 2].map((a) => (
                          <div className="w-full flex flex-wrap ">
                            <div className="flex sm:w-full gap-2 w-7/12 ">
                              <div className="flex gap-2 justify-start items-center ">
                                <img
                                  className="h-20 w-20 "
                                  src={`http://localhost:5173/products/${
                                    a + 1
                                  }.webp`}
                                  alt=""
                                />
                                <div className="pr-4 text-slate-600">
                                  <h2 className="text-md font-semibold">
                                    Product Name
                                  </h2>
                                  <span className="text-sm">Brand: Jess</span>
                                </div>
                              </div>
                            </div>

                            {/* // */}

                            <div className="flex justify-between w-5/12 sm:w-full sm:mt-3">
                              <div className="pl-4 sm:pl-0">
                                <h2 className="text-lg text-orange-600">
                                  $120
                                </h2>
                                <p className="line-through">$150</p>
                                <p>-15%</p>
                              </div>
                              <div className="flex flex-col gap-2">
                                <div className="flex bg-slate-300 h-8 justify-center items-center text-xl">
                                  <div className="px-3 cursor-pointer">
                                    <AiOutlineMinus />
                                  </div>
                                  <div className="px-3 ">2</div>
                                  <div className="px-3 cursor-pointer">
                                    <AiOutlinePlus />
                                  </div>
                                </div>
                                <button className="px-5 py-1.5 bg-red-500 text-white">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}

                    {outofstock_Products.length > 0 && (
                      <div className="flex flex-col gap-3">
                        <div className="bg-white p-4 ">
                          <h2 className="text-md text-red-500 font-semibold ">
                            Out Of Stock Products {outofstock_Products.length}
                          </h2>
                        </div>
                        <div className="bg-white p-4">
                          {[3].map((a) => (
                            <div className="w-full flex flex-wrap ">
                              <div className="flex sm:w-full gap-2 w-7/12 ">
                                <div className="flex gap-2 justify-start items-center ">
                                  <img
                                    className="h-20 w-20 "
                                    src={`http://localhost:5173/products/${
                                      a + 1
                                    }.webp`}
                                    alt=""
                                  />
                                  <div className="pr-4 text-slate-600">
                                    <h2 className="text-md font-semibold">
                                      Product Name
                                    </h2>
                                    <span className="text-sm">Brand: Jess</span>
                                  </div>
                                </div>
                              </div>

                              {/* // */}

                              <div className="flex justify-between w-5/12 sm:w-full sm:mt-3">
                                <div className="pl-4 sm:pl-0">
                                  <h2 className="text-lg text-orange-600">
                                    $120
                                  </h2>
                                  <p className="line-through">$150</p>
                                  <p>-15%</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-[33%] md-lg:w-full">
                <div className="pl-3 md-lg:pl-0 md-lg:mt-5">
                  {cart_products.length > 0 && (
                    <div className="bg-white p-3 text-slate-600 flex flex-col gap-3">
                      <h2 className="text-left font-bold">Order Summary</h2>
                      <div className="flex justify-between items-center ">
                        <span className="">2 Items</span>
                        <span className="">$312</span>
                      </div>
                      <div className="flex justify-between items-center ">
                        <span className="">Shipping Fee</span>
                        <span className="">$30</span>
                      </div>
                      <div className="flex gap-2">
                        <input
                          className="w-full px-3 py-4 border border-slate-200 outline-0 focus:border-green-500 rounded-sm"
                          type="text"
                          name=""
                          placeholder="Input Voucher Coupon..."
                          id=""
                        />
                        <button className="px-5 py-0.5 bg-blue-400 rounded-sm text-sm text-white">
                          Apply
                        </button>
                      </div>
                      <div className="flex justify-between items-center ">
                        <span className="">Total </span>
                        <span className="text-lg text-green-600">$342</span>
                      </div>
                      <button
                        onClick={() =>
                          navigate("/shipping", {
                            state: {
                              products: [],
                              price: 500,
                              shipping_fee: 40,
                              items: 2,
                            },
                          })
                        }
                        className="px-5 py-1.5 rounded-sm hover:shadow-red-500/50 hover:shadow-lg bg-red-500 text-lg text-white "
                      >
                        Proceed to checkout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Link className="px-4 py-1 bg-indigo-500 text-white" to="/shop">
                Shop Page
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
