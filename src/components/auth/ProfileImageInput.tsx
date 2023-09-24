/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineUpload } from "react-icons/ai";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import React, { useState } from "react";

type IProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  setProfileImage: any;
};

const ProfileImageInput = ({ register, errors, setProfileImage }: IProps) => {
  const [previewProfilePic, setPreviewProfilePic] = useState<string>("");

  //set the selected image to state for preview
  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0];
    if (selectedImage) {
      setProfileImage(selectedImage);
      const objectUrl = URL.createObjectURL(selectedImage);
      setPreviewProfilePic(objectUrl);
    }
  };
  return (
    <div className="flex items-center justify-center w-full mt-8">
      <label
        htmlFor="profilePicture"
        className={`flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-primary hover:border-gray-500 bg-gray-50 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-600 dark:hover:border-gray-300 rounded-full cursor-pointer duration-200 overflow-hidden ${
          errors.profilePicture ? "border-red-500" : ""
        }`}
      >
        {previewProfilePic ? (
          <img
            src={previewProfilePic}
            alt=""
            className="w-32 h-32 object-cover"
          />
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              <AiOutlineUpload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400 font-bold" />
              <p className="text-[12px] text-gray-500 dark:text-gray-400 font-semibold">
                Profile picture
              </p>
            </div>
            {errors.profilePicture && (
              <p className="text-[12px] text-red-500 text-center ">Required</p>
            )}
          </>
        )}
        <input
          id="profilePicture"
          type="file"
          className="hidden"
          {...register("profilePicture", { required: true })}
          onChange={handleImageSelect}
          accept=".jpg, .jpeg, .png, .JPEG"
        />
      </label>
    </div>
  );
};

export default ProfileImageInput;
