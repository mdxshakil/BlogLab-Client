/* eslint-disable @typescript-eslint/no-explicit-any */
import CategoryBtn from "../../components/shared/CategoryBtn";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineCalendar,
  AiOutlineLike,
} from "react-icons/ai";
import AddToBookmark from "../shared/BookmarkBtn";
import AuthorAvatar from "../shared/AuthorAvatar";
import DOMPurify from "dompurify";
import moment from "moment";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDeleteBlogMutation } from "../../redux/features/blog/blogApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useUpdateBlogReadCountMutation } from "../../redux/features/profile/profileApi";

type IProps = {
  isModal?: boolean;
  blog: any;
};

const BlogDetailsCard = ({ isModal, blog }: IProps) => {
  const { profileId } = useAppSelector((state) => state?.auth?.user);
  const {
    author,
    banner,
    title,
    category,
    createdAt,
    content,
    likeCount,
    id,
    timeToRead,
  } = blog || {};
  const {
    firstName,
    lastName,
    bloggerLevel,
    profilePicture,
    id: authorId,
  } = author || {};
  const [deleteBlog, deleteStatus] = useDeleteBlogMutation();
  const [updateBlogReadCount] = useUpdateBlogReadCountMutation();

  const navigate = useNavigate();

  const handleBlogdelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteBlog(id);
      }
    });
  };

  useEffect(() => {
    if (timeToRead) {
      // Calculate the required minimum time to stay as a percentage of timeToRead
      const requiredMinTimeMillis = Math.max(
        0.75 * timeToRead * 60 * 1000,
        45000
      );
      // Set a timeout to call updateBlogReadCount after the specified time
      const timeoutId = setTimeout(async () => {
        // Call the updateBlogReadCount function here
        await updateBlogReadCount(profileId);
      }, requiredMinTimeMillis);
      // Cleanup the timeout when the component unmounts or if timeToRead changes
      return () => clearTimeout(timeoutId);
    }
  }, [id, timeToRead, updateBlogReadCount, profileId]);

  useEffect(() => {
    if (deleteStatus.isSuccess) {
      navigate("/");
      toast.success("Blog deleted successfully");
    }
    if (deleteStatus.isError) {
      Swal.fire("An error occured while deleting. Please try again!");
    }
  }, [deleteStatus.isError, deleteStatus.isSuccess, navigate]);

  return (
    <div className="bg-base-300 p-6 lg:p-12 rounded-lg">
      <div>
        {/* title, mage and date */}
        <div>
          <div className="flex items-center gap-4">
            <CategoryBtn category={category.title} />
            <p className="text-gray-500 text-sm flex items-center gap-1 mb-2">
              <span>
                <AiOutlineCalendar />
              </span>
              <span>{moment(createdAt).format("ll")}</span>
            </p>
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6">
            {title}
          </h1>
          <img
            src={banner}
            alt=""
            className={"w-full object-cover h-40 md:h-64 rounded-lg shadow-lg"}
          />
        </div>
        <div className="mt-6">
          {/* avater, edit and delete button */}
          <div className="flex items-center justify-between">
            <AuthorAvatar
              firstName={firstName}
              lastName={lastName}
              bloggerLevel={bloggerLevel}
              profilePicture={profilePicture}
            />
            {/* only blog owner can see edit and delete button */}
            {authorId === profileId && (
              <div className="flex gap-4">
                <button
                  className="text-base md:text-xl text-primary border rounded-full p-[2px] border-gray-500 hover:border-primary"
                  onClick={() => navigate(`/edit-blog/${id}`)}
                >
                  <AiFillEdit />
                </button>
                <button
                  className={`text-base md:text-xl text-error border rounded-full p-[2px] border-gray-500 hover:border-error ${
                    deleteStatus.isLoading ? "loading" : ""
                  }`}
                  onClick={handleBlogdelete}
                  disabled={deleteStatus.isLoading}
                >
                  <AiFillDelete />
                </button>
              </div>
            )}
          </div>
          {/* action buttons */}
          <div className="my-4">
            <div className="flex flex-wrap items-center text-sm gap-3">
              <button
                className="flex gap-1 items-center text-sm cursor-pointer hover:text-blue-600 hover:font tooltip"
                data-tip="Like"
                disabled={isModal}
              >
                <AiOutlineLike />
                <span>{likeCount}</span>
              </button>
              {!isModal && <AddToBookmark blogId={id} profileId={profileId} />}
            </div>
          </div>
          <div className="divider m-0"></div>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
