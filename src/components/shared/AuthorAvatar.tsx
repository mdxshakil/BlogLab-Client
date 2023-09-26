type IProps = {
  firstName: string;
  lastName: string;
  profilePicture: string;
  bloggerLevel: string;
};

const AuthorAvatar = (author: IProps) => {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <div className="avatar">
        <div className="w-6 md:w-8 rounded-full border-2 border-primary">
          <img src={author.profilePicture} />
        </div>
      </div>
      <div>
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
