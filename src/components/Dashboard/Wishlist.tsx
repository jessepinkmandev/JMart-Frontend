import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../Rating";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  delete_wishlist,
  get_wishlist,
  messageClear,
} from "../../store/reducers/cartReducer";
import toast from "react-hot-toast";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { wishlist_products, wishlist_products_count, successMessage } =
    useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(get_wishlist(userInfo.id));
  }, []);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
  }, [successMessage]);
  return (
    <div className="w-full grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-6 ">
      {wishlist_products.map((a) => {
        return (
          <div
            className="border group transition-all duration-500 hover:shadow-md hover:-mt-3"
            key={a}
          >
            <div className="relative overflow-hidden">
              {a.discount !== 0 && (
                <div className="flex justify-center items-center absolute text-white w-9 h-9 rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                  {a.discount}%
                </div>
              )}

              <img src={a.images[0]} className="sm:w-full w-full h-80" alt="" />
              <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
                <li
                  onClick={() => dispatch(delete_wishlist(a._id))}
                  className="w-9 h-9 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-slate-500 hover:text-white hover:rotate-[720deg] transition-all"
                >
                  <FaRegHeart />
                </li>
                <Link
                  to={`/product/details/${a.slug}`}
                  className="w-9 h-9 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-slate-500 hover:text-white hover:rotate-[720deg] transition-all"
                >
                  <FaEye />
                </Link>
                <li className="w-9 h-9 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-slate-500 hover:text-white hover:rotate-[720deg] transition-all">
                  <FaShoppingCart />
                </li>
              </ul>
            </div>
            <div className="py-3 text-slate-600 px-2 ">
              <h2 className="font-bold">{a.name}</h2>
              <div className="flex justify-start items-start gap-3">
                <span className="text-md font-semibold">${a.price}</span>
                <div className="flex">
                  <Rating rating={a.rating} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Wishlist;
