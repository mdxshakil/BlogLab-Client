const Reply = () => {
  return (
    <div className="chat chat-start ml-8">
      <div className="chat-image avatar">
        <div className="w-6 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="chat-header flex items-center gap-2 ml-2">
        <p className="text-[12px]">Shakil Ahmed</p>
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div className="text-sm chat-bubble bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
        This is a random reply
      </div>
    </div>
  );
};

export default Reply;
