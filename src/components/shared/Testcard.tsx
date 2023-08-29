import carousel from "../../assets/images/fantasy-2049567_1280.jpg";
import {
  AiOutlineComment,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
} from "react-icons/ai";
import AddToBookmark from "./BookmarkBtn";
import { truncateText } from "../../utils/textTruncate";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="grid items-center grid-cols-1 gap-2 md:gap-6 border-base-300 border-b-[1px]">
      <div>
        <img
          src={carousel}
          alt=""
          className="rounded-lg object-cover w-[100%]"
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div>
          <span className="text-[10px] md:text-sm font-bold bg-primary bg-opacity-50 rounded-full px-2 w-auto">
            Business Travel
          </span>
          <span> - </span>
          <span className="text-[10px] md:text-sm text-gray-500 w-auto">
            July 2, 2020
          </span>
        </div>
        <div>
          <AddToBookmark />
        </div>
        <Link to={`/blog/:blogId`}>
          <h2 className="text-sm sm:text-base md:text-xl font-bold cursor-pointer hover:underline">
            {truncateText(
              "Your most unhappy customers are your greatest source of learning.",
              55
            )}
          </h2>
        </Link>
        {/* profile */}
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" />
            </div>
          </div>
          <div>
            <h6 className="font-bold text-[12px]">Shakil Ahmed</h6>
            <p className="text-gray-500 text-[12px]">CEO and Founder</p>
          </div>
        </div>
        {/* like dislike comment */}
        <div className="flex flex-wrap items-center text-sm gap-4 justify-around py-3">
          <button
            className="flex gap-1 items-center text-sm cursor-pointer hover:text-blue-600 hover:font tooltip"
            data-tip="Like"
          >
            <AiOutlineLike />
            <span>123</span>
          </button>
          <button
            className="flex gap-1 items-center text-[12px] md:text-sm cursor-pointer hover:text-red-600 hover:font tooltip"
            data-tip="Dislike"
          >
            <AiOutlineDislike />
            <span>32</span>
          </button>
          <button
            className="flex gap-1 items-center text-[12px] md:text-sm cursor-pointer hover:text-green-600 hover:font tooltip"
            data-tip="Comment"
          >
            <AiOutlineComment />
            <span>45</span>
          </button>
          <button
            className="flex gap-1 items-center text-[12px] md:text-sm cursor-pointer hover:text-orange-600 hover:font tooltip"
            data-tip="Share"
          >
            <AiOutlineShareAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
