/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineArrowRight } from "react-icons/ai";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type IProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  name: string;
  title: string;
};

const RoleInput = ({ register, errors, name, title }: IProps) => {
  return (
    <li>
      <input
        type="radio"
        id={name}
        value={name}
        className="hidden peer"
        {...register("role", { required: true })}
      />
      <label
        htmlFor={name}
        className={`inline-flex items-center justify-between w-full px-2 py-3 bg-white border border-primary-200 rounded-lg cursor-pointer dark:hover:text-primary dark:border-gray-700 dark:peer-checked:text-primary peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 ${
          errors.role ? "border border-red-500 dark:border-red-500" : ""
        }`}
      >
        <div className="block">
          <div className="w-full text-base font-semibold">{title}</div>
        </div>
        <AiOutlineArrowRight className="w-5 h-5 ml-3" />
      </label>
    </li>
  );
};

export default RoleInput;
