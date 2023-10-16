import { useSelector } from "react-redux";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import IconButton from "@mui/material/IconButton";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Joke, TableBodyProps } from "../../types/types";

import { selectJokes } from "../../reducers/jokes.reducer";

import AddNewJokeModal from "../Modal/AddNewJokeModalContent";
import DeleteJokeModalContent from "../Modal/DeleteJokeModal";

const TableBodyContent = ({
  page,
  rowsPerPage,
  setIsModalOpen,
  setModalContent,
  handleClose,
}: TableBodyProps) => {
  // Selectors
  const jokes = useSelector(selectJokes);

  // Avoid a layout jump when reaching the last page with empty jokes.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - jokes.length) : 0;

  /**
   * Display modal with deletion mode.
   *
   * @param jokeIndex
   *   Target joke index to delete.
   */
  const handleDeleteJoke = (jokeIndex: number) => {
    setIsModalOpen(true);
    setModalContent(
      <DeleteJokeModalContent handleClose={handleClose} jokeIndex={jokeIndex} />
    );
  };

  /**
   * Display modal with edition mode.
   * @param selectedJoke
   *  Target joke content to edit.
   */
  const handleEditJoke = (selectedJoke: Joke) => {
    setIsModalOpen(true);
    setModalContent(
      <AddNewJokeModal handleClose={handleClose} selectedJoke={selectedJoke} />
    );
  };

  return (
    <TableBody>
      {jokes
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((joke: Joke, index: number) => {
          return (
            <TableRow
              hover
              key={joke.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{joke.type}</TableCell>
              <TableCell>{joke.setup}</TableCell>
              <TableCell>{joke.punchline}</TableCell>
              <TableCell>
                <IconButton
                  aria-label="edit"
                  size="medium"
                  sx={{ marginRight: "0.5em" }}
                  onClick={() => handleEditJoke(joke)}
                >
                  <EditIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  size="medium"
                  onClick={() => handleDeleteJoke(index)}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default TableBodyContent;
