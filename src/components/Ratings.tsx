import { useState } from "react";
import Pagination from "./Pagination";
import Rating from "./Rating";
import RatingTemp from "./RatingTemp";
import { Link } from "react-router-dom";
import RatingReact from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Ratings = () => {
  const [perPage, setPerPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [rate, setRate] = useState("");
  const [review, setReview] = useState("");
  const userInfo = {};

  return (
    <div className="mt-8 ">
      <div className="flex gap-10 md-lg:flex-col">
        <div className="flex flex-col gap-2 justify-start items-start pt-4">
          <div className="">
            <span className="text-6xl font-semibold">4.5</span>
            <span className="text-3xl text-slate-600 font-semibold">/5</span>
          </div>
          <div className="flex text-3xl">
            <Rating rating="4.5" />
          </div>
          <p className="text-sm text-slate-600">15 Reviews</p>
        </div>
        <div className="flex gap-2 flex-col py-4">
          <div className="flex justify-start items-center gap-5">
            <div className="text-md flex gap-1 w-24">
              <RatingTemp rating={5} />
            </div>

            <div className="w-52 h-4 bg-slate-200 relative">
              <div className="h-full bg-yellow-400 w-[60%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">10</p>
          </div>

          <div className="flex justify-start items-center gap-5">
            <div className="text-md flex gap-1 w-24">
              <RatingTemp rating={4} />
            </div>

            <div className="w-52 h-4 bg-slate-200 relative">
              <div className="h-full bg-yellow-400 w-[70%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">20</p>
          </div>

          <div className="flex justify-start items-center gap-5">
            <div className="text-md flex gap-1 w-24">
              <RatingTemp rating={3} />
            </div>

            <div className="w-52 h-4 bg-slate-200 relative">
              <div className="h-full bg-yellow-400 w-[50%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">16</p>
          </div>

          <div className="flex justify-start items-center gap-5">
            <div className="text-md flex gap-1 w-24">
              <RatingTemp rating={2} />
            </div>

            <div className="w-52 h-4 bg-slate-200 relative">
              <div className="h-full bg-yellow-400 w-[30%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">6</p>
          </div>

          <div className="flex justify-start items-center gap-5">
            <div className="text-md flex gap-1 w-24">
              <RatingTemp rating={1} />
            </div>

            <div className="w-52 h-4 bg-slate-200 relative">
              <div className="h-full bg-yellow-400 w-[20%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">4</p>
          </div>
        </div>
      </div>

      <h2 className="text-slate-600 text-xl font-bold py-5">
        Product Reviews (10)
      </h2>
      <div className="flex flex-col gap-8 py-10 ">
        {Array.from({ length: 6 }).map((a) => (
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <div className="flex gap-1 text-xl">
                <Rating rating="4" />
              </div>
              <span className="text-slate-600">8 Feb 2024</span>
            </div>
            <span className="text-slate-600 text-md ">Jesse Pinkman</span>
            <p className="text-slate-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              fugiat sit, commodi minima laborum quos ab pariatur neque,
              nesciunt quia corporis esse officia. Cupiditate, suscipit odio
              modi similique tenetur ullam.
            </p>
          </div>
        ))}
        <div className="flex justify-end">
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalItem={10}
            perPage={perPage}
            showItem={Math.floor(10 / 3)}
          />
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
            <form>
              <textarea
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
