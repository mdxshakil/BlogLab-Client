/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister, FieldErrors } from "react-hook-form";

type IProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

const TermsCheckbox = ({ register, errors }: IProps) => {
  return (
    <label className="label cursor-pointer justify-end flex-row-reverse gap-3">
      <span className="text-[12px]">Accept terms and conditions</span>
      <input
        type="checkbox"
        className={`checkbox checkbox-sm ${
          errors.termsAndConditions ? "checkbox-error" : "checkbox-primary"
        }`}
        {...register("termsAndConditions", { required: true })}
      />
    </label>
  );
};

export default TermsCheckbox;
