/* eslint-disable no-undefined */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../../api/apiSlice";

export const commentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: (data) => ({
        url: "/comment/add-comment",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            commentApi.util.updateQueryData(
              "getAllComment",
              arg?.blogId,
              (draft) => {
                draft?.data?.unshift(res?.data?.data);
                return draft;
              }
            )
          );
        } catch (error) {
          //nothing to do here at this moment
        }
      },
    }),
    getAllComment: builder.query({
      query: (blogId) => ({
        url: `/comment/get-all-comment/${blogId}`,
        method: "GET",
      }),
    }),
    addReply: builder.mutation({
      query: (data) => ({
        url: "/comment/add-reply",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            commentApi.util.updateQueryData(
              "getAllReply",
              arg?.commentId,
              (draft) => {
                draft?.data?.push(res?.data?.data);
                return draft;
              }
            )
          );
        } catch (error) {
          //nothing to do here at this moment
        }
      },
    }),
    getAllReply: builder.query({
      query: (commentId) => ({
        url: `/comment/get-all-reply/${commentId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddCommentMutation,
  useGetAllCommentQuery,
  useAddReplyMutation,
  useGetAllReplyQuery,
} = commentApi;
