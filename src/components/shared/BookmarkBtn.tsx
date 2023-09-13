import { BsFillBookmarkPlusFill } from "react-icons/bs";

const BookmarkBtn = () => {
  return (
    <button
      className="flex gap-0 md:gap-1 items-center tooltip hover:bg-base-300 text-[10px] md:text-[12px] md:text-sm cursor-pointer px-2 rounded-full text-primary"
      data-tip="Add to bookmark"
    >
      <BsFillBookmarkPlusFill />
      <span>Bookmark</span>
    </button>
  );
};

export default BookmarkBtn;
