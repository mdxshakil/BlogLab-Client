/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undefined */
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import { useGetFeaturedBlogsQuery } from "../../redux/features/blog/blogApi";
import LoadingSpinner from "../shared/LoadingSpinner";
import { carouselSettings } from "../../constants";

const Carousel = () => {
  const { data: featuredBlogs, isLoading } =
    useGetFeaturedBlogsQuery(undefined);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="min-h-[88dvh] flex flex-col items-center justify-center bg-base-300 rounded-[15px] my-12">
      <h1 className="text-4xl font-bold text-center">Featured Blogs</h1>
      <div className="w-full">
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
