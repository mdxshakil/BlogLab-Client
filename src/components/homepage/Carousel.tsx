/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undefined */
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import { useGetFeaturedBlogsQuery } from "../../redux/features/blog/blogApi";
import LoadingSpinner from "../shared/LoadingSpinner";
import { carouselSettings } from "../../constants";

const Carousel = () => {
  const { data: featuredBlogs, isLoading } = useGetFeaturedBlogsQuery({
    skip: 0,
    limit: 3,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="bg-base-300 rounded-[15px] mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center pt-6">
        Featured Blogs
      </h1>
      <div className="pb-6 md:pb-12">
        <Slider {...carouselSettings}>
          {featuredBlogs?.data?.map((blog: any) => {
            return <CarouselItem key={blog?.id} blog={blog} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
