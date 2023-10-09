import { Link, useLocation } from "react-router-dom";
import { BiArrowFromRight } from "react-icons/bi";
import { ReactNode, useState } from "react";
import { SidebarLinks } from "../../constants/dashboard";
import { useAppSelector } from "../../redux/hooks";

type IProps = {
  children: ReactNode;
};

const Sidebar = ({ children }: IProps) => {
  const [open, setOpen] = useState(false);
  const location = useLocation().pathname;
  const { role } = useAppSelector((state) => state?.auth?.user);
  const sidebarLinks = SidebarLinks(location, role);

  return (
    <div className="flex px-2 py-6">
      {/* sidebar */}
      <div
        className={`${
          open ? "w-44" : "w-8"
        } relative bg-base-300 h-[88dvh] px-1 duration-300 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] rounded-lg`}
      >
        {/* sidebar collapse button */}
        <div
          className={`flex ${
            !open && "flex-col"
          } items-center justify-around px-2 pt-4`}
        >
          <BiArrowFromRight
            className={`cursor-pointer text-xl md:text-3xl duration-500 ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* sidebar menu items */}
        <div className="mt-6 overflow-y-auto text-center">
          {sidebarLinks?.map((link) => (
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
              {open && (
                <span className={`${open ? "text-sm" : "text-[6px]"}`}>
                  {link.label}
                </span>
              )}
            </Link>
          ))}
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
