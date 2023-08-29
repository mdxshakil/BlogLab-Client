import { AiOutlineComment } from "react-icons/ai";

const CommentBtn = () => {
  return (
    <button
      className="flex gap-1 items-center text-[12px] md:text-sm cursor-pointer hover:text-green-600 hover:font tooltip"
      data-tip="Comment"
    >
      <AiOutlineComment />
      <span>45</span>
    </button>
  );
};

export default CommentBtn;
