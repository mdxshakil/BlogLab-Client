import { useThemeMode } from "../hooks/useThemeMode";
import signupAsBlogger from "../assets/images/signup-as-blogger.png";
import signupAsReader from "../assets/images/signup-as-reader.png";

const Signup = () => {
  // apply currenttheme to the page
  useThemeMode();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-2">
        <div>
          <img src={signupAsBlogger} alt="" />
          <img src={signupAsReader} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Signup;
