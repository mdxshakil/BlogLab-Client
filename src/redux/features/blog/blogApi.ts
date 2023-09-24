import { api } from "../../api/apiSlice";

const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createNewBlog: builder.mutation({
      query: (data) => ({
        url: "/blog/create-new-blog",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateNewBlogMutation } = blogApi;
