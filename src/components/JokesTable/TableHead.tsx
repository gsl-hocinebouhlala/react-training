import { useTranslation } from "react-i18next";

import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";

import AscendingIcon from "@mui/icons-material/North";
import DescendingIcon from "@mui/icons-material/South";

import { Column, TableHeaderProps } from "../../types/types";

const TableHeader = ({ handleSort, columns, columnUsed }: TableHeaderProps) => {
  const { t } = useTranslation();

  return (
    <TableHead>
      <TableRow>
        {columns.map((column: Column) => (
          <TableCell
            sx={[
              {
                "&:hover": {
                  backgroundColor: "whitesmoke",
                  cursor: "pointer",
                },
              },
            ]}
            key={column.id}
            onClick={() => handleSort(column.name)}
          >
            <span>{t(column.label)}</span>
            <IconButton
              aria-label="delete"
              size="small"
              sx={{
                marginLeft: "0.5em",
                backgroundColor: column.name === columnUsed ? "whitesmoke" : "",
              }}
            >
              {column.sortBy === "asc" ? (
                <AscendingIcon fontSize="inherit" />
              ) : (
                <DescendingIcon fontSize="inherit" />
              )}
            </IconButton>
          </TableCell>
        ))}
        <TableCell>{t("column-actions")}</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
