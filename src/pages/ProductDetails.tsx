import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Rating from "../components/Rating";
import {
  FaFacebook,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Review from "../components/Review";

const ProductDetails = () => {
  const images = [1, 2, 3, 4, 5, 6];
  const discount = 5;
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
              <Link to="/category">Category</Link>
              <span className="pt-1">
                <IoIosArrowForward />
              </span>
              <span className="pt-1">Product Name </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <div className="grid grid-cols-2 md-lg:grid-cols-1 gap-8 ">
            <div>
              <div className="p-5 border h-100 w-full">
                <img
                  src={`http://localhost:5173/products/${pic}.webp`}
                  alt=""
                />
              </div>
              <div className="py-3">
                {images && (
                  <Carousel
                    autoPlay={true}
                    infinite={true}
                    responsive={responsive}
                    transitionDuration={500}
                  >
                    {images.map((img, i) => (
                      <div key={i}>
                        <img
                          onClick={() => setPic(i + 1)}
                          className="h-32 cursor-pointer"
                          src={`http://localhost:5173/products/${i + 1}.webp`}
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
                <h1>Product name</h1>
              </div>
              <div className="flex justify-start items-center gap-4">
                <div className="flex text-xl">
                  <Rating rating="4" />
                </div>
                <span className="text-slate-500">(24 Reviews)</span>
              </div>
              <div className="text-2xl text-red-500 font-bold flex gap-3">
                {discount !== 0 ? (
                  <>
                    Price:
                    <h2 className="line-through"> $500</h2>
                    <h2>
                      ${500 - Math.floor((500 * discount) / 100)} (-{discount}%)
                    </h2>
                  </>
                ) : (
                  <h2>Price: $200</h2>
                )}
              </div>
              <div className="text-slate-600 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi molestiae delectus non at iusto, assumenda qui
                  accusantium. Eos explicabo doloremque qui laudantium inventore
                  odio nulla aliquam repellat vel neque.
                </p>
              </div>
              <div className="flex gap-3 pb-10 border-b">
                {stock ? (
                  <div className="flex gap-4">
                    <div className="flex bg-slate-200 h-12 justify-center items-center text-xl">
                      <div className="px-6 cursor-pointer">-</div>
                      <div className="px-6 ">2</div>
                      <div className="px-6 cursor-pointer">+</div>
                    </div>
                    <div className="px-8 py-3 h-12 cursor-pointer hover:shadow-lg hover:shadow-green-500/40 text-white bg-blue-400">
                      <button>Add to Cart</button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="">
                  <div className="h-12 w-12 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-cyan-500/40 bg bg-cyan-500 text-white">
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
                  <span className={`text-${stock ? "green" : "red"}-500`}>
                    {stock ? `In Stock(${stock})` : "Out of stock"}
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
                {stock ? (
                  <button className="px-8 py-3 h-12 cursor-pointer hover:shadow-lg hover:shadow-green-500/40 text-white bg-green-500">
                    Buy now
                  </button>
                ) : (
                  ""
                )}
                <Link className="px-8 py-3 h-12 cursor-pointer hover:shadow-lg hover:shadow-red-500/40 text-white bg-red-500">
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
