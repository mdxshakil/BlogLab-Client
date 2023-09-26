/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../../api/apiSlice";

export const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createNewBlog: builder.mutation({
      query: (data) => ({
        url: "/blog/create-new-blog",
        method: "POST",
        body: data,
      }),
    }),
    getPendingBlogs: builder.query({
      query: (query) => ({
        url: `/blog/get-pending-blogs?limit=${query?.limit}&page=${query?.page}&sortBy=${query?.sortBy}&sortOrder=${query?.sortOrder}`,
        method: "GET",
      }),
    }),
    approvePendingBlogs: builder.mutation({
      query: (payload) => ({
        url: "/blog/approve-pending-blogs",
        method: "PATCH",
        body: { blogId: payload.blogId },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        //optimistically update  cache
        const patchResult = dispatch(
          blogApi.util.updateQueryData(
            "getPendingBlogs",
            arg.query,
            (draft) => {
              const unApprovedBlogs = draft.data.data.filter(
                (blog: any) => blog.id !== arg.blogId
              );
              draft.data.data = unApprovedBlogs;
            }
          )
        );
        //optimistically update  cache
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
    getPreferredBlogs: builder.query({
      query: (profileId) => ({
        url: `/blog/get-preferred-blogs?userId=${profileId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateNewBlogMutation,
  useGetPendingBlogsQuery,
  useApprovePendingBlogsMutation,
  useGetPreferredBlogsQuery,
} = blogApi;
