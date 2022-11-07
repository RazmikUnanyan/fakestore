import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProducts } from '../interfaces/products.interface'

export const fakeStoreApi = createApi({
  reducerPath: 'fakeStore',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProducts[], void>({
      query: () => 'products'
    }),
    getProductsWithCategory: builder.query<IProducts[], { category?: string }>({
      query: ({ category = '' }) => `products/category/${category}`
    }),
    getProduct: builder.query<IProducts, { id?: string }>({
      query: ({ id }) => `products/${id}`
    }),
    getCategories: builder.query<string[], void>({
      query: () => 'products/categories'
    })
  })
})

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoriesQuery,
  useGetProductsWithCategoryQuery
} = fakeStoreApi
