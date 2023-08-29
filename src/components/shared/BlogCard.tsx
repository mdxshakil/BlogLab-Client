import { Link } from "react-router-dom";
import cardImage from "../../assets/images/fantasy-2049567_1280.jpg";
import { truncateText } from "../../utils/textTruncate";
import { AiOutlineCalendar } from "react-icons/ai";
import CategoryBtn from "./CategoryBtn";
import LikeBtn from "./LikeBtn";
import CommentBtn from "./CommentBtn";
import ShareBtn from "./ShareBtn";
import DisLikeBtn from "./DisLikeBtn";
import BookmarkBtn from "./BookmarkBtn";
import AuthorAvatar from "./AuthorAvatar";

const BlogCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-start lg:items-center gap-6 bg-base-300 shadow-xl rounded-lg p-8">
      <img
        src={cardImage}
        alt="Movie"
        className="rounded-lg sm:w-full md:w-2/5 h-full object-cover"
      />
      <div className="flex flex-col justify-center gap-2 md:gap-4">
        <CategoryBtn category="nature" />
        <Link to={`/blog/:blogId`}>
          <h2 className="text-xl md:text-3xl font-[700] cursor-pointer hover:underline">
            {truncateText(
              "Autumn is a second spring when every leaf is a flower",
              65
            )}
          </h2>
        </Link>

        <div className="flex items-center gap-3">
          <BookmarkBtn />
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <span>
              <AiOutlineCalendar />
            </span>
            <span>July 2, 2020</span>
          </p>
        </div>
        <AuthorAvatar />
        <div className="flex flex-wrap items-center text-sm gap-6 mt-4 md:mt-0">
          <LikeBtn />
          <DisLikeBtn />
          <CommentBtn />
          <ShareBtn />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
