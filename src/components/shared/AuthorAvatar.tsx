import { useNavigate } from "react-router-dom";

type IProps = {
  firstName: string;
  lastName: string;
  profilePicture: string;
  bloggerLevel: string;
  authorId: string;
};

const AuthorAvatar = (author: IProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <div className="avatar">
        <div className="w-6 md:w-8 rounded-full border-2 border-primary">
          <img src={author.profilePicture} />
        </div>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/profile/${author.authorId}`)}
      >
        <h6 className="font-bold text-[10px] md:text-sm">
          {author.firstName + " " + author.lastName}
        </h6>
        <p className="text-gray-500 text-[10px] md:text-sm">
          {author.bloggerLevel}
        </p>
      </div>
    </div>
  );
};

export default AuthorAvatar;
