import { Link } from "react-router-dom";
import { useFollowBloggerMutation } from "../../redux/features/following/followingApi";
import useGetUserFromStore from "../../hooks/useGetUser";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { BsCheck2All } from "react-icons/bs";

type Author = {
  firstName: string;
  lastName: string;
  profilePicture: string;
  bloggerLevel: string;
  id: string;
};

type IProps = {
  author: Author;
  isAlreadyFollowing: boolean;
};

const ProfileCard = ({ author, isAlreadyFollowing }: IProps) => {
  const { firstName, lastName, profilePicture, bloggerLevel, id } =
    author || {};
  const { profileId } = useGetUserFromStore();
  const [followBlogger, { isLoading, isError, error }] =
    useFollowBloggerMutation();

  const handleFollowBlogger = () => {
    followBlogger({ followerId: profileId, authorId: id });
  };

  useEffect(() => {
    if (isError) {
      const errorData = error as { data?: { message?: string } }; //type assertion
      toast.error(errorData?.data?.message || "An error occurred");
    }
  }, [isError, error]);

  return (
    <div className="flex items-center justify-center mb-6 bg-base-200 rounded-lg py-10">
      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={profilePicture} />
          </div>
        </div>
        <div>
          <p className="text-center text-sm text-primary">{bloggerLevel}</p>
          <h2 className="text-center font-bold text-lg">
            {firstName + " " + lastName}
          </h2>
          <p>5239 followers</p>
        </div>
        <div className="flex gap-4">
          {isAlreadyFollowing ? (
            <p className="italic text-primary flex items-center gap-1">
              Following <BsCheck2All />
            </p>
          ) : (
            <button
              className="btn btn-outline btn-xs md:btn-sm rounded-lg btn-primary"
              onClick={handleFollowBlogger}
              disabled={profileId === id}
            >
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <span>Follow</span>
              )}
            </button>
          )}
          <button className="btn btn-xs md:btn-sm rounded-lg btn-primary">
            <Link to={`/profile/${id}`}>Profile</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
