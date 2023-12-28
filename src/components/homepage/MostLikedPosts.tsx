/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undefined */
import { useGetMostLikedBlogsQuery } from "../../redux/features/blog/blogApi";
import BlogCardVertical from "../BlogCardVertical";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function MostLikedPosts() {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useGetMostLikedBlogsQuery(undefined);

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
    <div className="my-12 md:my-24">
      <h2 className="font-bold md:text-2xl text-lg mb-6">Most Liked Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {content}
      </div>
    </div>
  );
}
