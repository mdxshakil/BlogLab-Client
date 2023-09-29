/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { truncateText } from "../../utils/textTruncate";
import { AiOutlineCalendar } from "react-icons/ai";
import CategoryBtn from "./CategoryBtn";
import moment from "moment";

type IProps = {
  blog: any;
};

const SidebarBlogCard = ({ blog }: IProps) => {
  const { id, title, banner, createdAt, category } = blog || {};

  return (
    <div className="flex items-center gap-3">
      <img
        src={banner}
        alt="blog-banner"
        className="rounded-lg w-[20%] h-16 md:h-20 object-cover"
      />
      <div>
        <Link to={`/blog/${id}`}>
          <h3 className="font-bold text-[12px] md:text-sm pb-3 hover:underline decoration-primary decoration-1">
            {truncateText(title, 30)}
          </h3>
        </Link>
        <div className="flex gap-2 items-center">
          <CategoryBtn category={category?.title} />
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <span>
              <AiOutlineCalendar />
            </span>
            <span>{moment(createdAt).format("ll")}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarBlogCard;
