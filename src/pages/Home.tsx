import Slider from "react-slick";
import CarouselItem from "../components/CarouselItem";
const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};
const Home = () => {
  return (
    <div>
      <Slider {...settings} className="">
        <CarouselItem name="bbbbbbbbbb" />
        <CarouselItem name="aaaaaaaaaaa" />
        <CarouselItem name="cccccccccc" />
        <CarouselItem name="dddddddddd" />
      </Slider>
    </div>
  );
};

export default Home;
