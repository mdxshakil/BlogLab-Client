/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type IProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  name: string;
  placeholder: string;
  showPassword?: boolean;
  setShowPassword?: any;
  showConfirmPassword?: boolean;
  setShowConfirmPassword?: any;
  isPasswordField?: boolean;
  isConfirmPasswordField?: boolean;
};

const PasswordField = ({
  register,
  errors,
  name,
  placeholder,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  isPasswordField,
  isConfirmPasswordField,
}: IProps) => {
  return (
    <div>
      <div className="relative">
        <input
          className={`p-2 w-full bg-base-300 border-b-[1px] border-primary outline-none ${
            errors[name] ? "border-red-500" : ""
          }`}
          type={showPassword || showConfirmPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register(name, { required: true })}
        />
        {isPasswordField && (
          <span
            className="absolute top-1/2 right-3 -translate-y-1/2 text-xl cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiFillEyeInvisible className="text-red-500" />
            ) : (
              <AiFillEye className="text-primary" />
            )}
          </span>
        )}
        {isConfirmPasswordField && (
          <span
            className="absolute top-1/2 right-3 -translate-y-1/2 text-xl cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <AiFillEyeInvisible className="text-red-500" />
            ) : (
              <AiFillEye className="text-primary" />
            )}
          </span>
        )}
      </div>
      {errors[name] && (
        <p className="text-sm text-red-500">This field is required</p>
      )}
    </div>
  );
};

export default PasswordField;
