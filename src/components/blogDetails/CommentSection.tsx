/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllCommentQuery } from "../../redux/features/comment/commentApi";
import LoadingSpinner from "../shared/LoadingSpinner";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentSection = ({ blogId }: { blogId: string }) => {
  //get all comments
  const { data: comments, isLoading, isError } = useGetAllCommentQuery(blogId);

  let content;
  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (!isLoading && isError) {
    content = <p className="text-error">An error occured!</p>;
  } else if (!isLoading && !isError && comments?.data?.length === 0) {
    content = <p className="text-primary">Be the first to comment</p>;
  } else if (!isLoading && !isError && comments?.data?.length > 0) {
    content = comments?.data?.map((comment: any) => (
      <Comment key={comment?.id} comment={comment} />
    ));
  }

  return (
    <div>
      <CommentInput blogId={blogId} />
      <div className="flex flex-col gap-4">{content}</div>
      <div className="mt-6">
        <button className="btn-sm hover:bg-base-200 rounded-full">
          Load more comments
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
