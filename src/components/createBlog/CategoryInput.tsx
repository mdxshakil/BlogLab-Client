/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

type IProps = {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  value: string;
  defaultCategoryId?: string;
};

const CategoryInput = ({
  id,
  label,
  register,
  value,
  // defaultCategoryId,
}: IProps) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="radio"
        id={id}
        className="radio radio-primary h-5 w-5"
        required
        value={value}
        // checked={defaultCategoryId === id}
        {...register("category")}
      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default CategoryInput;
