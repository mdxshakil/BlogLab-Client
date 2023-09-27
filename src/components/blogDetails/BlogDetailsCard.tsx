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

type IProps = {
  isModal?: boolean;
  blog: any;
};

const BlogDetailsCard = ({ isModal, blog }: IProps) => {
  const { author, banner, title, category, createdAt, content, likeCount } =
    blog || {};
  const { firstName, lastName, bloggerLevel, profilePicture } = author || {};

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
            <div className="flex gap-4">
              <button className="text-base md:text-xl text-primary border rounded-full p-[2px] border-gray-500 hover:border-primary">
                <AiFillEdit />
              </button>
              <button className="text-base md:text-xl text-error border rounded-full p-[2px] border-gray-500 hover:border-error">
                <AiFillDelete />
              </button>
            </div>
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
              {!isModal && <AddToBookmark />}
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
