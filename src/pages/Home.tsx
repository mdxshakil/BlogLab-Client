import Slider from "react-slick";
import CarouselItem from "../components/CarouselItem";
import BlogCard from "../components/BlogCard";
import CategoryBtn from "../components/CategoryBtn";

const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};
const Home = () => {
  return (
    <div className="pb-12">
      {/* carousel */}
      <div>
        <Slider {...settings} className="">
          <CarouselItem name="bbbbbbbbbb" />
          <CarouselItem name="aaaaaaaaaaa" />
          <CarouselItem name="cccccccccc" />
          <CarouselItem name="dddddddddd" />
        </Slider>
      </div>
      {/* carousel ends */}
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
      <div className="flex justify-center">
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 22</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
