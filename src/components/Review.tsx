import { useState } from "react";
import Ratings from "./Ratings";

const Review = () => {
  const [state, setState] = useState("reviews");
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
        </div>
      </div>
    </section>
  );
};

export default Review;
