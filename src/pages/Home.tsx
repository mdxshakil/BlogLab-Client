import Slider from "react-slick";
import CarouselItem from "../components/CarouselItem";
import BlogCard from "../components/BlogCard";

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
    <div>
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-24 px-6 gap-12">
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
    </div>
  );
};

export default Home;
