import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Rating from "./Rating";

const ShopProducts = ({ styles }) => {
  return (
    <div
      className={`w-full gap-3 grid ${
        styles === "grid"
          ? "grid-cols-3 md-lg:grid-cols-2 md:grid-cols-2"
          : "grid-cols-1 md-lg:grid-cols-2 md:grid-cols-2"
      }`}
    >
      {[1, 2, 3, 4, 5, 6].map((p, i) => (
        <div
          key={i}
          className={`flex transition-all duration-1000 hover:shadow-md hover:-translate-y-3 ${
            styles === "grid"
              ? "flex-col justify-start items-start"
              : "justify-start items-center md-lg:flex-col md-lg:justify-start md-lg:items-start"
          } w-full gap-4 bg-white p-1 rounded-md`}
        >
          <div
            className={
              styles === "grid"
                ? "w-full relative group h-52 md:h-64 xs:h-44 overflow-hidden"
                : "md-lg:w-full relative group h-52 md:h-64  overflow-hidden "
            }
          >
            <img
              className="h-60 md:h-72 xs:h-44 rounded-md w-full object-cover "
              src={`http://localhost:5173/products/${i + 1}.webp`}
              alt=""
            />
            <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
              <li className="w-9 h-9 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-slate-500 hover:text-white hover:rotate-[720deg] transition-all">
                <FaRegHeart />
              </li>
              <li className="w-9 h-9 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-slate-500 hover:text-white hover:rotate-[720deg] transition-all">
                <FaEye />
              </li>
              <li className="w-9 h-9 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-slate-500 hover:text-white hover:rotate-[720deg] transition-all">
                <FaShoppingCart />
              </li>
            </ul>
          </div>
          <div className="flex justify-start items-start flex-col gap-3  ">
            <h2 className="font-bold">Product Name</h2>
            <div className="flex justify-start items-start gap-3">
              <span className="text-md font-semibold">$132</span>
              <div className="flex">
                <Rating rating={4} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
