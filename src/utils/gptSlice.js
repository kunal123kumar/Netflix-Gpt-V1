import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptSearchView: false,
    moviename: [],
    tmbdResults: [],
  },
    reducers: {
        toggleGptSearchview: (state) => {
            state.isGptSearchView = !state.isGptSearchView;
    }, 
    addGptSearchResults: (state, action) => {
      const { moviename , tmbdResults } = action.payload;
        state.moviename = moviename;
        state.tmbdResults = tmbdResults;
    } ,  
  },
});
export const { toggleGptSearchview , addGptSearchResults } = gptSlice.actions;
export default gptSlice.reducer;
