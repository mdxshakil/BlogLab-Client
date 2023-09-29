/* eslint-disable no-undefined */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../../api/apiSlice";

export const bookMarkApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToBookMark: builder.mutation({
      query: (data) => ({
        url: "/bookMark/add-to-bookMark",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          dispatch(
            bookMarkApi.util.updateQueryData(
              "getUserBookMarkList",
              arg?.profileId,
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
    removeFromBookMark: builder.mutation({
      query: (payload) => ({
        url: `/bookMark/remove-from-bookMark?blogId=${payload?.blogId}&pforileId=${payload?.profileId}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(
            bookMarkApi.util.updateQueryData(
              "getUserBookMarkList",
              arg?.profileId,
              (draft) => {
                draft.data = draft?.data?.filter(
                  (item: any) => item.blogId !== arg.blogId
                );
                return draft;
              }
            )
          );
        } catch (error) {
          //nothing to do here at this moment
        }
      },
    }),
    getUserBookMarkList: builder.query({
      query: (profileId) => ({
        url: `/bookMark?profileId=${profileId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddToBookMarkMutation,
  useRemoveFromBookMarkMutation,
  useGetUserBookMarkListQuery,
} = bookMarkApi;
