/* eslint-disable @typescript-eslint/no-explicit-any */
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import React, { useEffect, useState } from "react";
import {
  AiOutlineCheckCircle,
  AiTwotoneEdit,
  AiTwotoneEye,
} from "react-icons/ai";
import CategoryInput from "../components/createBlog/CategoryInput";
import VisibilityInput from "../components/createBlog/VisibilityInput";
import PreviewModal from "../components/createBlog/PreviewModal";
import { useGetAllCategoryQuery } from "../redux/features/category/categoryApi";
import { ICategory, IPreviewBlog } from "../interface";
import CategoryLoader from "../components/createBlog/CategoryLoader";
import { FieldValues, useForm } from "react-hook-form";
import { useCreateNewBlogMutation } from "../redux/features/blog/blogApi";
import { QuillModules } from "../constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import DOMPurify from "dompurify";

const CreateBlog = () => {
  const [previewBlog, setPreviewBlog] = useState(false);
  const [previewData, setPreviewData] = useState<IPreviewBlog>({
    title: "",
    content: "",
    banner: "",
    category: "",
  });

  const [bannerImg, setBannerImg] = useState<any>();
  const [previewBannerImg, setPreviewBannerImg] = useState<string>();
  const { data: categories, isLoading } = useGetAllCategoryQuery("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [createBlog, createBlogStatus] = useCreateNewBlogMutation();
  const {
    register,
    handleSubmit,
    // formState: { errors },
    getValues,
  } = useForm();

  const handlePreviewModal = () => {
    const data = {
      title: getValues("title"),
      content,
      category: getValues("category"),
      visibility: getValues("visibility"),
      banner: previewBannerImg,
    };
    setPreviewData(data as IPreviewBlog);
    setPreviewBlog(!previewBlog);
  };

  const handleBannerImageSelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedImage = event.target.files?.[0];
    if (selectedImage) {
      setBannerImg(selectedImage);
      const objectUrl = URL.createObjectURL(selectedImage);
      setPreviewBannerImg(objectUrl);
    }
  };

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("content", content);
    formData.append("categoryId", data.category);
    formData.append("visibility", data.visibility);
    formData.append("banner", bannerImg);

    await createBlog(formData);
  };

  useEffect(() => {
    if (createBlogStatus.isError) {
      toast.error("Failed to create new blog. Try Again!");
    }
    if (createBlogStatus.isSuccess) {
      toast.success("New blog created successfully. Wait for approval!");
      navigate("/");
    }
  }, [createBlogStatus.isSuccess, createBlogStatus.isError, navigate]);

  return (
    <div className="py-12 relative">
      <form
        className="grid grid-cols-6 gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* editor */}
        <div className="col-span-6 md:col-span-4">
          <input
            type="text"
            id=""
            placeholder="Your awesome title....."
            className="bg-base-100 border border-gray-600 p-3 rounded-lg w-full mb-3 text-2xl focus:outline-none"
            required
            {...register("title")}
          />
          <ReactQuill
            modules={QuillModules}
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Your awesome content....."
          />
        </div>
        {/* statistics */}
        <div className="col-span-6 md:col-span-2">
          <div className="border-[1px] border-gray-600 p-3 mb-3 rounded-lg">
            <h2 className="font-bold text-xl text-primary mb-2">
              Select Category & banner
            </h2>
            {isLoading ? (
              <CategoryLoader />
            ) : (
              categories?.data?.map((category: ICategory) => (
                <CategoryInput
                  key={category?.id}
                  id={category?.id}
                  label={category?.title}
                  register={register}
                  value={category.id}
                />
              ))
            )}
            <div>
              {bannerImg && (
                <img
                  src={previewBannerImg}
                  alt=""
                  className="w-full object-cover my-2 rounded-lg"
                />
              )}
              <input
                type="file"
                id="banner"
                className="file-input file-input-xs file-input-bordered file-input-primary mt-3"
                name="banner"
                onChange={handleBannerImageSelection}
                required
                accept=".jpg, .jpeg, .png, .JPEG"
              />
            </div>
          </div>
          <div className="border-[1px] border-gray-600 p-3 rounded-lg flex flex-col gap-2">
            <h2 className="text-xl font-bold text-primary">Publish</h2>
            <div>
              <div className="flex gap-4">
                <p className="font-bold">Visibility:</p>
                <VisibilityInput
                  id="public"
                  label="Public"
                  register={register}
                  value={"public"}
                />
                <VisibilityInput
                  id="private"
                  label="Private"
                  register={register}
                  value={"private"}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-center md:justify-start gap-3">
              <button className="btn btn-sm btn-primary" type="button">
                Save as draft {<AiTwotoneEdit />}
              </button>
              <button
                className="btn btn-sm btn-primary"
                type="button"
                onClick={handlePreviewModal}
              >
                Preview {<AiTwotoneEye />}
              </button>
              <button className="btn btn-sm border-primary" type="submit">
                Publish {<AiOutlineCheckCircle />}
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* preview modal*/}
      {previewBlog && (
        <PreviewModal
          handlePreviewModal={handlePreviewModal}
          previewData={previewData}
        />
      )}
    </div>
  );
};

export default CreateBlog;

{
  /* <div
  dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(value),
  }}
></div>; */
}
