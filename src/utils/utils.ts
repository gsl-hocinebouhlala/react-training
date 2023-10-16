import { Joke } from "../types/types";

/**
 * Sort jokes according to selected column and sortBy value.
 * @param jokes
 *   Jokes list.
 * @param column
 *   Name of the selected column.
 * @param sortBy
 *   Equals to 'asc' or 'desc'.
 * @returns
 *   sorted sorted jokes.
 */
export const sortJokes = (jokes: any, column: string, sortBy: string = "") => {
  const jokesCopy = [...jokes];
  if (jokes.length === 0) {
    return [];
  }
  let sortedJokes: Joke[] =
    jokesCopy.sort(
      (a: { [key: string]: string }, b: { [key: string]: string }) => {
        const nameA = a[column].toUpperCase(); // ignore upper and lowercase
        const nameB = b[column].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      }
    ) ?? [];
  if (sortBy === "desc") {
    sortedJokes = sortedJokes.reverse() ?? [];
  }
  return sortedJokes;
};
