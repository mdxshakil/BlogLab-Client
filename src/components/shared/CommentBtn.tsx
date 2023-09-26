import { AiOutlineComment } from "react-icons/ai";

const CommentBtn = ({ commentCount }: { commentCount: number }) => {
  return (
    <button
      className="flex gap-1 items-center cursor-pointer hover:text-green-600 hover:font tooltip"
      data-tip="Comment"
    >
      <AiOutlineComment className="text-[12px] md:text-sm" />
      <span className="text-[12px] md:text-sm">{commentCount}</span>
    </button>
  );
};

export default CommentBtn;
