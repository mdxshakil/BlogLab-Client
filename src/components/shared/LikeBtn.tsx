import { AiOutlineLike } from "react-icons/ai";

type IProps = {
  likeCount: number;
  handleBlogLike: () => void;
  isLikedByCurrentUser: boolean;
  isLikeLoading: boolean;
};

const LikeBtn = ({
  likeCount,
  handleBlogLike,
  isLikedByCurrentUser,
  isLikeLoading,
}: IProps) => {
  return (
    <button
      className={`flex gap-1 items-center cursor-pointer hover:text-blue-600 hover:font tooltip ${
        isLikedByCurrentUser ? "text-blue-600" : ""
      } ${isLikeLoading ? "loading" : ""}`}
      data-tip="Like"
      onClick={handleBlogLike}
      disabled={isLikeLoading}
    >
      <AiOutlineLike className="text-[12px] md:text-sm" />
      <span className="text-[12px] gap-y-20md:text-sm">{likeCount}</span>
    </button>
  );
};

export default LikeBtn;
