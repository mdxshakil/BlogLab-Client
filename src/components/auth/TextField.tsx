/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister, FieldErrors } from "react-hook-form";

type IProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  name: string;
  placeholder: string;
  type: string;
};

const TextField = ({ register, errors, name, placeholder, type }: IProps) => {
  return (
    <div
      className={`${
        type === "firstName" || type === "lastName" ? "flex" : ""
      } w-full`}
    >
      {/* <input
        className={`p-2 rounded-xl outline-none border w-full bg-white dark:bg-gray-800 ${
          errors[name]
            ? "border-red-500 focus:outline-none"
            : "border-none focus:outline-primary"
        }`}
        type={type}
        placeholder={placeholder}
        {...register(name, { required: true })}
      /> */}
      <input
        className={`p-2 w-full bg-base-300 border-b-[1px] border-primary outline-none ${
          errors[name] ? "border-red-500" : ""
        }`}
        type={type}
        placeholder={placeholder}
        {...register(name, { required: true })}
      />
      {errors[name] && (
        <p className="text-[12px] text-red-500 ">This field is required</p>
      )}
    </div>
  );
};

export default TextField;
