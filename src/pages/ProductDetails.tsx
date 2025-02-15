import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import Rating from "../components/Rating";
import {
  FaFacebook,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Review from "../components/Review";
import { product_details } from "../store/reducers/homeReducer";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  add_to_cart,
  add_to_wishlist,
  messageClear,
} from "../store/reducers/cartReducer";
import Cart from "./Cart";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { userInfo } = useSelector((state) => state.auth);
  const { successMessage, errorMessage } = useSelector((state) => state.cart);

  const { product, relatedProduct, moreProduct } = useSelector(
    (state) => state.home
  );
  useEffect(() => {
    dispatch(product_details(id));
  }, [id]);

  const images = [1, 2, 3, 4, 5, 6];
  const discount = 10;
  const stock = 3;
  const [pic, setPic] = useState(1);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    Desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mdTablet: {
      breakpoint: { max: 991, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
    smMobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
    xsMobile: {
      breakpoint: { max: 440, min: 0 },
      items: 1,
    },
  };

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity >= product.stock) {
      toast.error("Out Of Stock");
    } else {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      toast.error("Minimum Quantity Reached");
    }
  };

  const add_cart = () => {
    dispatch(
      add_to_cart({
        userId: userInfo.id,
        quantity: quantity,
        productId: product._id,
      })
    );
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  const add_wishlist = () => {
    dispatch(
      add_to_wishlist({
        product,
        userId: userInfo.id,
      })
    );
  };

  const buynow = () => {
    let price = 0;
    if (product.discount !== 0) {
      price =
        product.price - Math.floor((product.price * product.discount) / 100);
    } else {
      price = product.price;
    }
    const obj = [
      {
        sellerId: product.sellerId,
        shopName: product.shopName,
        price: quantity * (price - Math.floor((price * 5) / 100)),
        products: [
          {
            quantity,
            productInfo: product,
          },
        ],
      },
    ];
    navigate("/shipping", {
      state: {
        products: obj,
        price: price * quantity,
        shipping_fee: 40,
        items: 1,
      },
    });
  };

  return (
    <div>
      <Header />
      <section className="h-56 mt-6 bg-cover bg-no-repeat relative bg-left bg-[url('http://localhost:5173/banner/shop.png')]">
        <div className="absolute top-0 left-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center w-full h-full text-white">
              <h2 className="text-3xl font-bold">Product Details Page</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-slate-100 py-5 mb-5">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex justify-start items-center text-md text-slate-600 w-full">
              <Link to="/">Home</Link>
              <span className="pt-1">
                <IoIosArrowForward />
              </span>
              <Link to="/category">{product.category}</Link>
              <span className="pt-1">
                <IoIosArrowForward />
              </span>
              <span className="pt-1">{product.name} </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <div className="grid grid-cols-2 md-lg:grid-cols-1 gap-8 ">
            <div>
              <div className="p-5 border h-100 w-full">
                <img src={product.images?.[0]} alt="" />
              </div>
              <div className="py-3">
                {product.images && (
                  <Carousel
                    autoPlay={true}
                    infinite={true}
                    responsive={responsive}
                    transitionDuration={500}
                  >
                    {product.images.map((img, i) => (
                      <div key={i}>
                        <img
                          onClick={() => setPic(img)}
                          className="h-32 cursor-pointer"
                          src={img}
                          alt=""
                        />
                      </div>
                    ))}
                  </Carousel>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-3xl text-slate-600 font-bold">
                <h1>{product.name}</h1>
              </div>
              <div className="flex justify-start items-center gap-4">
                <div className="flex text-xl">
                  <Rating rating={product.rating} />
                </div>
                <span className="text-slate-500">( Reviews)</span>
              </div>
              <div className="text-2xl text-red-500 font-bold flex gap-3">
                {product.discount !== 0 ? (
                  <>
                    Price:
                    <h2 className="line-through"> ${product.price}</h2>
                    <h2>
                      $
                      {product.price -
                        Math.floor(
                          (product.price * product.discount) / 100
                        )}{" "}
                      (-{discount}%)
                    </h2>
                  </>
                ) : (
                  <h2>Price: ${product.price}</h2>
                )}
              </div>
              <div className="text-slate-600 ">
                <p>
                  {product.description}
                  {"..."}
                </p>
              </div>
              <div className="flex gap-3 pb-10 border-b">
                {product.stock ? (
                  <div className="flex gap-4">
                    <div className="flex bg-slate-200 h-12 justify-center items-center text-xl">
                      <div onClick={decrement} className="px-6 cursor-pointer">
                        -
                      </div>
                      <div className="px-6 ">{quantity}</div>
                      <div onClick={increment} className="px-6 cursor-pointer">
                        +
                      </div>
                    </div>
                    <div
                      onClick={add_cart}
                      className="px-8 py-3 h-12 cursor-pointer hover:shadow-lg hover:shadow-green-500/40 text-white bg-blue-400"
                    >
                      <button>Add to Cart</button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="">
                  <div
                    onClick={add_wishlist}
                    className="h-12 w-12 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-cyan-500/40 bg bg-cyan-500 text-white"
                  >
                    <FaHeart />
                  </div>
                </div>
              </div>

              <div className=" flex py-5 gap-5 ">
                <div className="w-36 text-black font-bold flex flex-col gap-5 text-xl">
                  <span>Availability</span>
                  <span>Share on</span>
                </div>
                <div className="flex flex-col gap-5">
                  <span
                    className={`text-${product.stock ? "green" : "red"}-500`}
                  >
                    {product.stock
                      ? `In Stock(${product.stock})`
                      : "Out of stock"}
                  </span>
                  <ul className="flex justify-start items-center gap-3">
                    <li>
                      <a
                        className="w-9 h-9 hover:bg-gray-500 hover:text-white flex justify-center items-center bg-indigo-500 rounded-full text-white"
                        href=""
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-9 h-9 hover:bg-gray-500 hover:text-white flex justify-center items-center bg-slate-600 rounded-full text-white"
                        href=""
                      >
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-9 h-9 hover:bg-gray-500 hover:text-white flex justify-center items-center bg-blue-600 rounded-full text-white"
                        href=""
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-9 h-9 hover:bg-gray-500 hover:text-white flex justify-center items-center bg-green-500 rounded-full text-white"
                        href=""
                      >
                        <FaWhatsapp />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-3 pb-12  ">
                {product.stock ? (
                  <button
                    onClick={buynow}
                    className="px-8 py-3 h-12 cursor-pointer hover:shadow-lg hover:shadow-green-500/40 text-white bg-green-500"
                  >
                    Buy now
                  </button>
                ) : (
                  ""
                )}
                <Link
                  to={`/dashboard/chat/${product.sellerId}`}
                  className="px-8 py-3 h-12 cursor-pointer hover:shadow-lg hover:shadow-red-500/40 text-white bg-red-500"
                >
                  Chat Seller
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Review />

      <Footer />
    </div>
  );
};

export default ProductDetails;
