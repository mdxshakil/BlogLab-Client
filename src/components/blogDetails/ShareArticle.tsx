import {
  AiFillCopy,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const ShareArticle = () => {
  return (
    <div>
      <div className="bg-base-300 p-12 rounded-lg">
        <h2 className="text-center text-2xl font-bold">Share this article</h2>
        <div className="flex items-center justify-center gap-4 py-3">
          <span className="text-2xl rounded-full bg-base-100 p-2 cursor-pointer hover:scale-110 text-blue-500">
            <AiFillFacebook />
          </span>
          <span className="text-2xl rounded-full bg-base-100 p-2 cursor-pointer hover:scale-110 text-blue-600">
            <AiFillTwitterCircle />
          </span>
          <span className="text-2xl rounded-full bg-base-100 p-2 cursor-pointer hover:scale-110 text-green-500">
            <AiOutlineWhatsApp />
          </span>
          <span className="text-2xl rounded-full bg-base-100 p-2 cursor-pointer hover:scale-110 text-blue-700">
            <AiFillLinkedin />
          </span>
          <span className="text-2xl rounded-full bg-base-100 p-2 cursor-pointer hover:scale-110 text-gray-500">
            <AiFillCopy />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShareArticle;
