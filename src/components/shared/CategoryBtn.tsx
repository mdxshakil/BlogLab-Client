type IProps = {
  category: string;
};

const CategoryBtn = ({ category }: IProps) => {
  return (
    <>
      <div className="inline-flex items-center justify-center bg-gray-400 dark:bg-gray-600 rounded-lg px-2 py-[1px] gap-1 cursor-pointer">
        <div className="bg-red-500 w-2 h-2 rounded-full"></div>
        <span className="text-[10px] md:text-[12px]">{category}</span>
      </div>
    </>
  );
};

export default CategoryBtn;
