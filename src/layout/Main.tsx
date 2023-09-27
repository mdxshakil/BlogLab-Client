import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useScrollToTop from "../hooks/useScrollToTop";

const Main = () => {
  const { pathname } = useLocation();
  //scroll to top of page
  useScrollToTop(pathname);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
