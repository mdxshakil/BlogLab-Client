/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { truncateText } from "../../utils/textTruncate";
import BookmarkBtn from "../shared/BookmarkBtn";
import CategoryBtn from "../shared/CategoryBtn";
import AuthorAvatar from "../shared/AuthorAvatar";
import { AiOutlineBook, AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";
import { useAppSelector } from "../../redux/hooks";

const CarouselItem = ({ blog }: { blog: any }) => {
  const { profileId } = useAppSelector((state) => state?.auth?.user);
  const { title, createdAt, category, author, id, banner } = blog || {};

  return (
    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 p-12">
      <div className="order-last lg:order-first relative">
        <img
          src={banner}
          alt=""
          className="rounded-lg object-cover w-full border-primary"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 md:gap-4">
        <div className="flex gap-3">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <span>
              <AiOutlineCalendar />
            </span>
            <span>{moment(createdAt).format("ll")}</span>
          </p>
          <p className="text-gray-500 text-[10px] md:text-[12px] flex items-center gap-1">
            <span>
              <AiOutlineBook />
            </span>
            <span>{blog?.timeToRead} min read</span>
          </p>
        </div>
        <Link to={`/blog/${id}`}>
          <h2 className="text-xl md:text-4xl font-bold cursor-pointer hover:underline decoration-primary decoration-1">
            {truncateText(title, 65)}
          </h2>
        </Link>
        <div className="flex">
          <CategoryBtn category={category?.title} />
          <BookmarkBtn profileId={profileId} blogId={id} />
        </div>
        <AuthorAvatar
          firstName={author.firstName}
          lastName={author.lastName}
          profilePicture={author.profilePicture}
          bloggerLevel={author.bloggerLevel}
          authorId={author.id}
        />
      </div>
    </div>
  );
};

export default CarouselItem;
