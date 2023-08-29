import { AiOutlineSend } from "react-icons/ai";
import Comment from "./Comment";

const CommentSection = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <form>
        <div className="flex items-center rounded-lg bg-base-200 dark:bg-base-200">
          <textarea
            rows={1}
            className="block mx-4 p-2.5 w-full text-sm rounded-lg bg-base-200 !outline-none"
            placeholder="Add a comment......"
          />
          <button className="inline-flex justify-center p-2 rounded-full cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600 text-primary text-2xl">
            <AiOutlineSend />
          </button>
        </div>
      </form>
      {/* comments */}
      <Comment />
      <div>
        <button className="btn-sm">Load more comments</button>
      </div>
    </div>
  );
};

export default CommentSection;
