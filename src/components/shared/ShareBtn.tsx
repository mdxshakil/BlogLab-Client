import { AiOutlineShareAlt } from "react-icons/ai";

const ShareBtn = () => {
  return (
    <button
      className="flex gap-1 items-center cursor-pointer hover:text-orange-600 hover:font tooltip"
      data-tip="Share"
    >
      <AiOutlineShareAlt className="text-[12px] md:text-sm"/>
    </button>
  );
};

export default ShareBtn;
