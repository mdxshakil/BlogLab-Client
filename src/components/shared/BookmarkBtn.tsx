/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { BsCheck2All } from "react-icons/bs";
import {
  useAddToBookMarkMutation,
  useGetUserBookMarkListQuery,
  useRemoveFromBookMarkMutation,
} from "../../redux/features/bookMark/bookMarkApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
type IProps = {
  blogId: string;
  profileId: string;
};

const BookmarkBtn = (payload: IProps) => {
  //add to bookmark hook
  const [addToBookMark, { isLoading, isError, error, isSuccess }] =
    useAddToBookMarkMutation();
  //remove from bookmark hook
  const [
    removeFromBookMark,
    {
      isLoading: removeLoading,
      isError: removeError,
      isSuccess: removeSuccess,
    },
  ] = useRemoveFromBookMarkMutation();
  const navigate = useNavigate();

  //add to bookmark
  const handleAddToBookMark = async () => {
    //naviagte to login page if user is not logged in
    if (!payload?.profileId) {
      navigate("/login");
      toast.error("You must login to perform this action");
    }
    await addToBookMark(payload);
  };

  //remove from bookamrk
  const handleRemoveFromBookMark = async () => {
    await removeFromBookMark(payload);
  };

  //show toast according to state
  useEffect(() => {
    if (isError || removeError) {
      const errorData = error as { data?: { message?: string } }; //type assertion
      toast.error(errorData?.data?.message || "An error occurred");
    }
    if (isSuccess) {
      toast.success("Added to bookmark");
    }
    if (removeSuccess) {
      toast.success("Removed from bookmark");
    }
  }, [error, isError, isSuccess, removeError, removeSuccess]);

  //fetch bookamrk list
  const { data: bookMarks } = useGetUserBookMarkListQuery(payload?.profileId);

  // Check if the blogId is in the bookMarks array to determine whether it's already bookmarked or not.
  const isAlreadyBookMarked = bookMarks?.data.find((bookMarkItem: any) => {
    if (bookMarkItem.blogId === payload.blogId) {
      return true;
    }
    return false;
  });

  return (
    <div>
      {!isAlreadyBookMarked ? (
        <button
          className={`flex gap-0 md:gap-1 items-center tooltip hover:bg-base-300 text-[10px] md:text-[12px] md:text-sm cursor-pointer px-2 rounded-full text-primary ${
            isLoading ? "loading" : ""
          }`}
          data-tip="Add to bookmark"
          onClick={handleAddToBookMark}
        >
          <BsFillBookmarkPlusFill />
          <span>Bookmark</span>
        </button>
      ) : (
        <button
          className={`flex gap-0 md:gap-1 items-center tooltip hover:bg-base-300 text-[10px] md:text-[12px] md:text-sm cursor-pointer px-2 rounded-full text-secondary ${
            removeLoading ? "loading" : ""
          }`}
          data-tip="Remove from bookmark"
          onClick={handleRemoveFromBookMark}
        >
          <BsCheck2All />
          <span className="italic text-secondary">Bookmarked</span>
        </button>
      )}
    </div>
  );
};

export default BookmarkBtn;
