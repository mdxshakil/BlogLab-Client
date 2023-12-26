import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import useGetUserFromStore from "../hooks/useGetUser";

const Main = () => {
  const { role } = useGetUserFromStore();
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
