import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProducts} from "../interfaces/products.interface";

export const fakeStoreApi = createApi({
    reducerPath: "fakeStore",
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_URL}),
    endpoints: (builder) => ({
        getProducts: builder.query<IProducts[], void>({
            query: () => `products?limit=5`,
        }),
    }),
});

export const {useGetProductsQuery} = fakeStoreApi;