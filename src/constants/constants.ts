import { Column, StateStore } from "../types/types";

export const initColumns: Column[] = [
  {
    id: 0,
    name: "type",
    label: "column-type",
    sortBy: "asc",
  },
  {
    id: 1,
    name: "setup",
    label: "column-setup",
    sortBy: "asc",
  },
  {
    id: 3,
    name: "punchline",
    label: "column-punchline",
    sortBy: "asc",
  },
];

export const initialState: StateStore = {
  jokes: [],
  isLoading: false,
  hasError: false,
};
