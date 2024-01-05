import darkLogo from "../assets/images/logo-dark.png";
import lightLogo from "../assets/images/logo-light.png";
import ThemeChanger from "./ThemeChanger";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { userLoggedOut } from "../redux/features/auth/authSlice";
import { BsBookmark, BsPlusCircle } from "react-icons/bs";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const { themeMode } = useAppSelector((state) => state.theme);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    dispatch(userLoggedOut());
    navigate("/");
  };

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 65) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav
      className={`navbar ${
        isScrolling ? "top-0 bg-none backdrop-blur-3xl" : "top-3 bg-base-300"
      }  sticky z-50 rounded-lg px-2 md:px-6`}
    >
      {/* logo */}
      <div className="navbar-start">
        {/* <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu className="h-5 w-5" />
          </label>
        </div> */}
        <Link to="/">
          <img
            src={themeMode === "dark" ? darkLogo : lightLogo}
            alt="BlogLab"
            // className="h-4 w-30 md:h-6 md:w-42"
            className="w-2/3 md:w-2/5"
          />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="flex gap-3 md:gap-4 items-center">
          <ThemeChanger />
          {/* bookmark button */}
          {user.role && user.role !== "admin" && (
            <div>
              <Link to={"/my-bookmarks"}>
                <BsBookmark className="text:lg md:text-xl cursor-pointer" />
              </Link>
            </div>
          )}
          {/* post blog button */}
          {user && user.role === "blogger" && (
            <div>
              <BsPlusCircle
                className="text:lg md:text-xl cursor-pointer"
                onClick={() => navigate("/create-new-blog")}
              />
            </div>
          )}
          {/* profile and login button */}
          {!user.email ? (
            <div>
              <Link to="/login">
                <button className="btn btn-sm btn-primary">Login</button>
              </Link>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className={`btn btn-ghost btn-circle btn-xs md:btn-md avatar border-2 ${
                  user?.role === "reader"
                    ? "border-primary"
                    : user?.role === "blogger"
                    ? "border-secondary"
                    : "border-red-500"
                }`}
              >
                <div className="sm:w-8 md:w-10 rounded-full">
                  <img src={user?.profilePicture} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/dashboard"} className="justify-between">
                    Dashboard
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
