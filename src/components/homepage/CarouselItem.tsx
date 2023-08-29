import { Link } from "react-router-dom";
import carousel from "../../assets/images/fantasy-2049567_1280.jpg";
import { truncateText } from "../../utils/textTruncate";
import BookmarkBtn from "../shared/BookmarkBtn";
import CategoryBtn from "../shared/CategoryBtn";
import AuthorAvatar from "../shared/AuthorAvatar";
import { AiOutlineCalendar } from "react-icons/ai";

const CarouselItem = () => {
  return (
    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 p-12 ">
      <div className="order-last lg:order-first">
        <img
          src={carousel}
          alt=""
          className="rounded-lg object-cover w-[100%]"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 md:gap-4">
        <CategoryBtn category="art" />
        <Link to={`/blog/:blogId`}>
          <h2 className="text-xl md:text-4xl font-bold cursor-pointer hover:underline">
            {truncateText(
              "Your most unhappy customers are your greatest source of learning.",
              65
            )}
          </h2>
        </Link>
        <div className="flex">
          <BookmarkBtn />
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <span>
              <AiOutlineCalendar />
            </span>
            <span>July 2, 2020</span>
          </p>
        </div>
        <AuthorAvatar />
      </div>
    </div>
  );
};

export default CarouselItem;
