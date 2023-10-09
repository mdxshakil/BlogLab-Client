import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";

const Main = () => {
  const { role } = useAppSelector((state) => state?.auth?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (role === "admin") {
      navigate("/dashboard");
    }
  }, [role, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Main;
