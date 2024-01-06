import {
  AiOutlineBook,
  AiOutlineHistory,
  AiOutlineTrophy,
  AiOutlineUser,
} from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { GiShadowFollower } from "react-icons/gi";
import { SlUserFollowing } from "react-icons/sl";

export const SidebarLinks = (location: string, userRole: string) => {
  const adminDashboardSidebarLinks = [
    {
      id: 1,
      path: "/dashboard",
      icon: <RxAvatar className="text-sm md:text-xl" />,
      label: "Profile",
      isActive: location === "/dashboard",
    },
    {
      id: 2,
      path: "/dashboard/statistics",
      icon: <BiSolidDashboard className="text-sm md:text-xl" />,
      label: "Statistics",
      isActive: location === "/dashboard/statistics",
    },
    {
      id: 3,
      path: "/dashboard/manage-blogs",
      icon: <AiOutlineBook className="text-sm md:text-xl" />,
      label: "Manage Blogs",
      isActive: location === "/dashboard/manage-blogs",
    },
    {
      id: 4,
      path: "/dashboard/manage-users",
      icon: <AiOutlineUser className="text-sm md:text-xl" />,
      label: "Manage Users",
      isActive: location === "/dashboard/manage-users",
    },
    {
      id: 5,
      path: "/dashboard/manage-categories",
      icon: <BiSolidCategory className="text-sm md:text-xl" />,
      label: "Manage Users",
      isActive: location === "/dashboard/manage-categories",
    },
  ];

  const bloggerDashboardSidebarLinks = [
    {
      id: 1,
      path: "/dashboard",
      icon: <RxAvatar className="text-sm md:text-xl" />,
      label: "Profile",
      isActive: location === "/dashboard",
    },
    {
      id: 2,
      path: "/dashboard/my-blogs",
      icon: <AiOutlineBook className="text-sm md:text-xl" />,
      label: "My Blogs",
      isActive: location === "/dashboard/my-blogs",
    },
    {
      id: 3,
      path: "/dashboard/followers",
      icon: <GiShadowFollower className="text-sm md:text-xl" />,
      label: "My Followers",
      isActive: location === "/dashboard/followers",
    },
    {
      id: 4,
      path: "/dashboard/followings",
      icon: <SlUserFollowing className="text-sm md:text-xl" />,
      label: "My Followings",
      isActive: location === "/dashboard/followings",
    },
    {
      id: 5,
      path: "/dashboard/achivements",
      icon: <AiOutlineTrophy className="text-sm md:text-xl" />,
      label: "Achivements",
      isActive: location === "/dashboard/achivements",
    },
    {
      id: 6,
      path: "/dashboard/reading-history",
      icon: <AiOutlineHistory className="text-sm md:text-xl" />,
      label: "Reading History",
      isActive: location === "/dashboard/reading-history",
    },
  ];

  const readerDashboardSidebarLinks = [
    {
      id: 1,
      path: "/dashboard",
      icon: <RxAvatar className="text-sm md:text-xl" />,
      label: "Profile",
      isActive: location === "/dashboard",
    },
    {
      id: 2,
      path: "/dashboard/followings",
      icon: <SlUserFollowing className="text-sm md:text-xl" />,
      label: "My Followings",
      isActive: location === "/dashboard/followings",
    },
    {
      id: 3,
      path: "/dashboard/achivements",
      icon: <AiOutlineTrophy className="text-sm md:text-xl" />,
      label: "Achivements",
      isActive: location === "/dashboard/achivements",
    },
    {
      id: 4,
      path: "/dashboard/reading-history",
      icon: <AiOutlineHistory className="text-sm md:text-xl" />,
      label: "Reading History",
      isActive: location === "/dashboard/reading-history",
    },
  ];
  if (userRole === "admin") {
    return adminDashboardSidebarLinks;
  } else if (userRole === "blogger") {
    return bloggerDashboardSidebarLinks;
  } else if (userRole === "reader") {
    return readerDashboardSidebarLinks;
  }
};
