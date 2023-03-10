import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getData = createApi({
  reducerPath: 'getData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => '/character',
    }),
    getCharacter: builder.query({
      query: (id) => `/character/${id}`,
    }),
  }),
})

export const { useGetCharacterQuery, useGetAllQuery } = getData
