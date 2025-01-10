import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-400">
      <div className="w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6">
        {/* // */}
        <div className="w-3/12 lg:w-4/12 sm:w-full">
          <div className="flex flex-col gap-3">
            <img
              className="w-48 h-16"
              src={`http://localhost:5173/logo.png`}
              alt=""
            />
            <ul className="flex flex-col gap-2 text-slate-600">
              <li>Address: 94464 Easter Motorway, Julianburgh, ND 94979 </li>
              <li>Phone Number: +26-555-4555</li>
              <li>Email: Jmart@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* // */}
        <div className="w-5/12 lg:w-8/12 sm:w-full">
          <div className="flex justify-center sm:justify-start sm:mt-6 w-full">
            <div className="">
              <h2 className="font-bold text-lg mb-2">Useful Links</h2>
              <div className="flex text-slate-600 font-semibold justify-between gap-20 lg:gap-10">
                <ul className="flex flex-col gap-2 to-slate-600 text-sm">
                  <li>
                    <Link>About Us</Link>
                  </li>
                  <li>
                    <Link>About Our Shop</Link>
                  </li>
                  <li>
                    <Link>Shipping Policy</Link>
                  </li>
                  <li>
                    <Link>Privacy Policys</Link>
                  </li>
                  <li>
                    <Link>Blogs</Link>
                  </li>
                </ul>

                <ul className="flex flex-col gap-2 to-slate-600 text-sm">
                  <li>
                    <Link>Our Services</Link>
                  </li>
                  <li>
                    <Link>Company Profile</Link>
                  </li>
                  <li>
                    <Link>Cancellation Policy</Link>
                  </li>
                  <li>
                    <Link>Return Policys</Link>
                  </li>
                  <li>
                    <Link>Our Sellers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/12 lg:w-full lg:mt-6">
          <div className="w-full flex flex-col justify-start gap-5">
            <h2 className="text-lg mb-2 font-bold">Sign up For Offers</h2>
            <span>Get Email updates about offers and discount</span>
            <div className="h-12 w-full bg-white border relative">
              <input
                type="text"
                className="h-full w-full bg-transparent px-3 outline-0 "
                placeholder="Enter Your Email..."
              />
              <button className="h-full text-white uppercase px-4 font-bold text-sm absolute right-0 bg-green-600 ">
                Subscribe
              </button>
            </div>
            <ul className="flex justify-start items-center gap-3">
              <a
                href=""
                className="w-9 h-9 hover: bg-red-400 flex justify-center items-center  rounded-full hover:text-white"
              >
                <li>
                  <FaFacebook />
                </li>
              </a>{" "}
              <a
                href=""
                className="w-9 h-9 hover: bg-red-400 flex justify-center items-center  rounded-full hover:text-white"
              >
                <li>
                  <FaGithub />
                </li>
              </a>{" "}
              <a
                href=""
                className="w-9 h-9 hover: bg-red-400 flex justify-center items-center  rounded-full hover:text-white"
              >
                <li>
                  <FaYoutube />
                </li>
              </a>{" "}
              <a
                href=""
                className="w-9 h-9 hover: bg-red-400 flex justify-center items-center  rounded-full hover:text-white"
              >
                <li>
                  <FaInstagram />
                </li>
              </a>
              <a
                href=""
                className="w-9 h-9 hover: bg-red-400 flex justify-center items-center  rounded-full hover:text-white"
              >
                <li>
                  <FaLinkedin />
                </li>
              </a>{" "}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[90%] flx flex-wrap justify-center items-center text-slate-600 mx-auto py-5 text-center">
        <span>Copyright @ {year} All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
