import carousel from "../assets/images/fantasy-2049567_1280.jpg";

const BlogCard = () => {
  return (
    <div className="grid items-center grid-cols-1 gap-6">
      <div>
        <img
          src={carousel}
          alt=""
          className="rounded-lg object-cover w-[100%]"
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div>
          <span className="text-[12px] md:text-md font-bold bg-primary bg-opacity-50 rounded-full px-2 w-auto">
            Business Travel
          </span>
          <span> - </span>
          <span className="text-[10px] md:text-md text-gray-500 w-auto">
            July 2, 2020
          </span>
        </div>
        <h2 className="text-sm sm:text-md md:text-xl font-bold cursor-pointer hover:underline">
          Your most unhappy customers are your greatest source of learning.
        </h2>

        <p className="text-[12px] md:text-md text-justify text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          dignissimos laboriosam sapiente fugiat asperiores. sit....
        </p>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-8 md:w-10 rounded-full">
              <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" />
            </div>
          </div>
          <div>
            <h6 className="font-bold text-[12px] sm:text-md">Shakil Ahmed</h6>
            <p className="text-gray-500 text-[10px] sm:text-sm">
              CEO and Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
