type IProps = {
  id: string;
  label: string;
};

const CategoryInput = ({ id, label }: IProps) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="radio"
        name="category"
        id={id}
        className="radio radio-primary h-5 w-5"
        required
      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default CategoryInput;
