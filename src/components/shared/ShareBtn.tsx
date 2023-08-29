import { AiOutlineShareAlt } from "react-icons/ai";

const ShareBtn = () => {
  return (
    <button
      className="flex gap-1 items-center text-[12px] md:text-sm cursor-pointer hover:text-orange-600 hover:font tooltip"
      data-tip="Share"
    >
      <AiOutlineShareAlt />
    </button>
  );
};

export default ShareBtn;
