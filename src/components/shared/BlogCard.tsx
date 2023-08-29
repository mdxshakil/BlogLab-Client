import { Link } from "react-router-dom";
import cardImage from "../../assets/images/fantasy-2049567_1280.jpg";
import { truncateText } from "../../utils/textTruncate";
import AddToBookmark from "../shared/AddToBookmark";
import {
  AiOutlineComment,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
  AiOutlineCalendar,
} from "react-icons/ai";

const BlogCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-start lg:items-center gap-6 bg-base-300 shadow-xl rounded-lg p-8">
      <img
        src={cardImage}
        alt="Movie"
        className="rounded-lg sm:w-full md:w-1/2 h-full object-cover"
      />
      <div className="flex flex-col justify-center gap-2 md:gap-4">
        <div className="badge bg-gray-600 bg-opacity-50 gap-2 px-3 py-4">
          <div className="bg-red-500 w-2 h-2 rounded-full"></div>
          nature
        </div>
        <Link to={`/blog/:blogId`}>
          <h2 className="text-xl md:text-3xl font-[700] cursor-pointer hover:underline">
            {truncateText(
              "Autumn is a second spring when every leaf is a flower",
              65
            )}
          </h2>
        </Link>

        <div className="flex items-center gap-3">
          <AddToBookmark />
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <span>
              <AiOutlineCalendar />
            </span>
            <span>July 2, 2020</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" />
            </div>
          </div>
          <div>
            <h6 className="font-bold text-sm">Shakil Ahmed</h6>
            <p className="text-gray-500 text-[12px] md:text-sm">Newbie</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center text-sm gap-6 mt-4 md:mt-0">
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
