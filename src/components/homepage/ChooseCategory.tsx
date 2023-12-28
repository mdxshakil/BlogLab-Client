/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiFillCloseCircle } from "react-icons/ai";
import {
  useFollowUnfollowCategoryMutation,
  useGetAllCategoryQuery,
  useGetUsersSelectedCategoryQuery,
} from "../../redux/features/category/categoryApi";
import { useAppSelector } from "../../redux/hooks";

type IProps = {
  handleCategoryChooseModal: () => void;
};

const ChooseCategory = ({ handleCategoryChooseModal }: IProps) => {
  const { profileId } = useAppSelector((state) => state.auth.user);
  const { data: categories } = useGetAllCategoryQuery("");
  const { data: selectedCategories } =
    useGetUsersSelectedCategoryQuery(profileId);
  const [followUnfollowCategory] = useFollowUnfollowCategoryMutation();

  const handleCategoryfollow = async (categoryId: string) => {
    await followUnfollowCategory({ profileId, categoryId });
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-screen flex justify-center items-center backdrop-blur-sm">
      <div
        className="relative w-full md:w-3/4 p-6 bg-base-300 rounded-lg m-12 h-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <AiFillCloseCircle
          className="absolute top-3 right-3 text-2xl cursor-pointer text-red-500"
          onClick={() => handleCategoryChooseModal()}
        />

        <div className="flex items-center justify-center flex-wrap h-full">
          {categories?.data?.map((category: any) => {
            const isCategorySelected = selectedCategories?.data?.find(
              (cat: any) => cat.categoryId === category.id
            );
            return (
              <button
                className={`btn rounded-full btn-sm mx-2 ${
                  isCategorySelected ? "btn-primary" : "border border-primary"
                }`}
                key={category.id}
                onClick={() => handleCategoryfollow(category?.id)}
              >
                {category?.title}
              </button>
            );
          })}
        </div>
        <small>(Green means you are already following this category)</small>
      </div>
    </div>
  );
};

export default ChooseCategory;
