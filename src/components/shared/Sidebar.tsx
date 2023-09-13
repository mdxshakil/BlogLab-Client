import CategoryBtn from "../../components/shared/CategoryBtn";
import SidebarBlogCard from "./SidebarBlogCard";
import { ReactNode } from "react";

type IProps = {
  title: string;
  children?: ReactNode;
};

const Sidebar = ({ title, children }: IProps) => {
  return (
    <div className="bg-base-300 w-full lg:w-2/5 h-fit md:h-screen rounded-lg sticky top-0 overflow-y-scroll">
      <div className="p-6">
        {/* profile card */}
        <div>{children}</div>
        <h1 className="text-xl font-semibold mb-3">{title}</h1>
        <div className="flex flex-col gap-4">
          <SidebarBlogCard />
          <SidebarBlogCard />
          <SidebarBlogCard />
          <SidebarBlogCard />
          <SidebarBlogCard />
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-semibold mb-3">Categories</h1>
          <div className=" flex flex-wrap gap-2">
            <CategoryBtn category="nature" />
            <CategoryBtn category="art" />
            <CategoryBtn category="educational" />
            <CategoryBtn category="programming" />
            <CategoryBtn category="development" />
            <CategoryBtn category="craft" />
            <CategoryBtn category="travel" />
            <CategoryBtn category="other" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
