import { AiOutlineLike } from "react-icons/ai";

const LikeBtn = () => {
  return (
    <button
      className="flex gap-1 items-center text-sm cursor-pointer hover:text-blue-600 hover:font tooltip"
      data-tip="Like"
    >
      <AiOutlineLike />
      <span>123</span>
    </button>
  );
};

export default LikeBtn;
