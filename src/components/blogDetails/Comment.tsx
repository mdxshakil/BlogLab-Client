import { useState } from "react";
import ReplyInput from "./ReplyInput";
import Reply from "./Reply";

const Comment = () => {
  const [toggleReplyMode, setToggleReplyMode] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  return (
    <section
      className={`${
        showReplies || toggleReplyMode ? "border border-primary rounded-lg" : ""
      } px-0 lg:px-4 py-2`}
    >
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-8 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header flex items-center gap-2 ml-2">
          <p>Shakil Ahmed</p>
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble bg-base-100 text-gray-600 dark:text-gray-400">
          This is a random commentsdas dasd asdas da sdas dasdas hdfasj hfd
          fasjdf asdasdasd asdasdasdas dasdda sdasd asdd asd asda sda sda sdas
          dasd asd asdasd asd asd asd asd asda sda sdas das dsa das dasd asd asd
          asd as dasd dasd
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
      {toggleReplyMode ? <ReplyInput /> : null}
      {showReplies ? <Reply /> : null}
    </section>
  );
};

export default Comment;