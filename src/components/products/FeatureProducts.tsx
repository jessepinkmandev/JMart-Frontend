import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Rating from "../Rating";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart, messageClear } from "../../store/reducers/cartReducer";
import { useEffect } from "react";
import toast from "react-hot-toast";

const FeatureProducts = ({ products }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const { cart_products_count, successMessage, errorMessage } = useSelector(
    (state) => state.cart
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //

  const add_cart = (id) => {
    dispatch(
      add_to_cart({
        userId: userInfo.id,
        quantity: 1,
        productId: id,
      })
    );
  };
  // const rating = 4;

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (userInfo) {
      navigate("/");
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="w-[85%] flex flex-wrap mx-auto ">
      <div className="w-full">
        <div className="text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-12 ">
          <h2>Feature Products</h2>
          <div className="w-24 h-1 bg-slate-300 mt-4"></div>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {products.map((p, i) => {
          return (
            <div
              className="border group transition-all duration-500 hover:shadow-md hover:-mt-3"
              key={i}
            >
              <div className="relative overflow-hidden">
                {p.discount ? (
                  <div className="flex justify-center items-center absolute text-white w-9 h-9 rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                    {p.discount}
                  </div>
                ) : (
                  ""
                )}
                <img
                  className="sm:w-full w-full h-80"
                  src={p.images[0]}
                  alt=""
                />
                <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
                  <li className="w-9 h-9 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-slate-500 hover:text-white hover:rotate-[720deg] transition-all">
                    <FaRegHeart />
                  </li>
                  <Link
                    to="/product/details/new"
                    className="w-9 h-9 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-slate-500 hover:text-white hover:rotate-[720deg] transition-all"
                  >
                    <FaEye />
                  </Link>
                  <li
                    onClick={() => add_cart(p._id)}
                    className="w-9 h-9 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-slate-500 hover:text-white hover:rotate-[720deg] transition-all"
                  >
                    <FaShoppingCart />
                  </li>
                </ul>
              </div>
              <div className="py-3 text-slate-600 px-2 ">
                <h2 className="font-bold">{p.name}</h2>
                <div className="flex justify-start items-start gap-3">
                  <span className="text-md font-semibold">{p.price}</span>
                  <div className="flex">
                    <Rating rating={p.rating} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureProducts;
