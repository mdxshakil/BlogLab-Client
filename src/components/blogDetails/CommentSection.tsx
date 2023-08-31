import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentSection = () => {
  return (
    <div>
      <CommentInput />
      <div className="flex flex-col gap-4">
        <Comment />
        <Comment />
      </div>
      <div className="mt-6">
        <button className="btn-sm hover:bg-base-200 rounded-full">
          Load more comments
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
