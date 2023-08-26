import Navbar from "../components/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
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