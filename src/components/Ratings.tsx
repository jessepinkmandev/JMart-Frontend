import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Rating from "./Rating";
import RatingTemp from "./RatingTemp";
import { Link } from "react-router-dom";
import RatingReact from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  customer_review,
  get_review,
  messageClear,
  product_details,
} from "../store/reducers/homeReducer";
import toast from "react-hot-toast";

const Ratings = ({ product }) => {
  const [perPage, setPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [rate, setRate] = useState("");
  const [review, setReview] = useState("");
  // const userInfo = {};

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const { successMessage } = useSelector((state) => state.home);
  const { totalReview, rating_review, reviews } = useSelector(
    (state) => state.home
  );
  const review_submit = (e) => {
    e.preventDefault();

    const obj = {
      name: userInfo.name,
      review,
      rate,
      productId: product._id,
    };

    dispatch(customer_review(obj));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(
        get_review({
          productId: product._id,
          pageNumber: pageNumber,
        })
      );
      dispatch(product_details(product.slug));

      setRate("");
      setReview("");
      dispatch(messageClear());
    }
  }, [successMessage]);
  console.log(rating_review[0]);

  useEffect(() => {
    if (product._id) {
      dispatch(
        get_review({
          productId: product._id,
          pageNumber: pageNumber,
        })
      );
    }
  }, [pageNumber, product]);

  return (
    <div className="mt-8 ">
      <div className="flex gap-10 md-lg:flex-col">
        <div className="flex flex-col gap-2 justify-start items-start pt-4">
          <div className="">
            <span className="text-6xl font-semibold">{product.rating}</span>
            <span className="text-3xl text-slate-600 font-semibold">/5</span>
          </div>
          <div className="flex text-3xl">
            <Rating rating={product.rating} />
          </div>
          <p className="text-sm text-slate-600">({totalReview}) Reviews</p>
        </div>
        <div className="flex gap-2 flex-col py-4">
          <div className="flex justify-start items-center gap-5">
            <div className="text-md flex gap-1 w-24">
              <RatingTemp rating={5} />
            </div>

            <div className="w-52 h-4 bg-slate-200 relative">
              <div
                style={{
                  width: `${Math.floor(
                    (100 * rating_review[0]?.sum || 0) / totalReview
                  )}%`,
                }}
                className="h-full bg-yellow-400 w-[60%]"
              ></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">
              {" "}
              {rating_review[0]?.sum}
            </p>
          </div>

          <div className="flex justify-start items-center gap-5">
            <div className="text-md flex gap-1 w-24">
              <RatingTemp rating={4} />
            </div>

            <div className="w-52 h-4 bg-slate-200 relative">
              <div
                style={{
                  width: `${Math.floor(
                    (100 * rating_review[1]?.sum || 0) / totalReview
                  )}%`,
                }}
                className="h-full bg-yellow-400 w-[70%]"
              ></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">
              {rating_review[1]?.sum}
            </p>
          </div>

          <div className="flex justify-start items-center gap-5">
            <div className="text-md flex gap-1 w-24">
              <RatingTemp rating={3} />
            </div>

            <div className="w-52 h-4 bg-slate-200 relative">
              <div
                style={{
                  width: `${Math.floor(
                    (100 * rating_review[2]?.sum || 0) / totalReview
                  )}%`,
                }}
                className="h-full bg-yellow-400 w-[50%]"
              ></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">
              {rating_review[2]?.sum}
            </p>
          </div>

          <div className="flex justify-start items-center gap-5">
            <div className="text-md flex gap-1 w-24">
              <RatingTemp rating={2} />
            </div>

            <div className="w-52 h-4 bg-slate-200 relative">
              <div
                style={{
                  width: `${Math.floor(
                    (100 * rating_review[3]?.sum || 0) / totalReview
                  )}%`,
                }}
                className="h-full bg-yellow-400 w-[30%]"
              ></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">
              {rating_review[3]?.sum}
            </p>
          </div>

          <div className="flex justify-start items-center gap-5">
            <div className="text-md flex gap-1 w-24">
              <RatingTemp rating={1} />
            </div>

            <div className="w-52 h-4 bg-slate-200 relative">
              <div
                style={{
                  width: `${Math.floor(
                    (100 * rating_review[4]?.sum || 0) / totalReview
                  )}%`,
                }}
                className="h-full bg-yellow-400 w-[20%]"
              ></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">
              {rating_review[4]?.sum}
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-slate-600 text-xl font-bold py-5">
        Product Reviews ({totalReview})
      </h2>
      <div className="flex flex-col gap-8 py-10 ">
        {reviews.map((a) => (
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <div className="flex gap-1 text-xl">
                <Rating rating={a.rate} />
              </div>
              <span className="text-slate-600">{a.date}</span>
            </div>
            <span className="text-slate-600 text-md ">{a.name}</span>
            <p className="text-slate-600 text-sm">{a.review}</p>
          </div>
        ))}
        <div className="flex justify-end">
          {totalReview > 5 && (
            <Pagination
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalItem={totalReview}
              perPage={perPage}
              showItem={Math.floor(totalReview / 3)}
            />
          )}
        </div>
      </div>
      <div className="">
        {userInfo ? (
          <div className="flex flex-col gap-3">
            <div className="flex gap-1">
              <RatingReact
                initialRating={rate}
                emptySymbol={
                  <span className="text-slate-600 text-4xl ">
                    <CiStar />
                  </span>
                }
                fullSymbol={
                  <span className="text-[#edbb0e] text-4xl ">
                    <FaStar />
                  </span>
                }
                onChange={(e) => setRate(e)}
              />
            </div>
            <form onSubmit={review_submit}>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="border outline-0 p-3 w-full "
                cols={30}
                rows={10}
                required
                name=""
                id=""
              ></textarea>
              <div className="mt-2 mb-12 ">
                <button className="py-1 px-5 bg-indigo-500 text-white rounded-sm">
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="">
            <Link
              to="/login"
              className="py-1 px-5 bg-red-500 text-white rounded-sm"
            >
              Login First
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ratings;
