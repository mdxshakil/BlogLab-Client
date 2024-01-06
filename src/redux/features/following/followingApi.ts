/* eslint-disable no-undefined */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../../api/apiSlice";

export const commentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    followBlogger: builder.mutation({
      query: (data) => ({
        url: "/following/follow-blogger",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["is_following"],
    }),
    isFollowing: builder.query({
      query: (data) => ({
        url: `/following/check-follow-status?userId=${data.userId}&followingId=${data.followingId}`,
        method: "GET",
      }),
      providesTags: ["is_following"],
    }),
  }),
});

export const { useFollowBloggerMutation, useIsFollowingQuery } = commentApi;
