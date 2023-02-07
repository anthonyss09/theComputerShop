import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers, { getState }) => {
      const user = getState().auth.user;
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `bearer ${token}`);
      }
      const isAdmin = user ? user.admin : 0;
      headers.set("isAdmin", isAdmin);
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: ({ firstName, lastName, email, password }) => ({
        url: "/auth/register",
        method: "POST",
        body: { firstName, lastName, email, password },
      }),
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    // fetchUserData: builder.query({
    //   query: () => ({
    //     url: "/auth/fetch-user-data",
    //     method: "GET",
    //   }),
    //   providesTags: ["User"],
    // }),
    updateUserCart: builder.mutation({
      query: ({ userId, update }) => ({
        url: "/auth/update-user",
        method: "POST",
        body: { userId, update },
      }),
      invalidatesTags: ["User"],
    }),
    getStripeSecret: builder.mutation({
      query: (total) => ({
        url: "/auth/v1/stripe-secret",
        method: "POST",
        body: total,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useUpdateUserCartMutation,
} = apiSlice;
