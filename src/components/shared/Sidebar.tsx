/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllCategoryQuery } from "../../redux/features/category/categoryApi";
import { renderSidebarContent } from "../../utils/renderSidebarContent";
import { ReactNode } from "react";

type IProps = {
  title: string;
  children?: ReactNode;
  blogs?: any;
  isLoading: boolean;
  isError: boolean;
};

const Sidebar = ({ title, children, blogs, isLoading, isError }: IProps) => {
  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetAllCategoryQuery("");

  const sidebarBlogs = renderSidebarContent({
    isLoading,
    isError,
    data: blogs?.data,
    whatToRender: "blogs",
  });
  const sidebarCategories = renderSidebarContent({
    isLoading: categoriesLoading,
    isError: categoriesError,
    data: categories?.data,
    whatToRender: "categories",
  });

  return (
    <div className="bg-base-300 w-full lg:w-[50%] h-fit md:h-screen rounded-lg sticky top-0 overflow-y-scroll">
      <div className="p-6">
        {/* profile card */}
        <div>{children}</div>
        <h1 className="text-xl font-semibold mb-3">{title}</h1>
        <div className="flex flex-col gap-4">{sidebarBlogs}</div>
        <div className="mt-6">
          <h1 className="text-2xl font-semibold mb-3">Categories</h1>
          <div className=" flex flex-wrap gap-2">{sidebarCategories}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
