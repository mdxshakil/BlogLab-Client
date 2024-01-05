/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { truncateText } from "../../utils/textTruncate";
import { AiOutlineBook, AiOutlineCalendar } from "react-icons/ai";
import CategoryBtn from "./CategoryBtn";
import LikeBtn from "./LikeBtn";
import CommentBtn from "./CommentBtn";
import ShareBtn from "./ShareBtn";
import BookmarkBtn from "./BookmarkBtn";
import AuthorAvatar from "./AuthorAvatar";
import { useLikeABlogMutation } from "../../redux/features/blog/blogApi";
import { useAppSelector } from "../../redux/hooks";
import toast from "react-hot-toast";
import { useEffect } from "react";
import moment from "moment";

const BlogCard = ({ blog }: { blog: any }) => {
  const navigate = useNavigate();
  //like a blog
  const [
    likeBlog,
    { isLoading: isLikeLoading, isError, isSuccess, error, data },
  ] = useLikeABlogMutation();
  const { profileId } = useAppSelector((state) => state?.auth?.user);
  //check blog liked or not by current user
  const isLikedByCurrentUser = blog?.likes?.find(
    (like: any) => like?.likerId === profileId
  )
    ? true
    : false;

  const handleBlogLike = async () => {
    if (!profileId) {
      navigate("/login");
      toast.error("You must login to perform this action");
    }
    await likeBlog({ blogId: blog?.id, likerId: profileId });
  };
  useEffect(() => {
    if (isError) {
      if (error && "data" in error) {
        toast.error(
          (error as { data: { message: string } }).data.message ||
            "An error occurred"
        );
      } else {
        toast.error("An error occurred");
      }
    }
    if (isSuccess && data?.data?.message) {
      toast.success(data?.data?.message || "Success");
    }
  }, [isError, isSuccess, error, data?.data?.message]);

  return (
    <div className="flex flex-row items-start lg:items-center gap-6 bg-base-300 shadow-xl rounded-lg p-3 md:p-6">
      <img
        src={blog?.banner}
        alt="Movie"
        className="rounded-lg w-2/5 object-cover aspect-video h-full"
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
          <h2 className="text-[12px] md:text-3xl font-[700] cursor-pointer hover:underline decoration-primary decoration-1">
            {truncateText(blog?.title, 65)}
          </h2>
        </Link>
        <div className="flex items-center gap-0">
          <CategoryBtn category={blog?.category?.title} />
          <BookmarkBtn blogId={blog?.id} profileId={profileId} />
        </div>
        <AuthorAvatar
          firstName={blog.author.firstName}
          lastName={blog.author.lastName}
          profilePicture={blog.author.profilePicture}
          bloggerLevel={blog.author.bloggerLevel}
          authorId={blog.author.id}
        />
        <div className="grid grid-cols-4 md:grid-cols-4 gap-x-2 gap-y-2 w-full md:w-1/2">
          <LikeBtn
            likeCount={blog?.likeCount}
            handleBlogLike={handleBlogLike}
            isLikedByCurrentUser={isLikedByCurrentUser}
            isLikeLoading={isLikeLoading}
          />
          <CommentBtn commentCount={blog?.commentCount} />
          <ShareBtn shareCount={blog?.shareCount} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
