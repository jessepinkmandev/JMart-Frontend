import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <Header />
      <div className="bg-slate-200 mt-4">
        <div className="w-full justify-center items-center p-10">
          <div className="grid grid-cols-2 w-[60%] md-lg:w-full mx-auto bg-white rounded-md">
            <div className="px-8 py-8">
              <h2 className="text-center w-full text-xl text-slate-600 font-bold">
                Login Now
              </h2>
              <div className="">
                <form onSubmit={login} className="text-slate-600">
                  <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={inputHandle}
                      value={state.email}
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email..."
                      required
                      className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                    />
                  </div>

                  <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={inputHandle}
                      value={state.password}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password..."
                      required
                      className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                    />
                  </div>
                  <button className="px-8 w-full py-2 bg-green-400 shadow-lg hover:shadow-green-500/40 text-white rounded-md">
                    Login
                  </button>
                </form>
                <div className="flex justify-center items-center py-2">
                  <div className="h-0.5 bg-slate-300 w-[90%]"></div>
                  <span className="px-3 text-slate-600 ">Or</span>
                  <div className="h-0.5 bg-slate-300 w-[90%]"></div>
                </div>

                <button className="px-8 w-full py-2 bg-indigo-500 shadow hover:shadow-indigo-500/50 text-white rounded-md flex justify-center items-center gap-2 mb-3">
                  <span>
                    <FaFacebookF />
                  </span>
                  <span>Login With Facebook</span>
                </button>
                <button className="px-8 w-full py-2 bg-orange-500 shadow hover:shadow-orange-500/50 text-white rounded-md flex justify-center items-center gap-2 mb-3">
                  <span>
                    <FaGoogle />
                  </span>
                  <span>Login With Google</span>
                </button>
              </div>
              <div className="text-center to-slate-600 pt-1 pb-4 ">
                <p>
                  Don't Have an Account?{" "}
                  <Link className="underline text-indigo-500" to="/register">
                    Register
                  </Link>
                </p>
              </div>
            </div>

            <div className="w-full h-full py-4 pr-4">
              <img
                className="mt-16"
                src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg?t=st=1736945058~exp=1736948658~hmac=16443ee7452b52e8672a3cf73591f2c2158963d13f33e433a146c370db750235&w=740"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
