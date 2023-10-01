/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";

const Reply = (reply: any) => {
  const { reply: replyText, profile, createdAt } = reply.reply;
  return (
    <div className="chat chat-start ml-8">
      <div className="chat-image avatar">
        <div className="w-6 rounded-full">
          <img src={profile?.profilePicture} />
        </div>
      </div>
      <div className="chat-header flex items-center gap-2 ml-2">
        <p className="text-[12px]">{`${profile?.firstName} ${profile?.lastName}`}</p>
        <time className="text-xs opacity-50">
          {moment(createdAt).format("lll")}
        </time>
      </div>
      <div className="text-sm chat-bubble bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
        {replyText}
      </div>
    </div>
  );
};

export default Reply;
