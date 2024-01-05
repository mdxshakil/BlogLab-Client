/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineBook, AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";
import { Link } from "react-router-dom";
import { truncateText } from "../utils/textTruncate";
import CategoryBtn from "./shared/CategoryBtn";
import BookmarkBtn from "./shared/BookmarkBtn";
import AuthorAvatar from "./shared/AuthorAvatar";

export default function BlogCardVertical({ blog }: { blog: any }) {
  return (
    <div className="flex flex-col gap-6 bg-base-300 shadow-xl rounded-lg p-3 md:p-6">
      <img
        src={blog?.banner}
        alt="Movie"
        className="rounded-lg w-full aspect-video"
      />
      <div className="flex flex-col justify-center gap-2 md:gap-4">
        <div className="flex gap-3">
          <p className="text-gray-500 text-[10px] md:text-[12px] flex items-center gap-1">
            <span>
              <AiOutlineCalendar />
            </span>
            <span>{moment(blog?.createdAt).format("ll")}</span>
          </p>
          <p className="text-gray-500 text-[10px] md:text-[12px] flex items-center gap-1">
            <span>
              <AiOutlineBook />
            </span>
            <span>{blog?.timeToRead} min read</span>
          </p>
        </div>
        <Link to={`/blog/${blog?.id}`}>
          <h2 className="text-[12px] md:text-2xl font-[700] cursor-pointer hover:underline decoration-primary decoration-1">
            {truncateText(blog?.title, 55)}
          </h2>
        </Link>
        <div className="flex items-center gap-0">
          <CategoryBtn category={blog?.category?.title} />
          <BookmarkBtn blogId={blog?.id} profileId={"234234"} />
        </div>
        <AuthorAvatar
          firstName={blog.author.firstName}
          lastName={blog.author.lastName}
          profilePicture={blog.author.profilePicture}
          bloggerLevel={blog.author.bloggerLevel}
          authorId={blog.author.id}
        />
      </div>
    </div>
  );
}
