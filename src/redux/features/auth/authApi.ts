import { api } from "../../api/apiSlice";
import { userLoggedIn } from "./authSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (payload) => ({
        url: "/auth/signup",
        method: "POST",
        body: payload,
      }),
    }),
    login: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(_data, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          const { accessToken, ...userInfo } = result.data.data;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: accessToken,
              user: userInfo,
            })
          );
          dispatch(userLoggedIn(result.data.data));
        } catch (error) {
          // nothing to do here
        }
      },
    }),
    persistLogin: builder.query({
      query: (payload) => ({
        url: "/auth/persist-login",
        method: "GET",
        body: payload,
      }),
      async onQueryStarted(_data, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn(result.data.data));
        } catch (error) {
          // nothing to do here
        }
      },
    }),
    getSingleBook: builder.query({
      query: (id) => ({
        url: `/book/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  usePersistLoginQuery,
  useGetSingleBookQuery,
} = authApi;
