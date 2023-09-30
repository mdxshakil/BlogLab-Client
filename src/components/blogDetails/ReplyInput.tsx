import { AiOutlineSend } from "react-icons/ai";
import { useAddReplyMutation } from "../../redux/features/comment/commentApi";
import { useAppSelector } from "../../redux/hooks";
import { FieldValues, useForm } from "react-hook-form";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ReplyInput = ({ commentId }: { commentId: string }) => {
  //add a new reply
  const [addReply, { isLoading, isError, isSuccess }] = useAddReplyMutation();
  const { profileId } = useAppSelector((state) => state.auth.user);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await addReply({ ...data, commentId, profileId });
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
    if (isError) {
      toast.error("Failed to add reply!");
    }
  }, [isError, isSuccess, reset]);

  return (
    <form className="ml-12" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center rounded-lg bg-base-200 dark:bg-base-200 w-4/5 md:w-1/2">
        <textarea
          rows={1}
          className="block mx-4 p-2.5 w-full text-sm rounded-lg bg-base-200 !outline-none"
          placeholder="Add a reply......"
          {...register("reply", {
            required: "Reply can't be empty",
            maxLength: {
              value: 60,
              message: "Reply cant be longer that 60 chracters",
            },
          })}
        />
        <button
          className={`inline-flex justify-center p-2 rounded-full cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600 text-primary text-2xl ${
            isLoading ? "loading" : ""
          } `}
          disabled={isLoading}
        >
          <AiOutlineSend />
        </button>
      </div>
      {errors.reply && (
        <p className="text-sm text-error">{errors?.reply?.message as string}</p>
      )}
    </form>
  );
};

export default ReplyInput;
