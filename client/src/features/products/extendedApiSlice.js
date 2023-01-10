import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (productType) => ({
        url: `/products/${productType}`,
        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products/add-product",
        method: "POST",
        body: newProduct,
      }),
    }),
  }),
});

export const { useAddProductMutation, useGetProductsQuery } = extendedApiSlice;
