import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rankingApiHeaders = {
  'X-RapidAPI-Key': '7f4a47cd41msh94196ed5b449e80p161bf6jsnc0b28eef2ddd',
  'X-RapidAPI-Host': 'local-rank-tracker.p.rapidapi.com',
};

const makeApiCall = (url) => ({
  url,
  headers: rankingApiHeaders,
});

const baseUrl = 'https://local-rank-tracker.p.rapidapi.com';

export const rankingApi = createApi({
  reducerPath: 'rankingApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getLocalRanking: builder.query({
      query: (placeId, query) =>
        makeApiCall(`/grid?place_id=${placeId}&query=${query}`),
    }),
  }),
});

export const { useGetLocalRankingQuery } = rankingApi;

// RAPID API CODE SNIPPET FOR LOCAL RANK TRACKER

// const options = {
//   method: 'GET',
//   url: 'https://local-rank-tracker.p.rapidapi.com/grid',
//   params: {
//     place_id: 'ChIJoejvAr3Mj4ARtHrbKxtAHXI',
//     query: 'web design',
//     lat: '37.341759',
//     lng: '-121.938314',
//     grid_size: '3',
//     radius: '1',
//     zoom: '13',
//   },
//   headers: {
//     'X-RapidAPI-Key': '7f4a47cd41msh94196ed5b449e80p161bf6jsnc0b28eef2ddd',
//     'X-RapidAPI-Host': 'local-rank-tracker.p.rapidapi.com',
//   },
// };
