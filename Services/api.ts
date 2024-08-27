import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {BlogResponseType} from "../type/type";
export const blogsApi = createApi({
  reducerPath: 'blogsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://a2sv-backend.onrender.com/api/' }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query<BlogResponseType[], void>({
      query: () => 'blogs',
    }),
    getBlogById: builder.query<BlogResponseType, void>({
      query: (id) => `blogs/${id}`,
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetBlogByIdQuery } = blogsApi;
