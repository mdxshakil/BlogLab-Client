import { AiOutlineLike } from "react-icons/ai";

const LikeBtn = ({ likeCount }: { likeCount: number }) => {
  return (
    <button
      className="flex gap-1 items-center cursor-pointer hover:text-blue-600 hover:font tooltip"
      data-tip="Like"
    >
      <AiOutlineLike className="text-[12px] md:text-sm" />
      <span className="text-[12px] gap-y-20md:text-sm">{likeCount}</span>
    </button>
  );
};

export default LikeBtn;
