/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import {
  useAddOrRemoveAdminMutation,
  useApproveUnApproveUserMutation,
  useGetUsersQuery,
} from "../../../redux/features/statistics/statisticsApi";
import { useState, FormEvent, useEffect } from "react";
import { usersFilterOptions } from "../../../constants";
import PaginationButton from "../../../components/pagination/PaginationButton";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import AdminActionButton from "../../../components/dashboard/AdminActionButton";

const ManageUsers = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState("all");

  const [approveUnApproveUser, approveStatus] =
    useApproveUnApproveUserMutation();
  const [addOrRemoveAdmin, makeAdminStatus] = useAddOrRemoveAdminMutation();

  const {
    data: users,
    isLoading,
    isError,
  } = useGetUsersQuery({
    page,
    limit: 10,
    sortBy,
    sortOrder,
    filter,
  });

  const handleSortByAndSortOrder = (e: FormEvent<HTMLSelectElement>) => {
    setSortBy("createdAt");
    setSortOrder(e.currentTarget.value);
  };

  const handleApproveUnApproveUser = async (userId: string) => {
    await approveUnApproveUser(userId);
    toast.success("Account status updated");
  };

  const handleAddOrRemoveAdmin = async (userId: string, action: string) => {
    Swal.fire({
      title: "Secret code!",
      text: "Enter the secret code to continue",
      input: "password",
      showCancelButton: true,
      confirmButtonColor: "#22C55E",
      cancelButtonColor: "#EF4444",
    }).then(async (result) => {
      if (result.value) {
        await addOrRemoveAdmin({ secretKey: result.value, userId, action });
      }
    });
  };

  const isPreviousButtonDisabled = page === 1;

  useEffect(() => {
    if (makeAdminStatus.isSuccess) {
      toast.success(makeAdminStatus?.data?.data?.message);
    }
    if (makeAdminStatus.isError) {
      //@ts-ignore
      toast.error(makeAdminStatus?.error?.data?.message);
    }
    if (approveStatus.isSuccess) {
      toast.success(makeAdminStatus?.data?.data?.message);
    }
    if (approveStatus.isError) {
      //@ts-ignore
      toast.error(makeAdminStatus?.error?.data?.message);
    }
  }, [makeAdminStatus, approveStatus]);

  //decide what to render
  let tableContent;

  if (isLoading) {
    tableContent = <LoadingSpinner />;
  } else if (!isLoading && isError) {
    tableContent = <p className="text-error text-center">There was an error</p>;
  } else if (!isLoading && !isError && users?.data?.data.length === 0) {
    tableContent = (
      <p className="text-secondary text-center">No content available</p>
    );
  } else if (!isLoading && !isError && users?.data?.data.length > 0) {
    tableContent = (
      <tbody>
        {/* rows  */}
        {users?.data?.data?.map((user: any, index: number) => (
          <tr
            key={index}
            className={`${user?.user?.role === "admin" ? "bg-base-100" : ""}`}
          >
            <th>{index + 1}</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={user?.profilePicture}
                      alt={`${user?.firstName} ${user?.lastName} `}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{`${user?.firstName} ${user?.lastName} `}</div>
                  <div className="text-sm opacity-50">{user?.user?.email}</div>
                </div>
              </div>
            </td>
            <th
              className={`${
                user?.user?.role === "reader"
                  ? "text-primary"
                  : user?.user?.role === "admin"
                  ? "text-red-500"
                  : "text-secondary"
              }`}
            >
              <Link to={`/blog/${user?.id}`}>{user?.user?.role}</Link>
            </th>

            <td className="flex gap-2">
              {user?.user?.accountStatus === "active" ? (
                <AdminActionButton
                  title="UnApprove"
                  classNames="btn-secondary"
                  onClick={() => handleApproveUnApproveUser(user?.user?.id)}
                  isLoading={approveStatus.isLoading}
                />
              ) : (
                <AdminActionButton
                  title="Approve"
                  classNames="btn-primary"
                  onClick={() => handleApproveUnApproveUser(user?.user?.id)}
                  isLoading={approveStatus.isLoading}
                />
              )}
              {user?.user?.role === "admin" ? (
                <AdminActionButton
                  title="Remove Admin"
                  classNames="btn-error"
                  onClick={() =>
                    handleAddOrRemoveAdmin(user?.user?.id, "remove admin")
                  }
                  isLoading={makeAdminStatus.isLoading}
                />
              ) : (
                <AdminActionButton
                  title="Make Admin"
                  classNames="btn-warning"
                  onClick={() =>
                    handleAddOrRemoveAdmin(user?.user?.id, "make admin")
                  }
                  isLoading={makeAdminStatus.isLoading}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <div>
      <h1 className="text-center font-semibold text-3xl my-3">
        Manage users
      </h1>
      <div>
        <div className="flex items-center justify-start gap-6 mb-3">
          {/* filter users */}
          <select
            className="select"
            onChange={(e) => setFilter(e.currentTarget.value)}
            value={filter}
          >
            <option defaultValue={filter} value={"all"}>
              All Users
            </option>
            {usersFilterOptions.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {/* sort users - createdAt*/}
          <select
            className="select"
            onChange={(e) => handleSortByAndSortOrder(e)}
            value={sortOrder}
          >
            <option defaultValue={sortOrder} value={"asc"}>
              Registered First
            </option>
            <option value={"desc"}>Registered Last</option>
          </select>
        </div>
        <div>
          <p className="text-secondary text-sm text-center my-3 border-b py-3">
            Total {users?.data?.meta?.total || 0} users found
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* header of table */}
            <thead>
              <tr>
                <th></th>
                <th>User</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            {tableContent}
          </table>
        </div>
      </div>
      <PaginationButton
        setPage={setPage}
        isPreviousButtonDisabled={isPreviousButtonDisabled}
        currentPage={page}
      />
    </div>
  );
};

export default ManageUsers;
