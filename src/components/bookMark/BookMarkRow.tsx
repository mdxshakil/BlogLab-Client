/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { truncateText } from "../../utils/textTruncate";
import { AiFillDelete } from "react-icons/ai";
import { useRemoveFromBookMarkMutation } from "../../redux/features/bookMark/bookMarkApi";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import toast from "react-hot-toast";

const BookMarkRow = ({ blog }: { blog: any }) => {
  const { profileId } = useAppSelector((state) => state?.auth?.user);
  const { author, banner, id, title, category } = blog.blog || {};
  const { firstName, lastName, profilePicture, bloggerLevel } = author || {};
  const [removeFromBookMark, { isLoading, isError }] =
    useRemoveFromBookMarkMutation();

  const handleRemoveFromBookMark = async () => {
    await removeFromBookMark({ blogId: id, profileId });
  };

  useEffect(() => {
    if (isError) {
      toast.error("An error occured");
    }
  }, [isError]);

  return (
    <tr>
      {/* col 1 */}
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={profilePicture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{`${firstName} ${lastName}`}</div>
            <div className="text-sm opacity-50">{bloggerLevel}</div>
          </div>
        </div>
      </td>
      {/* col 2 */}
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={banner} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">
              <Link to={`/blog/${id}`}>{truncateText(title, 65)}</Link>
            </div>
          </div>
        </div>
      </td>
      {/* col 3 */}
      <td>{category?.title}</td>
      {/* col 4 */}
      <td>
        <span
          className={`text-xl text-error cursor-pointer ${
            isLoading ? "loading" : ""
          }`}
          data-tip="Remove"
          onClick={handleRemoveFromBookMark}
        >
          <AiFillDelete />
        </span>
      </td>
    </tr>
  );
};

export default BookMarkRow;
