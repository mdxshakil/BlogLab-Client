
const BlogCardLoader = () => {
  return (
    <div className="flex flex-col md:flex-row items-start lg:items-center gap-6 bg-base-300 shadow-xl rounded-lg p-3 md:p-6">
      <div className="w-2/5 bg-gray-300 animate-pulse rounded-lg h-48 md:h-64"></div>
      <div className="flex flex-col justify-center gap-2 md:gap-4 w-full md:w-3/5">
        <div className="h-4 bg-gray-300 animate-pulse rounded"></div>
        <div className="h-6 bg-gray-300 animate-pulse rounded"></div>
        <div className="h-8 bg-gray-300 animate-pulse rounded"></div>
        <div className="h-12 bg-gray-300 animate-pulse rounded"></div>
        <div className="h-4 bg-gray-300 animate-pulse rounded"></div>
      </div>
    </div>
  );
};

export default BlogCardLoader;
