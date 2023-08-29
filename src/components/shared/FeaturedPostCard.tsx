import { Link } from "react-router-dom";
import { truncateText } from "../../utils/textTruncate";
import cardImage from "../../assets/images/fantasy-2049567_1280.jpg";

import { AiOutlineCalendar } from "react-icons/ai";

const FeaturedPostCard = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={cardImage}
        alt=""
        className="rounded-lg w-[28%] h-20 object-cover"
      />
      <div>
        <Link to={`/blog/2`}>
          <h3 className="font-bold text-sm pb-3 hover:underline">
            {truncateText(
              "Never let your memories to be greater than your dreams",
              50
            )}
          </h3>
        </Link>
        <div className="flex gap-2 items-center">
          <div className="badge bg-gray-600 bg-opacity-50 gap-2 px-2 py-3">
            <div className="bg-red-500 w-2 h-2 rounded-full"></div>
            <span>nature</span>
          </div>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <span>
              <AiOutlineCalendar />
            </span>
            <span>July 2, 2020</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
