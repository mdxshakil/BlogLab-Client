/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ReplyInput from "./ReplyInput";
import Reply from "./Reply";
import moment from "moment";

const Comment = (comment: any) => {
  const [toggleReplyMode, setToggleReplyMode] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const { comment: commentText, profile, createdAt, id } = comment.comment;

  return (
    <section
      className={`${
        showReplies || toggleReplyMode ? "border border-primary rounded-lg" : ""
      } px-0 lg:px-4 py-2`}
    >
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-8 rounded-full">
            <img src={profile.profilePicture} />
          </div>
        </div>
        <div className="chat-header flex items-center gap-2 ml-2">
          <p>{profile.firstName + " " + profile.lastName}</p>
          <time className="text-xs opacity-50">
            {moment(createdAt).format("lll")}
          </time>
        </div>
        <div className="chat-bubble bg-base-100 text-gray-600 dark:text-gray-400">
          {commentText}
        </div>
        <div className="chat-footer opacity-50 cursor-pointer flex gap-6">
          <button
            className="hover:bg-base-100 px-2 py-1 rounded-full"
            onClick={() => setToggleReplyMode(!toggleReplyMode)}
          >
            {toggleReplyMode ? "Cancel" : "Reply"}
          </button>
          <button
            className="hover:bg-base-100 px-2 py-1 rounded-full"
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? "Hide Replies" : "View Replies"}
          </button>
        </div>
      </div>
      {toggleReplyMode ? <ReplyInput commentId={id} /> : null}
      {showReplies ? <Reply /> : null}
    </section>
  );
};

export default Comment;
