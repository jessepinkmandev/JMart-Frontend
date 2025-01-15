import { useState } from "react";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Review = () => {
  const [state, setState] = useState("reviews");
  const discount = 10;
  return (
    <section>
      <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] mt-8 h-full pb-16 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-[72%] md-lg:w-full">
            <div className="pr-4 md-lg:pr-0 ">
              <div className="grid grid-cols-2">
                <button
                  onClick={() => setState("reviews")}
                  className={`py-1 hover:text-white px-5 hover:bg-cyan-400
                    ${
                      state === "reviews"
                        ? "bg-blue-400 text-white"
                        : "bg-slate-200 text-slate-700 rounded-sm"
                    } `}
                >
                  Reviews
                </button>
                <button
                  onClick={() => setState("description")}
                  className={`py-1 hover:text-white px-5 hover:bg-cyan-400
                    ${
                      state === "description"
                        ? "bg-blue-400 text-white"
                        : "bg-slate-200 text-slate-700 rounded-sm"
                    } `}
                >
                  Description
                </button>
              </div>
              <div className="">
                {state === "reviews" ? (
                  <Ratings />
                ) : (
                  <p className="py-5 text-slate-700">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Hic et voluptas beatae nam velit numquam facilis at,
                    laboriosam earum cum consectetur reiciendis doloremque rerum
                    doloribus sed modi quidem delectus. Modi?
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-[28%] md-lg:w-full">
            <div className="pl-4 md-lg:pl-0">
              <div className="px-3 py-2 text-slate-600 bg-slate-200">
                <h2 className="font-bold">From J Mart</h2>
              </div>
              <div className="flex flex-col gap-5 mt-3 border p-3">
                {[1, 2, 3].map((a) => (
                  <Link className="block">
                    <div className="relative h-64 ">
                      <img
                        className="w-full h-full"
                        src={`http://localhost:5173/products/${a}.webp`}
                        alt=""
                      />
                      {discount !== 0 && (
                        <div className="flex justify-center items-center absolute text-white w-9 h-9 rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                          {discount}%
                        </div>
                      )}
                    </div>
                    <h2 className="text-slate-600 py-1 font-bold">
                      Product Name
                    </h2>
                    <div className="flex gap-2">
                      <h2 className="text-lg font-bold text-slate-600">$432</h2>
                      <div className="flex items-center ml-4 gap-2">
                        <Rating rating="3" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] mt-8 h-full mx-auto">
        <h2 className="text-2xl py-8 text-slate-600">Related Products</h2>
        <div className="">
          <Swiper
            slidesPerView="auto"
            breakpoints={{
              1280: {
                slidesPerView: 3,
              },
              565: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={25}
            loop={true}
            pagination={{
              clickable: true,
              el: ".custom_bullet",
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6].map((a) => (
              <SwiperSlide key={a}>
                <Link className="block">
                  <div className="relative h-64">
                    <div className="w-full h-full">
                      <img
                        className="w-full h-full"
                        src={`http://localhost:5173/products/${a}.webp`}
                        alt=""
                      />
                      <div className="absolute h-full w-full top-0 left-0 bg-slate-800 opacity-25 hover:opacity-50 transition-all duration-500"></div>
                    </div>
                    {discount !== 0 && (
                      <div className="flex justify-center items-center absolute text-white w-9 h-9 rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                        {discount}%
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <h2 className="text-slate-600 py-1 font-bold">
                      Product Name
                    </h2>
                    <div className="flex gap-2">
                      <h2 className="text-lg font-bold text-slate-600">$432</h2>
                      <div className="flex items-center ml-4 gap-2">
                        <Rating rating="3" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full flex justify-center items-center py-10">
          <div className="custom_bullet justify-center gap-3 !mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Review;
