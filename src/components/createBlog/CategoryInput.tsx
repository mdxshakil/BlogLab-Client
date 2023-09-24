/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

type IProps = {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  value: string;
};

const CategoryInput = ({ id, label, register, value }: IProps) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="radio"
        id={id}
        className="radio radio-primary h-5 w-5"
        required
        value={value}
        {...register("category")}
      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default CategoryInput;
