/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

type IProps = {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  value: string;
};

const VisibilityInput = ({ id, label, register, value }: IProps) => {
  return (
    <div className="flex items-center gap-1">
      <input
        type="radio"
        id={id}
        className="radio radio-primary h-5 w-5"
        required
        {...register("visibility")}
        value={value}
      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default VisibilityInput;
