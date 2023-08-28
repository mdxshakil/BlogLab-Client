import { Link, useLocation } from "react-router-dom";
import { BiArrowFromRight, BiSolidDashboard, BiLogOut } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { ReactNode, useState } from "react";
import logo from "../../assets/images/brand-icon.png";

type IProps = {
  children: ReactNode;
};

const Sidebar = ({ children }: IProps) => {
  const [open, setOpen] = useState(false);
  const location = useLocation().pathname;

  const dashboardSideBarLinks = [
    {
      id: 1,
      path: "/dashboard",
      icon: <BiSolidDashboard className="text-xl" />,
      label: "Dashboard",
      isActive: location === "/dashboard",
    },
    {
      id: 2,
      path: "/dashboard/profile",
      icon: <RxAvatar className="text-xl" />,
      label: "Profile",
      isActive: location === "/dashboard/profile",
    },
  ];

  return (
    <div className="flex px-2 gap-2">
      {/* sidebar */}
      <div
        className={`${
          open ? "w-44" : "w-16"
        } relative bg-base-300 h-[88dvh] px-1 duration-300 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] rounded-lg`}
      >
        {/* sidebar logo and collapse button */}
        <div
          className={`flex ${
            !open && "flex-col"
          } gap-4 items-center justify-around px-2 pt-4`}
        >
          <Link to={"/"}>
            <img
              src={logo}
              className="cursor-pointer duration-500 w-10 filter dark:invert dark:hue-rotate-180"
            />
          </Link>
          <BiArrowFromRight
            className={`cursor-pointer text-3xl duration-500 ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* sidebar menu items */}
        <div className="mt-6 overflow-y-auto text-center">
          {dashboardSideBarLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`flex items-center ${
                open ? "justify-start" : "justify-center flex-col"
              } gap-x-2 py-2 px-2 rounded-md cursor-pointer hover:bg-base-200 text-gray-500 dark:text-gray-300 mb-2 ${
                link.isActive && "bg-base-200"
              }`}
            >
              {link.icon}
              <span className={`${open ? "text-sm" : "text-[9px]"}`}>
                {link.label}
              </span>
            </Link>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 p-2 w-full">
          <button className="btn btn-sm w-full border-[1px] hover:border-red-700">
            <BiLogOut className="text-2xl text-red-700" />
            <span className={`${!open && "hidden"}`}>Logout</span>
          </button>
        </div>
      </div>

      {/* content goes here */}
      <div className="bg-base-200 rounded-lg h-[88dvh] w-full overflow-y-auto ">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
