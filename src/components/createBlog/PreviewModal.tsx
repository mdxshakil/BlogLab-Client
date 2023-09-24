import {
  AiFillCloseCircle,
  AiOutlineCalendar,
  AiOutlineCheck,
} from "react-icons/ai";
import CategoryBtn from "../shared/CategoryBtn";
import { IPreviewBlog } from "../../interface";

type Iprops = {
  handlePreviewModal: () => void;
  previewData: IPreviewBlog;
};

const PreviewModal = ({ handlePreviewModal, previewData }: Iprops) => {
  return (
    <div className="absolute top-0 z-10 my-6 py-6 w-full flex justify-center backdrop-blur-sm">
      <div
        className="relative w-full md:w-3/4 p-6 bg-base-300 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-base-300 p-6 lg:p-12 rounded-lg">
          <div>
            {/* title, image and date */}
            <div>
              <div className="flex items-center gap-4">
                <CategoryBtn category={previewData.category} />
                <p className="text-gray-500 text-sm flex items-center gap-1 mb-2">
                  <span>
                    <AiOutlineCalendar />
                  </span>
                  <span>July 2, 2020</span>
                </p>
              </div>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6">
                {previewData.title}
              </h1>
              <img
                src={previewData.banner}
                alt=""
                className="w-full object-cover h-40 md:h-64 rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-6">
              <div className="divider m-0"></div>
              <div
                dangerouslySetInnerHTML={{ __html: previewData.content }}
              ></div>
            </div>
          </div>
        </div>
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
