import BlogCard from "../components/shared/BlogCard";
import Carousel from "../components/homepage/Carousel";
import FeaturedPostCard from "../components/shared/FeaturedPostCard";
import CategoryBtn from "../components/shared/CategoryBtn";

const Home = () => {
  return (
    <div className="pb-12">
      <Carousel />
      <div className="flex flex-col lg:flex-row gap-4 py-12 px-6">
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
        </div>
        <div className="bg-base-300 w-full lg:w-2/5 rounded-lg h-screen sticky top-0 overflow-y-scroll">
          <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Latest posts</h1>
            <div className="flex flex-col gap-4">
              {/* sidebar card */}
              <FeaturedPostCard />
              <FeaturedPostCard />
              <FeaturedPostCard />
              <FeaturedPostCard />
              <FeaturedPostCard />
            </div>
            {/* categories sidebar*/}
            <div className="mt-6">
              <h1 className="text-2xl font-semibold mb-6">Categories</h1>
              {/* categories container */}
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
      </div>
      {/* planning to add infinite scroll here */}

      {/* pagination start */}
      <div className="flex justify-center">
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 22</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
      {/* pagination end */}
    </div>
  );
};

export default Home;
