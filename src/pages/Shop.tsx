import { IoIosArrowForward } from "react-icons/io";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Range } from "react-range";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import Products from "../components/Products";
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import ShopProducts from "../components/ShopProducts";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  price_range_products,
  query_products,
} from "../store/reducers/homeReducer";

const Shop = () => {
  // get state
  const {
    categorys,
    priceRange,
    latest_product,
    totalProduct,
    products,
    perPage,
  } = useSelector((state) => state.home);
  // states

  const [filter, setFilter] = useState(true);
  const [rating, setRating] = useState(0);
  const [styles, setStyles] = useState("grid");
  const [state, setState] = useState({
    values: [priceRange.low, priceRange.high],
  });

  // const [perPage, setPerPage] = useState(1);

  const [pageNumber, setPageNumber] = useState(1);

  const [category, setCategory] = useState("");

  const [sortPrice, setSortPrice] = useState("");

  // use effects
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(price_range_products());
  }, []);

  useEffect(() => {
    dispatch(
      query_products({
        low: state.values[0],
        high: state.values[1],
        category,
        rating,
        sortPrice,
        pageNumber,
      })
    );
  }, [
    state.values[0],
    state.values[1],
    category,
    rating,
    sortPrice,
    pageNumber,
  ]);

  useEffect(() => {
    setState({
      values: [priceRange.low, priceRange.high],
    });
  }, [priceRange]);

  // additional functions

  const queryCategory = (e, value) => {
    if (e.target.checked) {
      setCategory(value);
    } else {
      setCategory("");
    }
  };

  // const categorys = [
  //   "Phone",
  //   "Laptop",
  //   "Watch",
  //   "Earphones",
  //   "Books",
  //   "Charger",
  //   "Earbuds",
  //   "Neckband",
  // ];

  return (
    <div>
      <Header />
      <section className="h-56 mt-6 bg-cover bg-no-repeat relative bg-left bg-[url('http://localhost:5173/banner/shop.png')]">
        <div className="absolute top-0 left-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center w-full h-full text-white">
              <h2 className="text-3xl font-bold">Shop Page</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full ">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>
                <span>Shop </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <div className={`md:block hidden ${!filter ? "mb-6" : "mb-0"}`}>
            <button
              onClick={() => setFilter(!filter)}
              className="text-center w-full py-2 px-3 bg-indigo-500 text-white"
            >
              Filter Button
            </button>
          </div>
          <div className="w-full flex flex-wrap ">
            <div
              className={`w-3/12 md-lg:w-4/12 md:w-full pr-8 ${
                filter
                  ? "md:h-0 md:overflow-hidden md:mb-6"
                  : "md:h-auto md:overflow-auto md:mb-0"
              }`}
            >
              <h2 className="text-3xl font-bold mb-3 text-slate-600">
                Category
              </h2>
              <div className="py-2 ">
                {categorys.map((c, i) => (
                  <div key={i} className="flex justify-start gap-2 py-1">
                    <input
                      checked={category === c.name ? true : false}
                      onChange={(e) => queryCategory(e, c.name)}
                      type="checkbox"
                      id={c.name}
                    />
                    <label
                      className="text-slate-600 block cursor-pointer"
                      htmlFor={c.name}
                    >
                      {c.name}
                    </label>
                  </div>
                ))}
              </div>
              <div className="py-2 flex flex-col gap-5">
                <h2 className="text-3xl font-bold mb-3 text-slate-600">
                  Price
                </h2>
                <Range
                  renderTrack={({ props, children }) => (
                    <div
                      className="w-full h-1.5 bg-slate-200 cursor-pointer rounded-full"
                      {...props}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div {...props} className="w-4 h-4 bg-blue-400"></div>
                  )}
                  onChange={(values) => setState({ values })}
                  step={100}
                  min={priceRange.low}
                  max={priceRange.high}
                  values={state.values}
                />
                <div>
                  <span className="text-slate-800 font-bold text-lg">
                    ${Math.floor(state.values[0])} - $
                    {Math.floor(state.values[1])}
                  </span>
                </div>
              </div>
              <div className="py-3 flex flex-col gap-4">
                <h2 className="font-bold mb-3 text-slate-600 text-2xl">
                  Rating
                </h2>
                <div className="flex flex-col gap-3">
                  <div
                    onClick={() => setRating(5)}
                    className="text-orange-500 flex justify-start items-start gap-2 text-xl "
                  >
                    {[0, 1, 2, 3, 4].map((a) => (
                      <span>
                        <AiFillStar />
                      </span>
                    ))}
                  </div>

                  <div
                    onClick={() => setRating(4)}
                    className="text-orange-500 flex justify-start items-start gap-2 text-xl "
                  >
                    {[0, 1, 2, 3].map((a) => (
                      <span>
                        <AiFillStar />
                      </span>
                    ))}
                    <span>
                      <CiStar />
                    </span>
                  </div>

                  <div
                    onClick={() => setRating(3)}
                    className="text-orange-500 flex justify-start items-start gap-2 text-xl "
                  >
                    {[0, 1, 2].map((a) => (
                      <span>
                        <AiFillStar />
                      </span>
                    ))}
                    {[0, 1].map((a) => (
                      <span>
                        <CiStar />
                      </span>
                    ))}
                  </div>

                  <div
                    onClick={() => setRating(2)}
                    className="text-orange-500 flex justify-start items-start gap-2 text-xl "
                  >
                    {[0, 1].map((a) => (
                      <span>
                        <AiFillStar />
                      </span>
                    ))}
                    {[0, 1, 2].map((a) => (
                      <span>
                        <CiStar />
                      </span>
                    ))}
                  </div>
                  <div
                    onClick={() => setRating(1)}
                    className="text-orange-500 flex justify-start items-start gap-2 text-xl "
                  >
                    {[0].map((a) => (
                      <span>
                        <AiFillStar />
                      </span>
                    ))}
                    {[0, 1, 2, 3].map((a) => (
                      <span>
                        <CiStar />
                      </span>
                    ))}
                  </div>
                  <div className="text-orange-500 flex justify-start items-start gap-2 text-xl ">
                    {[0, 1, 2, 3, 4].map((a) => (
                      <span>
                        <CiStar />
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="py-5 flex flex-col gap-4 md:hidden">
                <div className="overflow-hidden">
                  <Products title="Latest Products" products={latest_product} />
                </div>
              </div>
            </div>

            <div className="w-9/12 md-lg:w-8/12 md:w-full">
              <div className="pl-8 md:pl-0">
                <div className="py-4 bg-white mb-10 px-3 rounded-md flex justify-between items-start border">
                  <h2 className="text-lg font-medium text-slate-600 ">
                    14 Products
                  </h2>
                  <div className="flex justify-center items-center gap-3">
                    <select
                      onChange={(e) => setSortPrice(e.target.value)}
                      className="p-1 border outline-0 text-slate-600 font-semibold"
                      name=""
                      id=""
                    >
                      <option value="">Sort By</option>
                      <option value="low-to-high">Low to High Price</option>
                      <option value="high-to-low">High to Low Price</option>
                    </select>
                    <div className="flex justify-center items-start gap-4 md-lg:hidden">
                      <div
                        onClick={() => setStyles("grid")}
                        className={`p-2 ${
                          styles === "grid" && "bg-slate-300"
                        } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                      >
                        <BsFillGridFill />
                      </div>
                      <div
                        onClick={() => setStyles("list")}
                        className={`p-2 ${
                          styles === "list" && "bg-slate-300"
                        } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                      >
                        <FaThList />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-8 ">
                  <ShopProducts products={products} styles={styles} />
                </div>
                <div>
                  {totalProduct > perPage && (
                    <Pagination
                      pageNumber={pageNumber}
                      setPageNumber={setPageNumber}
                      totalItem={totalProduct}
                      perPage={perPage}
                      showItem={Math.floor(totalProduct / perPage)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shop;
