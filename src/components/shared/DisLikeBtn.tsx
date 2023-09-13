import { AiOutlineDislike } from "react-icons/ai";

const DisLikeBtn = () => {
  return (
    <button
      className="flex gap-1 items-center cursor-pointer hover:text-red-600 hover:font tooltip"
      data-tip="Dislike"
    >
      <AiOutlineDislike className="text-[12px] md:text-sm" />
      <span className="text-[12px] md:text-sm">32</span>
    </button>
  );
};

export default DisLikeBtn;
