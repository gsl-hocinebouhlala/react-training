import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { selectJokes, setJokes } from "../../reducers/jokes.reducer";

import { Joke, DeleteJokeModalContentType } from "../../types/types";

const DeleteJokeModalContent = ({
  handleClose,
  jokeIndex,
}: DeleteJokeModalContentType) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // Selectors.
  const jokes = useSelector(selectJokes);

  /**
   * Delete the selected joke from jokes list.
   */
  const deleteJoke = () => {
    const copyJokes: Joke[] = jokes.map((joke) => ({ ...joke }));
    copyJokes.splice(jokeIndex, 1);
    dispatch(setJokes(copyJokes));
    handleClose();
  };

  return (
    <div>
      <ModalTitle>{t("delete-modal-title")}</ModalTitle>
      <Stack direction="row" spacing={3} sx={{ justifyContent: "right" }}>
        <Button variant="outlined" onClick={handleClose}>
          {t("cancel-button")}
        </Button>
        <Button variant="contained" color="error" onClick={deleteJoke}>
          {t("delete-button")}
        </Button>
      </Stack>
    </div>
  );
};

const ModalTitle = styled.h1`
  margin-top: 0.2em;
  margin-bottom: 1em;
  font-size: 1.4em;
  text-align: center;
  font-weight: 500;
`;

export default DeleteJokeModalContent;
