/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undefined */
import { AiFillClockCircle } from "react-icons/ai";
import { useGetLatestBlogsQuery } from "../../redux/features/blog/blogApi";
import BlogCardVertical from "../BlogCardVertical";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function RecentPosts() {
  const { data: blogs, isLoading, isError } = useGetLatestBlogsQuery(undefined);

  let content;
  if (isLoading) {
    return <LoadingSpinner />;
  } else if (!isLoading && isError) {
    content = <p className="text-error">There was an error</p>;
  } else if (!isLoading && !isError && blogs?.data?.length === 0) {
    content = <p className="text-error">No result available</p>;
  } else if (!isLoading && !isError && blogs?.data?.length > 0) {
    content = blogs?.data?.map((blog: any) => (
      <BlogCardVertical key={blog?.id} blog={blog} />
    ));
  }
  return (
    <div className="mt-24 md:my-48">
      <h2 className="font-bold md:text-3xl text-lg mb-6 flex items-center gap-2">
        Most Recent Posts and Articles
        <AiFillClockCircle className="text-primary h-6 w-6"/>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {content}
      </div>
    </div>
  );
}
