import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { FormEvent, useState } from "react";
import { AiTwotoneEdit, AiTwotoneEye } from "react-icons/ai";
import CategoryInput from "../components/createBlog/CategoryInput";
import VisibilityInput from "../components/createBlog/VisibilityInput";
import PreviewModal from "../components/createBlog/PreviewModal";
// import DOMPurify from "dompurify";

const CreateBlog = () => {
  const [preview, setPreview] = useState(false);
  const [value, setValue] = useState("");
  const [coverImg, setCoverImg] = useState<string>("");

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "video"],
      ["clean"],
    ],
  };

  const handlePreviewModal = () => {
    setPreview(!preview);
  };

  const handleCoverImageSelection = (event: FormEvent) => {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      setCoverImg(URL.createObjectURL(file));
    }
  };

  return (
    <div className="py-12 relative">
      <form className="grid grid-cols-6 gap-6">
        {/* editor */}
        <div className="col-span-6 md:col-span-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your awesome title....."
            className="bg-base-100 border border-gray-600 p-3 rounded-lg w-full mb-3 text-2xl focus:outline-none"
            required
          />
          <ReactQuill
            modules={modules}
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Your awesome content....."
          />
        </div>
        {/* statistics */}
        <div className="col-span-6 md:col-span-2">
          <div className="border-[1px] border-gray-600 p-3 mb-3 rounded-lg">
            <h2 className="font-bold text-xl text-primary mb-2">
              Select Category & banner
            </h2>
            <CategoryInput id="art" label="Art" />
            <CategoryInput id="travel" label="Travel" />
            <CategoryInput id="science" label="Science" />
            <CategoryInput id="programming" label="Programming" />
            <CategoryInput id="food" label="Food" />
            <div>
              {coverImg && (
                <img
                  src={coverImg}
                  alt=""
                  className="w-full object-cover my-2 rounded-lg"
                />
              )}
              <input
                type="file"
                name=""
                id=""
                className="file-input file-input-xs file-input-bordered file-input-primary mt-3"
                onChange={handleCoverImageSelection}
                required
              />
            </div>
          </div>
          <div className="border-[1px] border-gray-600 p-3 rounded-lg flex flex-col gap-2">
            <h2 className="text-xl font-bold text-primary">Publish</h2>
            <div>
              <div className="flex gap-4">
                <p className="font-bold">Visibility:</p>
                <VisibilityInput id="public" label="Public" />
                <VisibilityInput id="private" label="Private" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-center md:justify-start gap-3">
              <button className="btn btn-sm btn-primary brder border-primary">
                Save as draft {<AiTwotoneEdit />}
              </button>
              <button
                className="btn btn-sm btn-primary"
                onClick={handlePreviewModal}
              >
                Preview {<AiTwotoneEye />}
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* preview modal*/}
      {preview && <PreviewModal handlePreviewModal={handlePreviewModal} />}
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
