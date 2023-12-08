import { apiSlice } from '../slices/apiSlice';

export const chatManagementApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (data) => ({
        url: '/chat',
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    getMessages: builder.query({
      query: () => ({
        url: '/',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useSendMessageMutation, useGetMessagesQuery } = chatManagementApi;
