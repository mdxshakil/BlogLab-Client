import { Link } from "react-router-dom";
import carousel from "../../assets/images/fantasy-2049567_1280.jpg";
import AddToBookmark from "../shared/AddToBookmark";
import { truncateText } from "../../utils/textTruncate";

type IProps = {
  name: string;
};
const CarouselItem = ({ name }: IProps) => {
  return (
    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 p-12 ">
      <div className="order-last lg:order-first">
        <img
          src={carousel}
          alt=""
          className="rounded-lg object-cover w-[100%]"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 md:gap-4">
        <p>
          <span className="font-bold bg-primary bg-opacity-50 rounded-full px-2">
            Business Travel
          </span>
          <span className="text-gray-500"> - July 2, 2020</span>
        </p>
        <Link to={`/blog/:blogId`}>
          <h2 className="text-xl md:text-4xl font-bold cursor-pointer hover:underline">
            {truncateText(
              "Your most unhappy customers are your greatest source of learning.",
              65
            )}
          </h2>
        </Link>
        {/* <p className="text-sm text-justify text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          dignissimos laboriosam sapiente fugiat asperiores. Maiores neque
          consectetur rem doloribus assumenda ......
        </p> */}
        <div>
          <AddToBookmark />
        </div>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" />
            </div>
          </div>
          <div>
            <h6 className="font-bold text-sm md:text-base">{name}</h6>
            <p className="text-gray-500 text-[12px] md:text-sm">
              CEO and Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
