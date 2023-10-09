import { AiFillEdit } from "react-icons/ai";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import useGetUserFromStore from "../../../hooks/useGetUser";
import { useGetProfileInfoQuery } from "../../../redux/features/profile/profileApi";

const AdminProfilePage = () => {
  const { profileId, email } = useGetUserFromStore();

  const { data, isLoading } = useGetProfileInfoQuery(profileId);
  const { firstName, lastName, profilePicture } = data?.data || {};

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img
          src={profilePicture}
          alt=""
          className="w-48 h-48 object-cover rounded-full border-2 border-red-500 my-6"
        />
        <button className="btn rounded-full absolute bottom-12 left-48">
          <AiFillEdit className="text-red-500" />
        </button>
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-medium text-gray-500">
            {firstName + " " + lastName}
          </h1>
          <p className="font-light text-red-500 mt-3">Admin</p>
          <i className="mt-3 text-gray-500">{email}</i>
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;
