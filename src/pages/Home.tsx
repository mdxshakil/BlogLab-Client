import BlogCard from "../components/shared/BlogCard";
import Carousel from "../components/homepage/Carousel";
import Sidebar from "../components/shared/Sidebar";

const Home = () => {
  return (
    <div className="pb-12">
      <Carousel />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 w-full">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          {/* pagination start */}
          <div className="flex justify-center">
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
