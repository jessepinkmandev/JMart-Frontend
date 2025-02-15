import { FaBorderAll, FaHeart, FaList } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosHome, IoMdLogOut } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";

const UserDashboard = () => {
  const [filterShow, setFilterShow] = useState(false);

  return (
    <div>
      <Header />
      <div className="bg-slate-300 mt-5">
        <div className="w-[90%] mx-auto md-lg:block hidden ">
          <div className="">
            <button
              onClick={() => setFilterShow(!filterShow)}
              className="text-center py-3 px-3 bg-slate-400 text-white"
            >
              <FaList />
            </button>
          </div>
        </div>
        <div className="h-full mx-auto ">
          <div className="py-5 flex md-lg:w-[90%] mx-auto relative">
            <div
              className={`rounded-md w-64 ml-4 bg-white z-50 md-lg:absolute ${
                filterShow ? "-left-4" : "-left-[360px]  "
              }`}
            >
              <ul className="py-2 text-slate-600 px-4">
                <li className="flex justify-start items-center gap-2 py-2">
                  <span className="text-xl">
                    <IoIosHome />
                  </span>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                {/* / */}
                <li className="flex justify-start items-center gap-2 py-2">
                  <span className="text-xl">
                    <FaBorderAll />
                  </span>
                  <Link to="/dashboard/my-orders">My Orders</Link>
                </li>
                {/* / */}
                <li className="flex justify-start items-center gap-2 py-2">
                  <span className="text-xl">
                    <FaHeart />
                  </span>
                  <Link to="/dashboard/my-wishlist">Wishlist</Link>
                </li>
                {/* / */}
                <li className="flex justify-start items-center gap-2 py-2">
                  <span className="text-xl">
                    <IoChatbubbleEllipsesSharp />
                  </span>
                  <Link to="/dashboard/chat">Chat</Link>
                </li>
                {/* / */}
                <li className="flex justify-start items-center gap-2 py-2">
                  <span className="text-xl">
                    <RiLockPasswordLine />
                  </span>
                  <Link to="/dashboard/change-password">Change Password</Link>
                </li>
                {/* / */}
                <li className="flex justify-start items-center gap-2 py-2">
                  <span className="text-xl">
                    <IoMdLogOut />
                  </span>
                  <Link to="/dashboard">Logout</Link>
                </li>
                {/* / */}
              </ul>
            </div>
            <div className="w-[calc(100%-270px)] md-lg:w-full">
              <div className="mx-4 md-lg:mx-0">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
