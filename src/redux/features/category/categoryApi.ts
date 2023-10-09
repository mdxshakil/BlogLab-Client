/* eslint-disable no-undefined */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../../api/apiSlice";
import { blogApi } from "../blog/blogApi";

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
    editCategory: builder.mutation({
      query: (payload) => ({
        url: `/category/edit-category/${payload.categoryId}`,
        method: "PATCH",
        body: payload.data,
      }),
      invalidatesTags: ["categories"],
    }),
    getUsersSelectedCategory: builder.query({
      query: (profileId) => ({
        url: `/category/get-user-selected-category?profileId=${profileId}`,
        method: "GET",
      }),
    }),
    followUnfollowCategory: builder.mutation({
      query: (payload) => ({
        url: "/category/follow-unfollow-category",
        method: "PATCH",
        body: payload,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        //optimistically update the selected categories cache
        const patchResult = dispatch(
          categoryApi.util.updateQueryData(
            "getUsersSelectedCategory",
            arg.profileId,
            (draft) => {
              //check if the category is already selected or not
              const isExists = draft?.data?.find(
                (category: any) => category.categoryId === arg.categoryId
              );
              //if selected then remove it, otherwise add it
              if (isExists) {
                draft.data = draft.data.filter(
                  (category: any) => category.categoryId !== arg.categoryId
                );
              } else {
                draft.data.push({
                  categoryId: arg.categoryId,
                  profileId: arg.profileId,
                });
              }
            }
          )
        );
        try {
          await queryFulfilled;
          // Refetch the getPreferredBlogs endpoint of blogApi for homepage
          dispatch(
            blogApi.endpoints.getPreferredBlogs.initiate(arg.profileId, {
              forceRefetch: true,
            })
          );
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
    createNewCategory: builder.mutation({
      query: (payload) => ({
        url: "/category/create-category",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        //optimistically update the categories cache
        const patchResult = dispatch(
          categoryApi.util.updateQueryData(
            "getAllCategory",
            undefined,
            (draft) => {
              draft.data.push(arg);
              return draft;
            }
          )
        );
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useEditCategoryMutation,
  useGetUsersSelectedCategoryQuery,
  useFollowUnfollowCategoryMutation,
  useCreateNewCategoryMutation,
} = categoryApi;
