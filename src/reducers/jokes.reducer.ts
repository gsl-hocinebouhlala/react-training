import { createSlice } from "@reduxjs/toolkit";

import { getJokes } from "../services/jokesApi";

import { sortJokes } from "../utils/utils";
import { Joke, StateStore } from "../types/types";
import { initialState } from "../constants/constants";

const jokesSlice = createSlice({
  name: "jokesList",
  initialState,
  reducers: {
    setJokes: (state, action) => {
      state.jokes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJokes.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getJokes.fulfilled, (state, action) => {
        // Sort jokes by setup and in ascending order.
        const sortedJokes: Joke[] = sortJokes(action.payload, "setup", "asc");
        state.jokes = sortedJokes;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getJokes.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

// Selectors
export const selectJokes = (state: StateStore) => state.jokes;
export const selectLoadingState = (state: StateStore) => state.isLoading;
export const selectErrorState = (state: StateStore) => state.hasError;

// Actions
export const { setJokes } = jokesSlice.actions;

export default jokesSlice.reducer;
