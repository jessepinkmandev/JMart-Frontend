import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaList,
  FaLock,
  FaPhone,
  FaPhoneAlt,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const style = {
  li: `flex relative justify-center items-center gap-2 text-sm after:absolute after:h-4 after:w-0.5 after:bg-[#afafaf] after:-right-4`,
};

const Header = ({ categorys }) => {
  const { pathname } = useLocation();
  const user = true;
  const [showSidebar, setShowSidebar] = useState(true);
  const [categoryShow, setCategoryShow] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const wishlist_count = 4;

  return (
    <div className="w-full ">
      <div className="bg-[#caddff] md-lg:hidden">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="flex w-full justify-between items-center h-12 text-slate-500">
            <ul className="flex justify-start items-center gap-8 font-semibold text-black">
              <li className={style.li}>
                <span>
                  <MdEmail />
                </span>
                <span>Support@gmail.com</span>
              </li>

              <li className={style.li}>
                <span>
                  <MdPhone />
                </span>
                <span>+(56)-324-9522</span>
              </li>
            </ul>

            <div className="">
              <div className="flex justify-center items-center gap-10">
                <div className="flex justify-center items-center gap-4 text-black">
                  <a href="">
                    <FaFacebook />
                  </a>

                  <a href="">
                    <FaTwitter />
                  </a>

                  <a href="">
                    <FaGithub />
                  </a>

                  <a href="">
                    <FaLinkedin />
                  </a>
                </div>

                <div className="flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-4 after:w-0.5 after:bg-[#afafaf] after:-right-4 after:absolute before:absolute before:h-4 before:w-0.5 before:bg-[#afafaf] before:-left-5 ">
                  <img
                    className="h-4 w-4 rounded-full"
                    src="https://picsum.photos/200/300/?blur"
                    alt=""
                  />
                  <span>
                    <IoMdArrowDropdown />
                  </span>

                  <ul className="absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-24 flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10">
                    <li>Hindi</li>
                    <li>English</li>
                  </ul>
                </div>
                {user ? (
                  <Link
                    to="/dashboard"
                    className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black"
                  >
                    <span>
                      <FaUser />
                    </span>
                    <span>Jesse</span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black"
                  >
                    <span>
                      <FaLock />
                    </span>
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-white">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap">
            <div className="md-lg:w-full w-3/12 md-lg:pt-4">
              <div className="flex justify-between items-center">
                <Link to="/">
                  <img
                    className="w-8 h-8"
                    src="https://picsum.photos/200/300/?blur"
                    alt=""
                  />
                </Link>
                <div
                  className="justify-center items-center w-[30px] h-[30px] bg-white text-slate-600 border border-slate-600 rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden"
                  onClick={() => setShowSidebar(false)}
                >
                  <span>
                    <FaList />
                  </span>
                </div>
              </div>
            </div>

            <div className="md-lg:w-full w-9/12">
              <div className="flex justify-between md-lg:justify-center items-center flex-wrap pl-8">
                <ul className="flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden">
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/" ? "text-red-600" : "text-slate-600"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop"
                      className={`p-2 block ${
                        pathname === "/shop" ? "text-red-600" : "text-slate-600"
                      }`}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/blog" ? "text-red-600" : "text-slate-600"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/aboutus"
                          ? "text-red-600"
                          : "text-slate-600"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/contactus"
                          ? "text-red-600"
                          : "text-slate-600"
                      }`}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>

                <div className="flex md-lg:hidden justify-center items-center gap-5 ">
                  <div className="flex justify-center gap-5">
                    <div className="relative flex justify-center items-center cursor-pointer w-9 h-9 rounded-full bg-slate-200">
                      <span className="text-xl text-green-500">
                        <AiFillHeart />
                      </span>
                      <div className="w-5 h-5 absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-1 -right-1">
                        {wishlist_count}
                      </div>
                    </div>

                    <div className="relative flex justify-center items-center cursor-pointer w-9 h-9 rounded-full bg-slate-200">
                      <span className="text-xl text-green-500">
                        <FaShoppingCart />
                      </span>
                      <div className="w-5 h-5 absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-1 -right-1">
                        {wishlist_count}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md-lg:block ">
        <div
          onClick={() => setShowSidebar(true)}
          className={`fixed duration-200 transition-all ${
            showSidebar ? "invisible" : "visible"
          } hidden md-lg:block bg-[rgba(0,0,0,0.5)] w-screen h-screen top-24 left-0 z-20`}
        ></div>
        <div
          className={`w-72 z-[999] transition-all duration-200 fixed ${
            showSidebar ? "-left-72" : "left-0 top-0"
          } overflow-auto bg-white h-screen py-6 px-8`}
        >
          <div className="flex justify-start flex-col gap-6">
            <Link to="/">
              <img
                className="w-8 h-8"
                src="https://picsum.photos/200/300/?blur"
                alt=""
              />
            </Link>
            <div className="flex justify-start items-center gap-10">
              <div className="flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-4 after:w-0.5 after:bg-[#afafaf] after:-right-4 after:absolute  ">
                <img
                  className="h-4 w-4 rounded-full"
                  src="https://picsum.photos/200/300/?blur"
                  alt=""
                />
                <span>
                  <IoMdArrowDropdown />
                </span>

                <ul className="absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-24 flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10">
                  <li>Hindi</li>
                  <li>English</li>
                </ul>
              </div>
              {user ? (
                <Link
                  to="/dashboard"
                  className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black"
                >
                  <span>
                    <FaUser />
                  </span>
                  <span>Jesse</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black"
                >
                  <span>
                    <FaLock />
                  </span>
                  <span>Login</span>
                </Link>
              )}
            </div>
            <ul className="flex flex-col justify-start items-start gap-2 text-sm font-bold uppercase ">
              <li>
                <Link
                  className={`p-2 block ${
                    pathname === "/" ? "text-red-600" : "text-slate-600"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className={`p-2 block ${
                    pathname === "/shop" ? "text-red-600" : "text-slate-600"
                  }`}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className={`p-2 block ${
                    pathname === "/blog" ? "text-red-600" : "text-slate-600"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={`p-2 block ${
                    pathname === "/aboutus" ? "text-red-600" : "text-slate-600"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={`p-2 block ${
                    pathname === "/contactus"
                      ? "text-red-600"
                      : "text-slate-600"
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="flex  justify-start items-center gap-4 text-black">
              <a href="">
                <FaFacebook />
              </a>

              <a href="">
                <FaTwitter />
              </a>

              <a href="">
                <FaGithub />
              </a>

              <a href="">
                <FaLinkedin />
              </a>
            </div>
            <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center ">
              <div className="w-12 h-12 rounded-full flex bg-slate-300 justify-center items-center">
                <span>
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="flex flex-col gap-1 justify-end">
                <h2 className="text-sm font-medium">+365-(3434)-455</h2>
                <span className="text-sm">Support 24/7</span>
              </div>
            </div>
            <ul className="flex flex-col justify-start items-start gap-3 text-black">
              <li className="flex  justify-start items-center gap-2 ">
                <span>
                  <MdEmail />
                </span>
                <span>Support@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[85%] lg:w-[90%] mx-auto">
        <div className="flex w-full flex-wrap md-lg:gap-8">
          <div className="w-3/12 md-lg:w-full">
            <div className="bg-slate-400 relative">
              <div
                onClick={() => setCategoryShow(!categoryShow)}
                className="h-12 bg-slate-400 text-white flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer"
              >
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <FaList />
                  </span>
                  <span>All Category</span>
                </div>
                <span className="pt-1">
                  <IoIosArrowDown />
                </span>
              </div>
              <div
                className={`${
                  categoryShow
                    ? "h-0"
                    : "h-[400px] overflow-hidden transition-all md-lg:relative duration-500 absolute z-[99999] bg-slate-300 w-full border-x"
                }`}
              >
                <ul
                  className={`${
                    categoryShow ? "hidden" : "visible"
                  } py-2 transition-all duration-700 text-slate-600 font-medium text-sm block `}
                >
                  {categorys.map((c, i) => {
                    return (
                      <li
                        key={i}
                        className="flex justify-start items-center gap-2 px-8 py-1.5"
                      >
                        <img
                          className="rounded-full w-8 h-8"
                          src={c.image}
                          alt=""
                        />
                        <Link>{c.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* // */}
          <div className="w-9/12 pl-8 md-lg:pl-0 md-lg:w-full ">
            <div className="flex flex-wrap w-full justify-between items-center md-lg:gap-6 ">
              <div className="w-8/12 md-lg:w-full">
                <div className="flex border h-12 items-center relative gap-6 ">
                  <div className="relative after:absolute after:h-6 after:w-[1px] after:bg-slate-400 after:-right-4 md:hidden">
                    <select
                      onChange={(e) => setCategorySearch(e.target.value)}
                      className="w-40 text-slate-600 font-semibold bg-transparent px-2 h-full outline-0 border-none"
                      name=""
                      id=""
                    >
                      <option value="">Select Category</option>
                      {categorys.map((c, i) => (
                        <option value={i}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  <input
                    className="w-full relative bg-transparent text-slate-500 outline-0 px-3 h-full"
                    placeholder="Search Here..."
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text"
                    name=""
                    id=""
                  />
                  <button className="bg-blue-400 right-0 absolute px-8 h-full font-semibold text-white uppercase">
                    Search
                  </button>
                </div>
              </div>
              {/* // */}
              <div className="w-4/12 block md-lg:hidden pl-2 md-lg:w-full md-lg:pl-0 ">
                <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center ">
                  <div className="w-12 h-12 rounded-full flex bg-slate-300 justify-center items-center">
                    <span>
                      <FaPhoneAlt />
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 justify-end">
                    <h2 className="text-sm font-medium">+365-(3434)-455</h2>
                    <span className="text-sm">Support 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
