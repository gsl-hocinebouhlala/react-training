import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Get jokes.
export const getJokes = createAsyncThunk("jokesList/GetJokes", async () => {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/jokes/ten"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
