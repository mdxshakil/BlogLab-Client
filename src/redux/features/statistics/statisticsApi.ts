import { api } from "../../api/apiSlice";

const statisticsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStatistics: builder.query({
      query: () => ({
        url: `/statistics`,
        method: "GET",
      }),
    }),
    getUsers: builder.query({
      query: (query) => ({
        url: `/statistics/users?page=${query.page}&limit=${query.limit}&sortBy=${query.sortBy}&sortOrder=${query.sortOrder}&filter=${query.filter}`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    approveUnApproveUser: builder.mutation({
      query: (userId) => ({
        url: `/auth/approve-unapprove-user/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
    addOrRemoveAdmin: builder.mutation({
      query: ({ secretKey, userId, action }) => ({
        url: "/statistics/add-or-remove-admin",
        method: "PATCH",
        body: { secretKey, userId, action },
      }),
      invalidatesTags: ["users"],
    }),
    blogsPerCategory: builder.query({
      query: () => ({
        url: "/statistics/blogs-per-category",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetStatisticsQuery,
  useGetUsersQuery,
  useApproveUnApproveUserMutation,
  useAddOrRemoveAdminMutation,
  useBlogsPerCategoryQuery,
} = statisticsApi;
