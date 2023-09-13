// import { Link } from "react-router-dom";
// import cardImage from "../../assets/images/fantasy-2049567_1280.jpg";
// import { truncateText } from "../../utils/textTruncate";
// import { AiOutlineCalendar } from "react-icons/ai";
// import CategoryBtn from "./CategoryBtn";
// import LikeBtn from "./LikeBtn";
// import CommentBtn from "./CommentBtn";
// import ShareBtn from "./ShareBtn";
// import DisLikeBtn from "./DisLikeBtn";
// import BookmarkBtn from "./BookmarkBtn";
// import AuthorAvatar from "./AuthorAvatar";

// const BlogCard = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-start lg:items-center gap-6 bg-base-300 shadow-xl rounded-lg p-6">
//       <img
//         src={cardImage}
//         alt="Movie"
//         className="rounded-lg sm:w-full md:w-2/5 h-full object-cover"
//       />
//       <div className="flex flex-col justify-center gap-2 md:gap-4">
//         <p className="text-gray-500 text-sm flex items-center gap-1">
//           <span>
//             <AiOutlineCalendar />
//           </span>
//           <span>July 2, 2020</span>
//         </p>
//         <Link to={`/blog/:blogId`}>
//           <h2 className="text-xl md:text-3xl font-[700] cursor-pointer hover:underline decoration-primary decoration-1">
//             {truncateText(
//               "Autumn is a second spring when every leaf is a flower",
//               65
//             )}
//           </h2>
//         </Link>

//         <div className="flex items-center gap-3">
//           <CategoryBtn category="nature" />
//           <BookmarkBtn />
//         </div>
//         <AuthorAvatar />
//         <div className="flex flex-wrap items-center text-sm gap-6 mt-4 md:mt-0">
//           <LikeBtn />
//           <DisLikeBtn />
//           <CommentBtn />
//           <ShareBtn />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

import { Link } from "react-router-dom";
import cardImage from "../../assets/images/fantasy-2049567_1280.jpg";
import { truncateText } from "../../utils/textTruncate";
import { AiOutlineCalendar } from "react-icons/ai";
import CategoryBtn from "./CategoryBtn";
import LikeBtn from "./LikeBtn";
import CommentBtn from "./CommentBtn";
import ShareBtn from "./ShareBtn";
import DisLikeBtn from "./DisLikeBtn";
import BookmarkBtn from "./BookmarkBtn";
import AuthorAvatar from "./AuthorAvatar";

const BlogCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-start lg:items-center gap-6 bg-base-300 shadow-xl rounded-lg p-3 md:p-6">
      <img
        src={cardImage}
        alt="Movie"
        className="rounded-lg sm:w-full md:w-2/5 h-full object-cover"
      />
      <div className="flex flex-col justify-center gap-2 md:gap-4">
        <p className="text-gray-500 text-[10px] md:text-[12px] flex items-center gap-1">
          <span>
            <AiOutlineCalendar />
          </span>
          <span>July 2, 2020</span>
        </p>
        <Link to={`/blog/:blogId`}>
          <h2 className="text-[12px] md:text-3xl font-[700] cursor-pointer hover:underline decoration-primary decoration-1">
            {truncateText(
              "Autumn is a second spring when every leaf is a flower",
              65
            )}
          </h2>
        </Link>

        <div className="flex items-center gap-0">
          <CategoryBtn category="nature" />
          <BookmarkBtn />
        </div>
        <AuthorAvatar />
        {/* <div className="flex flex-wrap items-center text-sm gap-4 md:gap-6 mt-2 md:mt-0"> */}
        <div className="grid grid-cols-4 md:grid-cols-4 gap-x-2 gap-y-2 w-full md:w-1/2">
          <LikeBtn />
          <DisLikeBtn />
          <CommentBtn />
          <ShareBtn />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
