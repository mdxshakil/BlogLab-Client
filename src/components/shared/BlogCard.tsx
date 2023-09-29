/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { truncateText } from "../../utils/textTruncate";
import { AiOutlineCalendar } from "react-icons/ai";
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

const BlogCard = ({ blog }: { blog: any }) => {
  //like a blog
  const [
    likeBlog,
    { isLoading: isLikeLoading, isError, isSuccess, error, data },
  ] = useLikeABlogMutation();
  const { profileId } = useAppSelector((state) => state.auth.user);
  //check blog liked or not by current user
  const isLikedByCurrentUser = blog?.likes?.find(
    (like: any) => like.likerId === profileId
  )
    ? true
    : false;
    

  const handleBlogLike = () => {
    likeBlog({ blogId: blog?.id, likerId: profileId });
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
    <div className="flex flex-col md:flex-row items-start lg:items-center gap-6 bg-base-300 shadow-xl rounded-lg p-3 md:p-6">
      <img
        src={blog?.banner}
        alt="Movie"
        className="rounded-lg sm:w-full md:w-2/5 h-full object-cover"
      />
      <div className="flex flex-col justify-center gap-2 md:gap-4">
        <p className="text-gray-500 text-[10px] md:text-[12px] flex items-center gap-1">
          <span>
            <AiOutlineCalendar />
          </span>
          <span>July 2, 2020</span>
        </p>
        <Link to={`/blog/${blog.id}`}>
          <h2 className="text-[12px] md:text-3xl font-[700] cursor-pointer hover:underline decoration-primary decoration-1">
            {truncateText(blog?.title, 65)}
          </h2>
        </Link>

        <div className="flex items-center gap-0">
          <CategoryBtn category={blog?.category?.title} />
          <BookmarkBtn />
        </div>
        <AuthorAvatar
          firstName={blog.author.firstName}
          lastName={blog.author.lastName}
          profilePicture={blog.author.profilePicture}
          bloggerLevel={blog.author.bloggerLevel}
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
