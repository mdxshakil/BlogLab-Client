import {
  AiFillInfoCircle,
  AiFillSetting,
  AiOutlineBorderInner,
} from "react-icons/ai";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import { useGetProfileInfoQuery } from "../../../redux/features/profile/profileApi";
import { useParams } from "react-router-dom";

const BloggerPublicProfilePage = () => {
  const { profileId } = useParams();
  const { data, isLoading } = useGetProfileInfoQuery(profileId);
  const { firstName, lastName, profilePicture, bloggerLevel, readerLevel } =
    data?.data || {};

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img
          src={profilePicture}
          alt=""
          className="w-48 h-48 object-cover rounded-full border-2 border-secondary my-6"
        />
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-medium text-gray-500">
            {firstName + " " + lastName}
          </h1>
          <div className="flex gap-3 items-center justify-center mb-3">
            <p className="font-light mt-3">
              <span className="font-bold text-secondary">Blogger: </span>
              {bloggerLevel}
            </p>
            <p className="font-light mt-3">
              <span className="font-bold text-secondary">Reader: </span>
              {readerLevel}
            </p>
          </div>
          <i className="text-gray-500">
            Believe you can and you are half way there
          </i>
        </div>
      </div>

      <div className="stats stats-vertical lg:stats-horizontal shadow mt-12">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <AiFillInfoCircle className="w-8 h-8" />
          </div>
          <div className="stat-title">Blogs posted</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <AiFillSetting className="w-8 h-8" />
          </div>
          <div className="stat-title"> Made Comments</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <AiOutlineBorderInner className="w-8 h-8" />
          </div>
          <div className="stat-title">Blogs Read</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <AiOutlineBorderInner className="w-8 h-8" />
          </div>
          <div className="stat-title">Joined IN</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default BloggerPublicProfilePage;
