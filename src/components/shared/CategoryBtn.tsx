type IProps = {
  category: string;
};

const CategoryBtn = ({ category }: IProps) => {
  return (
    <>
      <div className="badge bg-gray-600 bg-opacity-50 gap-2 px-2 py-3">
        <div className="bg-red-500 w-2 h-2 rounded-full"></div>
        <span>{category}</span>
      </div>
    </>
  );
};

export default CategoryBtn;
