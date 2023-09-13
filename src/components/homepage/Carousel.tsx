import Slider from "react-slick";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
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
  return (
    <div className="min-h-[88dvh] flex flex-col items-center justify-center bg-base-300 rounded-[15px] my-12">
      <h1 className="text-4xl font-bold text-center">Featured Blogs</h1>
      <div className="w-full">
        <Slider {...settings}>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;


