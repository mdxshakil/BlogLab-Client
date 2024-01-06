/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undefined */
import { useGetFeaturedBlogsQuery } from "../../redux/features/blog/blogApi";
import BlogCard from "../shared/BlogCard";
import LoadingSpinner from "../shared/LoadingSpinner";
import SectionTitle from "./SectionTitle";

export default function FeaturedPosts() {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useGetFeaturedBlogsQuery({ skip: 3, limit: 6 });

  let content;
  if (isLoading) {
    return <LoadingSpinner />;
  } else if (!isLoading && isError) {
    content = <p className="text-error">There was an error</p>;
  } else if (!isLoading && !isError && blogs?.data?.length === 0) {
    content = <p className="text-error">No result available</p>;
  } else if (!isLoading && !isError && blogs?.data?.length > 0) {
    content = blogs?.data?.map((blog: any) => (
      <BlogCard key={blog?.id} blog={blog} />
    ));
  }
  return (
    <div className="mb-12 md:mb-16">
      <SectionTitle title="More Featured Blogs" />
      <div className="grid grid-cols-1 gap-3 md:gap-6">{content}</div>
    </div>
  );
}
