/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import { useGetCategorizedBlogsQuery } from "../redux/features/category/categoryApi";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import BlogCard from "../components/shared/BlogCard";
import PaginationButton from "../components/pagination/PaginationButton";
import { useState } from "react";

const CategorizedBlogs = () => {
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSoryBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  const {
    data: blogs,
    isLoading,
    isError,
  } = useGetCategorizedBlogsQuery({ category, page, limit, sortBy, sortOrder });
  const isPreviousButtonDisabled = page === 1;
  const isNextButtonDisabled = page === blogs?.data?.meta?.pageCount;

  let content;
  if (isLoading) {
    return <LoadingSpinner />;
  } else if (!isLoading && isError) {
    content = <p className="text-error">There was an error</p>;
  } else if (!isLoading && !isError && blogs?.data?.data?.length === 0) {
    content = <p className="text-error">No result available</p>;
  } else if (!isLoading && !isError && blogs?.data?.data?.length > 0) {
    content = blogs?.data?.data?.map((blog: any) => (
      <BlogCard key={blog?.id} blog={blog} />
    ));
  }

  return (
    <div className="mt-6">
      <p className="text-center text-secondary text-sm">
        Total {blogs?.data?.data?.length} blogs found in {category} category.
      </p>
      <div className="grid grid-cols-1 gap-6 mt-3">{content}</div>
      <div>
        <PaginationButton
          currentPage={page}
          setPage={setPage}
          isPreviousButtonDisabled={isPreviousButtonDisabled}
          isNextButtonDisabled={isNextButtonDisabled}
        />
      </div>
    </div>
  );
};

export default CategorizedBlogs;
