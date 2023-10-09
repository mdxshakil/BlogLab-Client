/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undefined */
import { useState, useEffect } from "react";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import {
  useCreateNewCategoryMutation,
  useEditCategoryMutation,
  useGetAllCategoryQuery,
} from "../../../redux/features/category/categoryApi";
import { AiOutlinePlus } from "react-icons/ai";
import toast from "react-hot-toast";

const ManageCategoryPage = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useGetAllCategoryQuery(undefined);
  const [createNewCategory, createStatus] = useCreateNewCategoryMutation();
  const [editcategory, editStatus] = useEditCategoryMutation();

  // State for managing editing
  const [editedTitle, setEditedTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newCategoryValue, setNewCategoryValue] = useState("");

  const handleEdit = (category: any) => {
    setIsEditing(true);
    setSelectedCategory(category);
    setEditedTitle(category.title);
  };

  //save category after edit
  const handleSave = async () => {
    await editcategory({
      // @ts-ignore
      categoryId: selectedCategory.id,
      data: { title: editedTitle },
    });

    setIsEditing(false);
    setSelectedCategory(null);
  };

  const handleAddNewCategory = async () => {
    await createNewCategory({ title: newCategoryValue.toLocaleLowerCase() });
    setNewCategoryValue("");
  };

  useEffect(() => {
    // toast for creating
    if (createStatus.isSuccess) {
      toast.success("New category created!");
    } else if (createStatus.isError) {
      toast.error(
        (createStatus?.error as { data: { message: string } } | undefined)?.data
          ?.message || "An error occurred"
      );
    }
    //toast for editing
    if (editStatus.isSuccess) {
      toast.success("Category updated successfully!");
    } else if (editStatus.isError) {
      toast.error(
        (editStatus?.error as { data: { message: string } } | undefined)?.data
          ?.message || "An error occurred"
      );
    }
  }, [createStatus, editStatus]);

  // decide what to render
  let content;
  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (!isLoading && isError) {
    content = <p className="text-error text-center">There was an error</p>;
  } else if (!isLoading && !isError && categories?.data.length === 0) {
    content = (
      <p className="text-secondary text-center">No content available</p>
    );
  } else if (!isLoading && !isError && categories?.data.length > 0) {
    content = (
      <div className="bg-white dark:bg-base-300 p-6 rounded-lg shadow-md">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left py-3">Category</th>
              <th className="text-left py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.data.map((category: any) => (
              <tr key={category.id} className="mt-12">
                <td className="py-3">
                  {isEditing && selectedCategory === category ? (
                    <input
                      type="text"
                      className=" border rounded-full px-1"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                    />
                  ) : (
                    <p>{category.title}</p>
                  )}
                </td>
                <td>
                  {isEditing && selectedCategory === category ? (
                    <div className="flex gap-6">
                      <button
                        className="btn btn-xs btn-primary rounded-full"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-xs btn-warning rounded-full"
                        onClick={() => {
                          setIsEditing(false);
                          setSelectedCategory(null);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <button
                        className="btn btn-xs btn-info rounded-full"
                        onClick={() => handleEdit(category)}
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1 className="text-center font-semibold text-3xl my-3">
          Manage categories
        </h1>
        <div className="flex gap-3 items-center justify-center p-6">
          <input
            type="text"
            placeholder="Add new category"
            className="input input-bordered input-sm input-primary rounded-full max-w-xs focus:outline-none"
            value={newCategoryValue}
            onChange={(e) => setNewCategoryValue(e.target.value)}
          />
          <button
            className="btn btn-xs btn-primary rounded-full"
            onClick={handleAddNewCategory}
          >
            Add
            <AiOutlinePlus />
          </button>
        </div>
        <p className="my-3 text-secondary">
          Total categories: {categories?.data?.length}
        </p>
      </div>
      {content}
    </div>
  );
};

export default ManageCategoryPage;
