/* eslint-disable @typescript-eslint/no-explicit-any */
import Carousel from "../components/homepage/Carousel";
import MostLikedPosts from "../components/homepage/MostLikedPosts";
import RecentPosts from "../components/homepage/RecentPosts";
import MyFeed from "../components/homepage/MyFeed";
import FeaturedPosts from "../components/homepage/FeaturedPosts";
import HeroSection from "../components/homepage/HeroSection";
import FeaturedProfiles from "../components/homepage/FeaturedProfiles";

const Home = () => {
  return (
    <div className="relative">
      {/* <SearchBar /> */}
      <HeroSection />
      <Carousel />
      <MyFeed />
      <MostLikedPosts />
      <RecentPosts />
      <FeaturedPosts />
      <FeaturedProfiles />
    </div>
  );
};

export default Home;
