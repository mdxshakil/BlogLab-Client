/* eslint-disable no-undefined */
import { FieldValues, useForm } from "react-hook-form";
import { AiOutlineSend } from "react-icons/ai";
import { useAppSelector } from "../../redux/hooks";
import { useAddCommentMutation } from "../../redux/features/comment/commentApi";
import toast from "react-hot-toast";
import { useEffect } from "react";

const CommentInput = ({ blogId }: { blogId: string }) => {
  const { profileId } = useAppSelector((state) => state.auth.user);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  //add a new comment
  const [addComment, { isLoading, isError, isSuccess }] =
    useAddCommentMutation();

  const onSubmit = async (data: FieldValues) => {
    await addComment({ ...data, profileId, blogId });
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
    if (isError) {
      toast.error("Failed to add comment!");
    }
  }, [isError, isSuccess, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center rounded-lg bg-base-200 dark:bg-base-200 mb-6">
        <textarea
          rows={1}
          required
          className="block mx-4 p-2.5 w-full text-sm rounded-lg bg-base-200 !outline-none"
          placeholder="Add a comment......"
          {...register("comment", {
            required: "Coment can't be empty",
            maxLength: {
              value: 60,
              message: "Comment cant be longer that 60 chracters",
            },
          })}
        />
        <button
          className={`inline-flex justify-center p-2 rounded-full cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600 text-primary text-2xl ${
            isLoading ? "loading" : ""
          }`}
          disabled={isLoading}
        >
          <AiOutlineSend />
        </button>
      </div>
      {errors.comment && (
        <p className="text-sm text-error">
          {errors?.comment?.message as string}
        </p>
      )}
    </form>
  );
};

export default CommentInput;
