import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (productType) => ({
        url: `/products/${productType}`,
        method: "GET",
      }),
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
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
    searchProducts: builder.query({
      query: (searchQuery) => ({
        url: `/products/search`,
        method: "GET",
        params: { searchQuery: searchQuery },
      }),
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductsQuery,
  useGetProductQuery,
  useGetStripeSecretMutation,
  useSearchProductsQuery,
} = extendedApiSlice;
