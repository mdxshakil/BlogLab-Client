/* eslint-disable @typescript-eslint/no-explicit-any */
import Carousel from "../components/homepage/Carousel";
import SearchBar from "../components/shared/SearchBar";
import MostLikedPosts from "../components/homepage/MostLikedPosts";
import RecentPosts from "../components/homepage/RecentPosts";
import MyFeed from "../components/homepage/MyFeed";
import FeaturedPosts from "../components/homepage/FeaturedPosts";

const Home = () => {
  return (
    <div className="relative">
      <SearchBar />
      <Carousel />
      <MyFeed />
      <MostLikedPosts />
      <RecentPosts />
      <FeaturedPosts />
    </div>
  );
};

export default Home;
