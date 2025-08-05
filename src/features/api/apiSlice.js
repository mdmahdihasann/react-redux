import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    tagTypes: ['post'],
    endpoints: (builder) =>({
        getPosts: builder.query({
           query: (limit = 10 ) => `/posts?_limit=${limit}`,
           providesTags: ['post']
        }),
        getPost: builder.query({
           query: (id) => `/posts/${id}`,
        }),
        AddPost: builder.mutation({
            query: (data) => ({
                url: `/posts`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['post']
        }),
        EditPost: builder.mutation({
            query: ({data, id}) => ({
                url: `/posts/${id}`,
                method: 'PATCH',
                body: data,
            }),
        }),
        
    }),
});

export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation, useEditPostMutation } = apiSlice;
