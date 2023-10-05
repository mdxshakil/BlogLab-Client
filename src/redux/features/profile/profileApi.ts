/* eslint-disable no-undefined */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../../api/apiSlice";

export const profileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateBlogReadCount: builder.mutation({
      query: (profileId) => ({
        url: `/profile/update-read-count/${profileId}`,
        method: "PATCH",
      }),
    }),
  }),
});

export const { useUpdateBlogReadCountMutation } = profileApi;
