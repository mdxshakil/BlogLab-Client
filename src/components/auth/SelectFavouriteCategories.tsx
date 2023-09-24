/* eslint-disable no-undefined */
import { useGetAllCategoryQuery } from "../../redux/features/category/categoryApi";
import React, { SetStateAction } from "react";

type IProps = {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<SetStateAction<string[]>>;
};

const SelectFavouriteCategories = ({
  selectedCategories,
  setSelectedCategories,
}: IProps) => {
  const { data, isLoading } = useGetAllCategoryQuery(undefined);

  const handleCategorySelection = (chosenId: string) => {
    const isSelected = selectedCategories.find(
      (category: string) => category === chosenId
    );
    if (isSelected) {
      const remainingCategories = selectedCategories.filter(
        (category: string) => category !== chosenId
      );
      setSelectedCategories(remainingCategories);
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, chosenId]);
    }
  };
  return (
    <div>
      <h3 className="font-semibold text-center mb-3">
        Select favourite categories:
      </h3>
      <div className="flex items-center justify-center flex-wrap gap-3">
        {isLoading && <span className="loading loading-spinner"></span>}
        {data?.data?.map((category: { id: string; title: string }) => {
          //check if the category is selcted or not
          const isSelected = selectedCategories.find(
            (item: string) => item === category.id
          );
          return (
            <p
              key={category?.id}
              className={`py-2 px-3 rounded-full cursor-pointer ${
                isSelected ? "bg-primary text-base-100" : "bg-base-100"
              }`}
              onClick={() => handleCategorySelection(category.id)}
            >
              {category?.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SelectFavouriteCategories;
