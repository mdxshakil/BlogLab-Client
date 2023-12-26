/* eslint-disable no-undefined */
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
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const newBlog = await queryFulfilled;
          dispatch(
            blogApi.util.updateQueryData("getLatestBlogs", "", (draft) => {
              draft?.data?.unshift(newBlog?.data?.data);
              return draft;
            })
          );
        } catch (error) {
          //nothing to do here at this moment
        }
      },
    }),
    getBlogsForAdminDashboard: builder.query({
      query: (query) => ({
        url: `/blog/get-pending-blogs?limit=${query?.limit}&page=${query?.page}&sortBy=${query?.sortBy}&sortOrder=${query?.sortOrder}&isApproved=${query.filter}&isFeatured=${query.filter}`,
        method: "GET",
      }),
      providesTags: ["blogs_for_dashboard"],
    }),
    approvePendingBlogs: builder.mutation({
      query: (payload) => ({
        url: "/blog/approve-pending-blogs",
        method: "PATCH",
        body: { blogId: payload.blogId, action: payload.action },
      }),
      invalidatesTags: ["blogs_for_dashboard"],
    }),
    getPreferredBlogs: builder.query({
      query: ({ profileId, page }) => ({
        url: `/blog/get-preferred-blogs?userId=${profileId}&page=${page}`,
        method: "GET",
      }),
    }),
    getBlogById: builder.query({
      query: (blogId) => ({
        url: `/blog/${blogId}`,
        method: "GET",
      }),
    }),
    getBlogByAuthorId: builder.query({
      query: (authorId) => ({
        url: `/blog/author/${authorId}`,
        method: "GET",
      }),
    }),
    getLatestBlogs: builder.query({
      query: () => ({
        url: "/blog/latest-blogs",
        method: "GET",
      }),
    }),
    likeABlog: builder.mutation({
      query: (payload) => ({
        url: "/blog/like-blog",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // Optimistically update the likes cache of the blog
        const patchResult = dispatch(
          blogApi.util.updateQueryData(
            "getPreferredBlogs",
            arg.likerId,
            (draft) => {
              const currentBlog = draft?.data?.find(
                (blog: any) => blog.id === arg.blogId
              );

              if (currentBlog) {
                const isLiked = currentBlog.likes?.find(
                  (like: any) =>
                    like.likerId === arg.likerId && like.blogId === arg.blogId
                );

                if (!isLiked) {
                  // Create a copy of currentBlog and add the new like to its likes array
                  const updatedBlog = { ...currentBlog };
                  updatedBlog.likes.push({
                    blogId: arg.blogId,
                    likerId: arg.likerId,
                  });
                  // Update the like count by incrementing it
                  updatedBlog.likeCount = (updatedBlog.likeCount || 0) + 1;

                  // Replace the old blog in the data array with the updated one
                  const blogIndex = draft.data.findIndex(
                    (blog: any) => blog.id === arg.blogId
                  );
                  if (blogIndex !== -1) {
                    draft.data[blogIndex] = updatedBlog;
                  }
                } else {
                  // Create a copy of currentBlog and remove the like from its likes array
                  const updatedBlog = { ...currentBlog };
                  updatedBlog.likes = updatedBlog.likes?.filter(
                    (like: any) =>
                      like.likerId !== arg.likerId && like.blogId !== arg.blogId
                  );
                  // Update the like count by decrementing it
                  updatedBlog.likeCount = (updatedBlog.likeCount || 0) - 1;
                  // Replace the old blog in the data array with the updated one
                  const blogIndex = draft.data.findIndex(
                    (blog: any) => blog.id === arg.blogId
                  );
                  if (blogIndex !== -1) {
                    draft.data[blogIndex] = updatedBlog;
                  }
                }
              }
            }
          )
        );
        // Optimistically update the cache end
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
    getFeaturedBlogs: builder.query({
      query: () => ({
        url: "/blog/featured-blogs",
        method: "GET",
      }),
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `/blog/${blogId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs_for_dashboard"],
    }),
    makeFeaturedBlog: builder.mutation({
      query: (payload) => ({
        url: `/blog/featured-list/${payload.blogId}`,
        method: "PATCH",
        body: { action: payload.action },
      }),
      invalidatesTags: ["blogs_for_dashboard"],
    }),
    getBlogsBySearchTerm: builder.query({
      query: ({ searchTerm, page, limit, sortBy, sortOrder }) => ({
        url: `/blog/search-result?searchTerm=${searchTerm}&page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateNewBlogMutation,
  useGetBlogsForAdminDashboardQuery,
  useApprovePendingBlogsMutation,
  useGetPreferredBlogsQuery,
  useGetBlogByIdQuery,
  useGetBlogByAuthorIdQuery,
  useGetLatestBlogsQuery,
  useLikeABlogMutation,
  useGetFeaturedBlogsQuery,
  useDeleteBlogMutation,
  useMakeFeaturedBlogMutation,
  useGetBlogsBySearchTermQuery,
} = blogApi;
