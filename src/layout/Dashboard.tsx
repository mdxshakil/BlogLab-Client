import Navbar from "../components/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";

const Dashboard = () => {
  const { pathname } = useLocation();
  //scroll to top of page
  useScrollToTop(pathname);
  return (
    <div>
      <Navbar />
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
};
export default Dashboard;
