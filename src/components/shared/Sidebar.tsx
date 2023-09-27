/* eslint-disable @typescript-eslint/no-explicit-any */
import CategoryBtn from "../../components/shared/CategoryBtn";
import { useGetAllCategoryQuery } from "../../redux/features/category/categoryApi";
import LoadingSpinner from "./LoadingSpinner";
import SidebarBlogCard from "./SidebarBlogCard";
import { ReactNode } from "react";

type IProps = {
  title: string;
  children?: ReactNode;
  blogs?: any;
};

const Sidebar = ({ title, children, blogs }: IProps) => {
  const { data: category, isLoading } = useGetAllCategoryQuery("");

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="bg-base-300 w-full lg:w-2/5 h-fit md:h-screen rounded-lg sticky top-0 overflow-y-scroll">
      <div className="p-6">
        {/* profile card */}
        <div>{children}</div>
        <h1 className="text-xl font-semibold mb-3">{title}</h1>
        <div className="flex flex-col gap-4">
          {blogs?.data?.map((blog: any) => (
            <SidebarBlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-semibold mb-3">Categories</h1>
          <div className=" flex flex-wrap gap-2">
            {category?.data?.map((category: any) => (
              <CategoryBtn key={category.id} category={category?.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
