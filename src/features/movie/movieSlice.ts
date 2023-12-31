import { MovieLoadingTypes, fetchMovies, fetchTVShows } from "./movieAPI";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState: MoviesState = {
  loading: false,
  movies_trending: [],
  movies_popular: [],
  movies_toprated: [],
  tvshows_popular: [],
  tvshows_toprated: [],
  error: undefined,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(loadingAsync())`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchTrendingMoviesAsync = createAsyncThunk(
  "movie/fetchTrendMovies",
  async () => {
    const res = await fetchMovies(MovieLoadingTypes.Trend);
    console.log("🚀 ~ file: movieSlice.ts:21 ~ res:", res);
    // The value we return becomes the `fulfilled` action payload
    return res;
  }
);

export const fetchPopularMoviesAsync = createAsyncThunk(
  "movie/fetchPopularMovies",
  async () => {
    const res = await fetchMovies(MovieLoadingTypes.Popular);
    console.log("🚀 ~ file: movieSlice.ts:21 ~ res:", res);
    // The value we return becomes the `fulfilled` action payload
    return res;
  }
);

export const fetchTopRatedMoviesAsync = createAsyncThunk(
  "movie/fetchTopRatedMovies",
  async () => {
    const res = await fetchMovies(MovieLoadingTypes.TopRated);
    console.log("🚀 ~ file: movieSlice.ts:21 ~ res:", res);
    // The value we return becomes the `fulfilled` action payload
    return res;
  }
);

export const fetchPopularTVShowsAsync = createAsyncThunk(
  "movie/fetchPopularTVShows",
  async () => {
    const res = await fetchTVShows(MovieLoadingTypes.Popular);
    console.log("🚀 ~ file: movieSlice.ts:21 ~ res:", res);
    // The value we return becomes the `fulfilled` action payload
    return res;
  }
);

export const fetchTopRatedTVShowsAsync = createAsyncThunk(
  "movie/fetchTopRatedTVShows",
  async () => {
    const res = await fetchTVShows(MovieLoadingTypes.TopRated);
    console.log("🚀 ~ file: movieSlice.ts:21 ~ res:", res);
    // The value we return becomes the `fulfilled` action payload
    return res;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMoviesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchTrendingMoviesAsync.fulfilled,
        (state, action: PayloadAction<Array<MovieItem>>) => {
          state.loading = false;
          state.movies_trending = action.payload;
        }
      )
      .addCase(fetchTrendingMoviesAsync.rejected, (state, action) => {
        state.loading = false;
        state.movies_trending = [];
        state.error = action.error.message;
      })
      .addCase(fetchPopularMoviesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchPopularMoviesAsync.fulfilled,
        (state, action: PayloadAction<Array<MovieItem>>) => {
          state.loading = false;
          state.movies_popular = action.payload;
        }
      )
      .addCase(fetchPopularMoviesAsync.rejected, (state, action) => {
        state.loading = false;
        state.movies_popular = [];
        state.error = action.error.message;
      })
      .addCase(fetchTopRatedMoviesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchTopRatedMoviesAsync.fulfilled,
        (state, action: PayloadAction<Array<MovieItem>>) => {
          state.loading = false;
          state.movies_toprated = action.payload;
        }
      )
      .addCase(fetchTopRatedMoviesAsync.rejected, (state, action) => {
        state.loading = false;
        state.movies_toprated = [];
        state.error = action.error.message;
      })
      .addCase(fetchPopularTVShowsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchPopularTVShowsAsync.fulfilled,
        (state, action: PayloadAction<Array<TVShowItem>>) => {
          state.loading = false;
          state.tvshows_popular = action.payload;
        }
      )
      .addCase(fetchPopularTVShowsAsync.rejected, (state, action) => {
        state.loading = false;
        state.tvshows_popular = [];
        state.error = action.error.message;
      })
      .addCase(fetchTopRatedTVShowsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchTopRatedTVShowsAsync.fulfilled,
        (state, action: PayloadAction<Array<TVShowItem>>) => {
          state.loading = false;
          state.tvshows_toprated = action.payload;
        }
      )
      .addCase(fetchTopRatedTVShowsAsync.rejected, (state, action) => {
        state.loading = false;
        state.tvshows_toprated = [];
        state.error = action.error.message;
      });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const movieSelector = (state: RootState) => state.movieReducer;

export default movieSlice.reducer;
