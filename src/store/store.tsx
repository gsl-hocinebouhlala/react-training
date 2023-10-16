import { configureStore } from "@reduxjs/toolkit";

import reducer from "../reducers/jokes.reducer.ts";

export const store = configureStore({ reducer: reducer });
