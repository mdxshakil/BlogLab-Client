import { AiOutlineDislike } from "react-icons/ai";

const DisLikeBtn = () => {
  return (
    <button
      className="flex gap-1 items-center text-[12px] md:text-sm cursor-pointer hover:text-red-600 hover:font tooltip"
      data-tip="Dislike"
    >
      <AiOutlineDislike />
      <span>32</span>
    </button>
  );
};

export default DisLikeBtn;
