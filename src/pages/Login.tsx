import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useThemeMode } from "../hooks/useThemeMode";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // apply current theme to the page
  useThemeMode();
  return (
    <section className="min-h-screen flex items-center justify-center">
      {/* <!-- login container --> */}
      <div className="bg-base-300 flex rounded-2xl shadow-lg max-w-3xl p-6 items-center">
        {/* <!-- form --> */}
        <div className="md:w-1/2 px-8 ">
          <h2 className="font-bold text-2xl text-primary">Login</h2>
          <p className="text-xs mt-4 text-primary">
            Already a member? easily login.
          </p>

          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl outline-none focus:outline-primary"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl w-full outline-none focus:outline-primary"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />

              <span
                className="absolute top-1/2 right-3 -translate-y-1/2 text-xl cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="text-red-500" />
                ) : (
                  <AiFillEye className="text-primary" />
                )}
              </span>
            </div>
            <button className="bg-primary rounded-xl text-white py-2 hover:scale-105 duration-300">
              Login
            </button>
          </form>

          <div className="divider">or</div>

          <button className="bg-gray-300 py-2 w-full rounded-xl mt-5 flex justify-center items-center gap-3 text-sm hover:scale-105 duration-300 text-primary">
            <FcGoogle className="text-xl" />
            Login with Google
          </button>

          <div className="mt-5 text-xs py-4 text-primary">
            <a href="#">Forgot your password?</a>
          </div>

          <div className="divider p-0 m-0"></div>

          <div className="mt-3 text-xs flex justify-between items-center text-primary">
            <Link to="/signup">Don't have an account?</Link>
            <button className="btn btn-sm btn-primary border rounded-xl hover:scale-105 duration-300">
              Register
            </button>
          </div>
          <div className="py-3">
            <Link to="/" className="py-2 font-semibold cursor-pointer">
              Back to home
            </Link>
          </div>
        </div>

        {/* <!-- image --> */}
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
