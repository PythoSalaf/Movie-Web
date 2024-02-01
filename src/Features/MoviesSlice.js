import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    popularMovies: builder.query({
      query: (page = 1) => ({
        url: `movie/popular?language=en-US&page=${page}`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      providesTags: ["Movies"],
    }),
    movieDetail: builder.query({
      query: (id) => ({
        url: `movie/${id}?language=en-US`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      providesTags: ["Movies"],
    }),
    similarMovies: builder.query({
      query: (id) => ({
        url: `movie/${id}/similar?language=en-US&page=2`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      providesTags: ["Movies"],
    }),
    nowPlaying: builder.query({
      query: (page = 1) => ({
        url: `movie/now_playing?language=en-US&page=${page}`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      providesTags: ["Movies"],
    }),
    upcomingMovies: builder.query({
      query: (page = 1) => ({
        url: `movie/upcoming?language=en-US&page=${page}`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      providesTags: ["Movies"],
    }),
    topRated: builder.query({
      query: (page = 1) => ({
        url: `movie/top_rated?language=en-US&page=${page}`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      providesTags: ["Movies"],
    }),
    discoverMovies: builder.query({
      query: (page = 1) => ({
        url: `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      providesTags: ["Movies"],
    }),
    discoverTv: builder.query({
      query: (page = 1) => ({
        url: `discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      providesTags: ["Movies"],
    }),

    genre: builder.query({
      query: () => ({
        url: "genre/movie/list?language=en",
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      providesTags: ["Movies"],
    }),
    tvList: builder.query({
      query: () => ({
        url: "genre/tv/list?language=en",
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      providesTags: ["Movies"],
    }),
  }),
});

export const {
  usePopularMoviesQuery,
  useGenreQuery,
  useMovieDetailQuery,
  useTvListQuery,
  useSimilarMoviesQuery,
  useNowPlayingQuery,
  useUpcomingMoviesQuery,
  useTopRatedQuery,
  useDiscoverMoviesQuery,
  useDiscoverTvQuery,
} = moviesApi;
