import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const apiKey = process.env.MOVIE_API_KEY;
// const apiKeys = "ad69cc09d1d84b6ec03caf77f0b9ad54";
const accessToken = process.env.ACCESS_TOKEN;

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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDY5Y2MwOWQxZDg0YjZlYzAzY2FmNzdmMGI5YWQ1NCIsInN1YiI6IjY0YzY3NDBkNjNlNmZiMDExYjNhOWJiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUZCSHFTAqO2aeperTU3kM0MD1Qz3DXmyXqQssY7wZ4`,
        },
      }),
      providesTags: ["Movies"],
    }),
    movie: builder.query({
      query: (id) => `/movies/${id}`,
    }),
    genre: builder.query({
      query: () => ({
        url: "genre/movie/list?language=en",
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDY5Y2MwOWQxZDg0YjZlYzAzY2FmNzdmMGI5YWQ1NCIsInN1YiI6IjY0YzY3NDBkNjNlNmZiMDExYjNhOWJiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUZCSHFTAqO2aeperTU3kM0MD1Qz3DXmyXqQssY7wZ4",
        },
      }),
      providesTags: ["Movies"],
    }),
  }),
});

export const { usePopularMoviesQuery, useGenreQuery, useMovieQuery } =
  moviesApi;
