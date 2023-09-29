/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import {
  useApprovePendingBlogsMutation,
  useGetBlogsForAdminDashboardQuery,
} from "../../../redux/features/blog/blogApi";
import { truncateText } from "../../../utils/textTruncate";
import { useState, useEffect, FormEvent } from "react";
import toast from "react-hot-toast";

const ManageBlogs = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState("all");

  const [approvePendingBlogs, { isSuccess, isError }] =
    useApprovePendingBlogsMutation();

  const { data: pendingBlogs, isLoading } = useGetBlogsForAdminDashboardQuery({
    limit: 10,
    page,
    sortBy,
    sortOrder,
    filter,
  });

  const handleBlogApproval = async (blogId: string) => {
    const query = {
      limit: 10,
      page,
      sortBy,
      sortOrder,
      filter,
    };
    await approvePendingBlogs({ blogId, query });
  };

  const handleSortByAndSortOrder = (e: FormEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value === "asc" || e.currentTarget.value === "desc") {
      setSortBy("createdAt");
      setSortOrder(e.currentTarget.value);
    } else if (e.currentTarget.value === "likeCount") {
      setSortOrder("desc");
      setSortBy(e.currentTarget.value);
    }
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
        <div className="flex items-center justify-start gap-6">
          {/* filter - pending, approved */}
          <select
            className="select"
            onChange={(e) => setFilter(e.currentTarget.value)}
            value={filter}
          >
            <option defaultValue={filter} value={"all"}>
              All Blogs
            </option>
            <option value={"pending"}>Pending Blogs</option>
            <option value={"approved"}>Approved Blogs</option>
            <option value={"featured"}>Featured Blogs</option>
          </select>
          {/* sort - createdAt,likeCount */}
          <select
            className="select"
            onChange={(e) => handleSortByAndSortOrder(e)}
            value={sortOrder}
          >
            <option defaultValue={sortOrder} value={"asc"}>
              Added First
            </option>
            <option value={"desc"}>Added Last</option>
            <option value={"likeCount"}>Most Liked</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* header of table */}
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
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={blog?.author?.profilePicture}
                            alt={`${blog?.author?.firstName} ${blog?.author.lastName} `}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{`${blog?.author?.firstName} ${blog?.author?.lastName} `}</div>
                        <div className="text-sm opacity-50">
                          {blog?.author?.bloggerLevel}
                        </div>
                      </div>
                    </div>
                  </td>
                  <th>
                    <Link to={`/blog/${blog.id}`}>
                      {truncateText(blog?.title, 40)}
                    </Link>
                  </th>

                  <td>
                    {!blog?.isApproved ? (
                      <button
                        className="btn btn-xs bg-primary text-gray-700 px-2 rounded-full"
                        onClick={() => handleBlogApproval(blog?.id)}
                      >
                        Approve
                      </button>
                    ) : (
                      <button className="btn btn-xs bg-danger text-gray-700 px-2 rounded-full">
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-6 bottom-0">
            <div className="join">
              <button
                className="join-item btn"
                onClick={() => setPage((prevPage: number) => prevPage - 1)}
                disabled={page === 1}
              >
                «
              </button>
              <button className="join-item btn">Page {page}</button>
              <button
                className="join-item btn"
                onClick={() => setPage((prevPage: number) => prevPage + 1)}
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
