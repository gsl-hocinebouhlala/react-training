import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import TableFooter from "@mui/material/TableFooter";

import { selectJokes } from "../../reducers/jokes.reducer";

import { TableFooterProps } from "../../types/types";

import TablePaginationActions from "./TablePaginationActions";

const TableFooterContent = ({
  page,
  rowsPerPage,
  setPage,
  setRowsPerPage,
}: TableFooterProps) => {
  // Selectors.
  const jokes = useSelector(selectJokes);

  const { t } = useTranslation();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[4, 6, 8, { label: t("all"), value: -1 }]}
          colSpan={3}
          labelRowsPerPage={t("row-per-page-label")}
          labelDisplayedRows={({ from, to, count }) => {
            return `${from}–${to} ${t("of")} ${
              count !== -1 ? count : `more than ${to}`
            }`;
          }}
          count={jokes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              "aria-label": "jokes per page",
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableRow>
    </TableFooter>
  );
};
export default TableFooterContent;
