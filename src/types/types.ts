export type Joke = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

export type Column = {
  id: number;
  name: string;
  label: string;
  sortBy: string;
};

// Store.
export type StateStore = {
  jokes: Joke[];
  isLoading: boolean;
  hasError: boolean;
};

// Modal.
export type ModalType = {
  isModalOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
};

export type AddNewJokeModalContentType = {
  handleClose: () => void;
  selectedJoke?: Joke;
};

export type DeleteJokeModalContentType = {
  handleClose: () => void;
  jokeIndex: number;
};

export type TablePaginationActionsProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
};

export type TableHeaderProps = {
  handleSort: (columnName: string) => void;
  columns: Column[];
  columnUsed: string;
};

export type TableBodyProps = {
  page: number;
  rowsPerPage: number;
  setIsModalOpen: (isOpen: boolean) => void;
  setModalContent: (element: React.ReactElement) => void;
  handleClose: () => void;
};

export type TableFooterProps = {
  page: number;
  rowsPerPage: number;
  setPage: (page: number) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
};
