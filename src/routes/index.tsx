import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Main from "../layout/Main";
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";
import Dashboard from "../layout/Dashboard";
import CreateBlog from "../pages/CreateBlog";
import RequireBlogger from "../components/privateRoute/RequireBlogger";
import Bookmark from "../pages/Bookmark";
import EditBlog from "../pages/EditBlog";
import ProfilePage from "../pages/dasboard/common/ProfilePage";
import StatisticsPage from "../pages/dasboard/admin/StatisticsPage";
import ManageBlogsPage from "../pages/dasboard/admin/ManageBlogsPage";
import ManageUsersPage from "../pages/dasboard/admin/ManageUsersPage";
import AchivementsPage from "../pages/dasboard/blogger/AchivementsPage";
import ReadingHistoryPage from "../pages/dasboard/common/ReadingHistoryPage";
import MyBlogsPage from "../pages/dasboard/blogger/MyBlogsPage";
import ManageCategoryPage from "../pages/dasboard/admin/ManageCategoryPage";
import RequireAuth from "../components/privateRoute/RequireAuth";

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
      {
        path: "/my-bookmarks",
        element: (
          <RequireBlogger>
            <Bookmark />
          </RequireBlogger>
        ),
      },
      {
        path: "/edit-blog/:blogId",
        element: (
          <RequireBlogger>
            <EditBlog />
          </RequireBlogger>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
    children: [
      {
        path: "",
        element: <ProfilePage />,
      },
      {
        path: "statistics",
        element: <StatisticsPage />,
      },
      {
        path: "manage-blogs",
        element: <ManageBlogsPage />,
      },
      {
        path: "manage-categories",
        element: <ManageCategoryPage />,
      },
      {
        path: "my-blogs",
        element: (
          <RequireBlogger>
            <MyBlogsPage />
          </RequireBlogger>
        ),
      },
      {
        path: "manage-users",
        element: <ManageUsersPage />,
      },
      {
        path: "achivements",
        element: <AchivementsPage />,
      },
      {
        path: "reading-history",
        element: <ReadingHistoryPage />,
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
