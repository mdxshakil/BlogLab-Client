/* eslint-disable @typescript-eslint/no-explicit-any */
import CategoryBtn from "../components/shared/CategoryBtn";
import SidebarBlogCard from "../components/shared/SidebarBlogCard";

type IRenderProps = {
  isLoading: boolean;
  isError: boolean;
  data: any;
  whatToRender: "blogs" | "categories";
};

export const renderSidebarContent = ({
  isLoading,
  isError,
  data,
  whatToRender,
}: IRenderProps) => {
  if (isLoading) {
    return (
      <p className="animate-pulse text-secondary">Loading.Please wait.....</p>
    );
  } else if (!isLoading && isError) {
    return <p className="text-error">An error occured!</p>;
  } else if (!isLoading && !isError && data?.length === 0) {
    return <p className="text-primary">Be the first to comment</p>;
  } else if (!isLoading && !isError && data?.length > 0) {
    if (whatToRender === "blogs") {
      return data?.map((blog: any) => (
        <SidebarBlogCard key={blog.id} blog={blog} />
      ));
    }
    if (whatToRender === "categories") {
      return data?.map((category: any) => (
        <CategoryBtn key={category.id} category={category?.title} />
      ));
    }
  }
};
