/* eslint-disable @typescript-eslint/no-explicit-any */
import BookMarkRow from "../components/bookMark/BookMarkRow";
import TableHeader from "../components/bookMark/TableHeader";
import Error from "../components/error/Error";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import useGetUserFromStore from "../hooks/useGetUser";
import { useGetUserBookMarkListQuery } from "../redux/features/bookMark/bookMarkApi";

const Bookmark = () => {
  const { profileId } = useGetUserFromStore();
  //fetch bookamrk list
  const {
    data: bookMarks,
    isLoading,
    isError,
  } = useGetUserBookMarkListQuery(profileId);

  let content;
  if (isLoading) {
    return <LoadingSpinner />;
  } else if (!isLoading && isError) {
    return <Error />;
  } else if (!isLoading && !isError && bookMarks?.data?.length === 0) {
    return <p className="text-secondary text-center my-6">Bookmark is empty</p>;
  } else if (!isLoading && !isError && bookMarks?.data?.length > 0) {
    content = bookMarks?.data.map((item: any) => (
      <BookMarkRow key={item.id} blog={item} />
    ));
  }

  return (
    <div className="py-12">
      <h1 className="text-2xl font-bold text-center">My Bookmarks</h1>
      <p className="text-secondary text-center">{`(Total ${bookMarks?.data?.length} items)`}</p>
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-3 md:gap-6 w-full px-2 md:px-0 mt-6">
        <div className="overflow-x-auto">
          <table className="table">
            <TableHeader />
            <tbody>{content}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
