import { FcGoogle } from "react-icons/fc";

const GoogleBtn = () => {
  return (
    <button className="bg-gray-300 py-2 w-full rounded-xl mt-5 flex justify-center items-center gap-3 text-sm hover:scale-105 duration-300 text-primary">
      <FcGoogle className="text-xl" />
      Continue with Google
    </button>
  );
};

export default GoogleBtn;
