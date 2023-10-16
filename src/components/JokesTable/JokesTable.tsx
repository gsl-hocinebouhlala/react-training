import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Table from "@mui/material/Table";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";

import TableContainer from "@mui/material/TableContainer";

import AddIcon from "@mui/icons-material/Add";

import { sortJokes } from "../../utils/utils";
import { Column } from "../../types/types";
import { initColumns } from "../../constants/constants";

import { selectJokes, setJokes } from "../../reducers/jokes.reducer";

import Modal from "../Modal/Modal";
import AddNewJokeModal from "../Modal/AddNewJokeModalContent";
import TableHeader from "./TableHead";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const JokesTable = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // Selectors
  const jokes = useSelector(selectJokes);

  // State.
  const [columns, setColumns] = useState<Column[]>(
    initColumns.map((col) => ({ ...col }))
  );
  const [columnUsed, setColumnUsed] = useState<string>("setup");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleAddJoke = () => {
    setIsModalOpen(true);
    setModalContent(<AddNewJokeModal handleClose={handleClose} />);
  };

  const handleClose = () => setIsModalOpen(false);

  /**
   * Handle when clicking on some column.
   * @param selectedColumn
   *   Name of the column
   */
  const handleSort = (selectedColumn: string) => {
    let newColumns = [...columns];
    if (columnUsed !== selectedColumn) {
      // click on another column, sort by the chosen column (desc by default).
      newColumns = initColumns.map((col) => ({ ...col }));
      setColumnUsed(selectedColumn);
    } else {
      // click on the same column, reverse the order direction.
      newColumns = columns.map((col: Column) => {
        if (col.name === selectedColumn) {
          col.sortBy = col.sortBy === "desc" ? "asc" : "desc";
        }
        return col;
      });
    }
    setColumns(newColumns);
    const targetColumn: Column | undefined = newColumns.find(
      (column) => column.name === selectedColumn
    );
    const sortedJokes = sortJokes(jokes, selectedColumn, targetColumn?.sortBy);
    dispatch(setJokes(sortedJokes));
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        onClick={handleAddJoke}
      >
        <AddIcon />
      </Fab>
      <Modal isModalOpen={isModalOpen} handleClose={handleClose}>
        {modalContent}
      </Modal>
      {jokes.length === 0 ? (
        <h3>{t("no-jokes")}</h3>
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            width: "92%",
            marginLeft: "4%",
            marginTop: "2em",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="custom pagination table">
            <TableHeader
              handleSort={handleSort}
              columns={columns}
              columnUsed={columnUsed}
            />
            <TableBody
              page={page}
              rowsPerPage={rowsPerPage}
              setIsModalOpen={setIsModalOpen}
              setModalContent={setModalContent}
              handleClose={handleClose}
            />
            <TableFooter
              page={page}
              rowsPerPage={rowsPerPage}
              setPage={setPage}
              setRowsPerPage={setRowsPerPage}
            />
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default JokesTable;
