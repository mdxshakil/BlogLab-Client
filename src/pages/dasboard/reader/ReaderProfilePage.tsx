import {
  AiFillEdit,
  AiFillSetting,
  AiOutlineBorderInner,
} from "react-icons/ai";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import useGetUserFromStore from "../../../hooks/useGetUser";
import { useGetProfileInfoQuery } from "../../../redux/features/profile/profileApi";

const ReaderProfilePage = () => {
  const { profileId } = useGetUserFromStore();
  const { data, isLoading } = useGetProfileInfoQuery(profileId);
  const { firstName, lastName, profilePicture, readerLevel } = data?.data || {};

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img
          src={profilePicture}
          alt=""
          className="w-48 h-48 object-cover rounded-full border-2 border-primary my-6"
        />
        <button className="btn rounded-full absolute bottom-12 left-48">
          <AiFillEdit className="text-primary" />
        </button>
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-medium text-gray-500">
            {firstName + " " + lastName}
          </h1>
          <div className="flex gap-3 items-center justify-center mb-3">
            <p className="font-light mt-3">
              <span className="font-bold text-primary">Reader: </span>
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
          <div className="stat-figure text-primary">
            <AiOutlineBorderInner className="w-8 h-8" />
          </div>
          <div className="stat-title">Blogs Read</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-primary">
            <AiFillSetting className="w-8 h-8" />
          </div>
          <div className="stat-title"> Made Comments</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-primary">
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

export default ReaderProfilePage;
