import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "../Features/MoviesSlice";
import searchMovieReducer from "../Features/SearchMovieSlice";

export const store = configureStore({
  reducer: {
    search: searchMovieReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
