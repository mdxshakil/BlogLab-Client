/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useGetBlogsBySearchTermQuery } from "../redux/features/blog/blogApi";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import BlogCard from "../components/shared/BlogCard";
import { useState } from "react";
import PaginationButton from "../components/pagination/PaginationButton";
import SearchBar from "../components/shared/SearchBar";

const BlogSearchPage = () => {
  const { searchTerm } = useParams();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [sortBy, setSoryBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  const {
    data: blogs,
    isLoading,
    isError,
  } = useGetBlogsBySearchTermQuery({
    searchTerm,
    page,
    limit,
    sortBy,
    sortOrder,
  });

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
      <div>
        <SearchBar />
      </div>
      <p className="text-center text-secondary text-sm mt-3">
        Total {blogs?.data?.data?.length} blogs found for "{searchTerm}"
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

export default BlogSearchPage;
