import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Main from "../layout/Main";
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";
import Dashboard from "../layout/Dashboard";
import Profile from "../pages/dasboard/Profile";
import CreateBlog from "../pages/CreateBlog";
import RequireBlogger from "../components/privateRoute/RequireBlogger";
import ManageBlogs from "../pages/dasboard/admin/ManageBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/:blogId",
        element: <BlogDetails />,
      },
      {
        path: "/create-new-blog",
        element: (
          <RequireBlogger>
            <CreateBlog />
          </RequireBlogger>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "manage-blogs",
        element: <ManageBlogs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
