import CategoryBtn from "../../components/shared/CategoryBtn";
import SidebarBlogCard from "./SidebarBlogCard";

type IProps = {
  title: string;
};

const Sidebar = ({ title }: IProps) => {
  return (
    <div className="bg-base-300 w-full lg:w-2/5 rounded-lg h-screen sticky top-0 overflow-y-scroll">
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">{title}</h1>
        <div className="flex flex-col gap-4">
          <SidebarBlogCard />
          <SidebarBlogCard />
          <SidebarBlogCard />
          <SidebarBlogCard />
          <SidebarBlogCard />
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-semibold mb-6">Categories</h1>
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
