import { Link } from "react-router-dom";
import { truncateText } from "../../utils/textTruncate";
import cardImage from "../../assets/images/fantasy-2049567_1280.jpg";

import { AiOutlineCalendar } from "react-icons/ai";
import CategoryBtn from "./CategoryBtn";

const SidebarBlogCard = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={cardImage}
        alt=""
        className="rounded-lg w-[28%] h-16 md:h-20 object-cover"
      />
      <div>
        <Link to={`/blog/2`}>
          <h3 className="font-bold text-[12px] md:text-sm pb-3 hover:underline decoration-primary decoration-1">
            {truncateText(
              "Never let your memories to be greater than your dreams",
              50
            )}
          </h3>
        </Link>
        <div className="flex gap-2 items-center">
          <CategoryBtn category="travel" />
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

export default SidebarBlogCard;
