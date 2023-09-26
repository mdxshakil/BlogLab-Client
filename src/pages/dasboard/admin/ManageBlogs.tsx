/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import {
  useApprovePendingBlogsMutation,
  useGetPendingBlogsQuery,
} from "../../../redux/features/blog/blogApi";
import { truncateText } from "../../../utils/textTruncate";
import { useState, FormEvent, useEffect } from "react";
import toast from "react-hot-toast";

const ManageBlogs = () => {
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const [approvePendingBlogs, { isSuccess, isError }] =
    useApprovePendingBlogsMutation();
  const { data: pendingBlogs, isLoading } = useGetPendingBlogsQuery({
    limit: 2,
    page,
    sortBy: "createdAt",
    sortOrder,
  });

  const handlePrevClick = () => {
    setPage((prevPage: number) => prevPage - 1);
  };
  const handleNextClick = () => {
    setPage((prevPage: number) => prevPage + 1);
  };
  const handleSortOrderChange = (e: FormEvent<HTMLSelectElement>) => {
    const selectedSortOrder = e.currentTarget.value;
    setSortOrder(selectedSortOrder);
  };
  const handleBlogApproval = async (blogId: string) => {
    const query = {
      limit: 2,
      page,
      sortBy: "createdAt",
      sortOrder,
    };
    await approvePendingBlogs({ blogId, query });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Blog Approved");
    } else if (isError) {
      toast.error("Failed to approve");
    }
  }, [isError, isSuccess]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div>
        <select
          className="select"
          onChange={handleSortOrderChange}
          value={sortOrder}
        >
          <option disabled selected>
            SortOrder
          </option>
          <option value={"asc"}>Added First</option>
          <option value={"desc"}>Added Last</option>
        </select>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Author</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* rows  */}
              {pendingBlogs?.data?.data?.map((blog: any, index: number) => (
                <tr key={blog?.id}>
                  <th>{index + 1}</th>
                  <td>{blog.author.email}</td>
                  <th>
                    <Link to={`/blog/${blog.id}`}>
                      {truncateText(blog?.title, 40)}
                    </Link>
                  </th>

                  <td>
                    <button
                      className="btn btn-xs bg-primary text-gray-700 px-2 rounded-full"
                      onClick={() => handleBlogApproval(blog?.id)}
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-6 bottom-0">
            <div className="join">
              <button
                className="join-item btn"
                onClick={handlePrevClick}
                disabled={page === 1}
              >
                «
              </button>
              <button className="join-item btn">Page {page}</button>
              <button
                className="join-item btn"
                onClick={handleNextClick}
                disabled={pendingBlogs?.data?.meta?.pageCount === page}
              >
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogs;
