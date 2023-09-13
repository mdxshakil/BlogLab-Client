import BlogDetailsCard from "../blogDetails/BlogDetailsCard";
import { AiFillCloseCircle, AiOutlineCheck } from "react-icons/ai";

type Iprops = {
  handlePreviewModal: () => void;
};

const PreviewModal = ({ handlePreviewModal }: Iprops) => {
  return (
    <div className="absolute top-0 z-10 my-6 py-6 w-full flex justify-center backdrop-blur-sm">
      <div
        className="relative w-full md:w-3/4 p-6 bg-base-300 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <BlogDetailsCard isModal={true} />
        <AiFillCloseCircle
          className="absolute top-3 right-3 text-2xl cursor-pointer text-red-500"
          onClick={handlePreviewModal}
        />
        <div className="flex justify-end p-2">
          <button className="btn btn-sm btn-primary">
            Publish {<AiOutlineCheck />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
