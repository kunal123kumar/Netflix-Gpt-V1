import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      if (state.nowPlayingMovies) {
        state.nowPlayingMovies = [...state.nowPlayingMovies, ...action.payload];
      } else {
        state.nowPlayingMovies = action.payload;
      }
    },
    addTrailerVideo(state, action) {
      state.trailerVideo = action.payload;
    },
    addPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies(state, action) {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies(state, action) {
      state.upComingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
