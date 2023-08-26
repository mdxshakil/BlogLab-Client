import { BsFillBookmarkPlusFill } from "react-icons/bs";

const AddToBookmark = () => {
  return (
    <button
      className="flex gap-1 items-center hover:bg-base-300 text-[12px] md:text-sm cursor-pointer px-2 rounded-full"
      title="Add to bookmark"
    >
      <BsFillBookmarkPlusFill />
      <span>Bookmark</span>
    </button>
  );
};

export default AddToBookmark;
