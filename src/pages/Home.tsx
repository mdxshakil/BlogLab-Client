import BlogCard from "../components/shared/BlogCard";
import CategoryBtn from "../components/CategoryBtn";
import Carousel from "../components/homepage/Carousel";

const Home = () => {
  return (
    <div className="pb-12">
      <Carousel />
      {/* categories */}
      <div className="flex items-center flex-wrap justify-center gap-3 pt-12">
        <CategoryBtn />
        <CategoryBtn />
        <CategoryBtn />
        <CategoryBtn />
        <CategoryBtn />
        <CategoryBtn />
        <CategoryBtn />
        <CategoryBtn />
      </div>
      {/* categories end */}

      {/* cards start */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-12 px-6 gap-12">
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
      {/* cards end */}
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
