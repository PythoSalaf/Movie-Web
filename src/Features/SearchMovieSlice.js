import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
const baseUrl = "https://api.themoviedb.org/3/";

export const fetchSearchMovies = createAsyncThunk(
  "movies/fetchSearchMovies",
  async (query) => {
    try {
      const config = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await fetch(
        `${baseUrl}search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        config
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  data: [],
  error: null,
  loading: "idle",
};

const searchMovieSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload.results;
      })
      .addCase(fetchSearchMovies.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default searchMovieSlice.reducer;
