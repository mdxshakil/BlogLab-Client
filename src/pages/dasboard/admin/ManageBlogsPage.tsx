/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import {
  useApprovePendingBlogsMutation,
  useDeleteBlogMutation,
  useGetBlogsForAdminDashboardQuery,
  useMakeFeaturedBlogMutation,
} from "../../../redux/features/blog/blogApi";
import { truncateText } from "../../../utils/textTruncate";
import { useState, useEffect, FormEvent } from "react";
import toast from "react-hot-toast";
import PaginationButton from "../../../components/pagination/PaginationButton";
import AdminActionButton from "../../../components/dashboard/AdminActionButton";
import Swal from "sweetalert2";

const ManageBlogsPage = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState("all");

  const [
    approvePendingBlogs,
    { isSuccess, isError, isLoading: approveLoading },
  ] = useApprovePendingBlogsMutation();
  const [makeFeaturedBlogs, featuredStatus] = useMakeFeaturedBlogMutation();
  const [deleteBlogByAdmin, deleteStatus] = useDeleteBlogMutation();

  const { data: blogs, isLoading } = useGetBlogsForAdminDashboardQuery({
    limit: 10,
    page,
    sortBy,
    sortOrder,
    filter,
  });

  //approve or unapprove blogs
  const handleBlogApproval = async (blogId: string, action: string) => {
    const query = {
      limit: 10,
      page,
      sortBy,
      sortOrder,
      filter,
    };
    await approvePendingBlogs({ blogId, query, action });
  };

  //handle making or removing a blog from featured
  const handleBlogFeatured = async (blogId: string, action: string) => {
    await makeFeaturedBlogs({ blogId, action });
  };

  //handle blog deletion by admin
  const handleBlogDeletion = async (blogId: string) => {
    await deleteBlogByAdmin(blogId);
  };

  //handle blogs sorting
  const handleSortByAndSortOrder = (e: FormEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value === "asc" || e.currentTarget.value === "desc") {
      setSortBy("createdAt");
      setSortOrder(e.currentTarget.value);
    } else if (e.currentTarget.value === "likeCount") {
      setSortOrder("desc");
      setSortBy(e.currentTarget.value);
    }
  };

  // show Blog details
  const showBlogDetails = (blog: any) => {
    Swal.fire({
      imageUrl: blog.banner,
      title: blog.title,
      html: blog.content,
      showCloseButton: true,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: blog.title,
    });
  };

  const isPreviousButtonDisabled = page === 1;

  //blog approval status toast notification
  useEffect(() => {
    if (isSuccess) {
      toast.success("Blog status updated");
    } else if (isError) {
      toast.error("Failed to update blog status");
    }
    if (deleteStatus.isSuccess) {
      toast.success("Blog deleted");
    } else if (deleteStatus.isError) {
      toast.error("Failed to delete blog");
    }
    if (featuredStatus.isSuccess) {
      toast.success("Feaured list updated");
    } else if (featuredStatus.isError) {
      toast.error(
        (featuredStatus?.error as { data: { message: string } } | undefined)
          ?.data?.message || "An error occurred"
      );
    }
  }, [isError, isSuccess, deleteStatus, featuredStatus]);

  // decide what to render
  let tableContent;
  if (isLoading) {
    tableContent = <LoadingSpinner />;
  } else if (!isLoading && isError) {
    tableContent = <p className="text-error text-center">There was an error</p>;
  } else if (!isLoading && !isError && blogs?.data?.data.length === 0) {
    tableContent = (
      <p className="text-secondary text-center">No content available</p>
    );
  } else if (!isLoading && !isError && blogs?.data?.data.length > 0) {
    tableContent = (
      <tbody>
        {/* rows  */}
        {blogs?.data?.data?.map((blog: any, index: number) => (
          <tr key={blog?.id}>
            <th>{index + 1}</th>
            {/* author details */}
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
            <td>
              <p
                className="text-primary hover:text-secondary cursor-pointer"
                onClick={() => showBlogDetails(blog)}
              >
                {truncateText(blog?.title, 40)}
              </p>
            </td>

            <td>{blog.likeCount}</td>

            <td className="flex gap-1">
              {!blog?.isApproved ? (
                <AdminActionButton
                  title="Approve"
                  classNames="btn-primary"
                  onClick={() => handleBlogApproval(blog?.id, "approve")}
                  isLoading={approveLoading}
                />
              ) : (
                <AdminActionButton
                  title="UnApprove"
                  classNames="btn-secondary"
                  onClick={() => handleBlogApproval(blog?.id, "un approve")}
                  isLoading={approveLoading}
                />
              )}
              {!blog?.isFeatured ? (
                <AdminActionButton
                  title="Make Featured"
                  classNames="btn-info"
                  onClick={() => handleBlogFeatured(blog?.id, "make featured")}
                  isLoading={featuredStatus.isLoading}
                />
              ) : (
                <AdminActionButton
                  title="Remove from featured"
                  classNames="btn-warning"
                  onClick={() =>
                    handleBlogFeatured(blog?.id, "remove featured")
                  }
                  isLoading={featuredStatus.isLoading}
                />
              )}
              <AdminActionButton
                title="Delete"
                classNames="btn-error"
                onClick={() => handleBlogDeletion(blog?.id)}
                isLoading={deleteStatus.isLoading}
              />
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <div>
      <h1 className="text-center font-semibold text-3xl my-3">Manage Blogs</h1>
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
          <p className="my-3 text-secondary">
            Total blogs: {blogs?.data?.meta?.total}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* header of table */}
            <thead>
              <tr>
                <th></th>
                <th>Author</th>
                <th>Title</th>
                <th>Likes</th>
                <th>Action</th>
              </tr>
            </thead>
            {tableContent}
          </table>
          <div className="flex justify-center mt-6 bottom-0">
            <PaginationButton
              setPage={setPage}
              isPreviousButtonDisabled={isPreviousButtonDisabled}
              currentPage={page}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogsPage;
