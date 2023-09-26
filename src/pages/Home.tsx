/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "../components/shared/BlogCard";
import Carousel from "../components/homepage/Carousel";
import Sidebar from "../components/shared/Sidebar";
import { useGetPreferredBlogsQuery } from "../redux/features/blog/blogApi";
import { useAppSelector } from "../redux/hooks";

const Home = () => {
  const { id: userId } = useAppSelector((state) => state.auth.user);
  const { data: preferredBlogs } = useGetPreferredBlogsQuery(userId);

  return (
    <div className="pb-12">
      <Carousel />
      <div className="flex flex-col lg:flex-row gap-6">
        <div>
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-3 md:gap-6 w-full px-2 md:px-0">
            {preferredBlogs?.data?.map((blog: any) => (
              <BlogCard key={blog?.id} blog={blog} />
            ))}
          </div>
          {/* pagination start */}
          <div className="flex justify-center mt-6">
            <div className="join">
              <button className="join-item btn bg-base-300">«</button>
              <button className="join-item btn bg-base-300">Page 22</button>
              <button className="join-item btn bg-base-300">»</button>
            </div>
          </div>
          {/* pagination end */}
        </div>
        <Sidebar title="Latest posts" />
      </div>
      {/* planning to add infinite scroll here */}
    </div>
  );
};

export default Home;
