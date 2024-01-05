import AboutUsImg from "../../assets/images/about-us.png";
import SearchBar from "../shared/SearchBar";

const HeroSection = () => {
  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
        <div className="w-[80%]">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            <span className="text-primary">Discover, Connect, Thrive:</span>{" "}
            Your Journey Unveiled Through Words.
          </h2>
          <SearchBar />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={AboutUsImg}
            alt="About-Us"
            className="max-w-[90%] h-auto animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
