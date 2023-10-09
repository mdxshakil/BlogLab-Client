import useGetUserFromStore from "../../../hooks/useGetUser";
import AdminProfilePage from "../admin/AdminProfilePage";
import BloggerProfilePage from "../blogger/BloggerProfilePage";
import ReaderProfilePage from "../reader/ReaderProfilePage";

const ProfilePage = () => {
  const { role } = useGetUserFromStore();

  if (role === "admin") {
    return <AdminProfilePage />;
  } else if (role === "blogger") {
    return <BloggerProfilePage />;
  } else if (role === "reader") {
    return <ReaderProfilePage />;
  }
};

export default ProfilePage;
