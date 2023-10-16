import { Formik } from "formik";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { selectJokes, setJokes } from "../../reducers/jokes.reducer";

import { Joke, AddNewJokeModalContentType } from "../../types/types";

const AddNewJokeModalContent = ({
  handleClose,
  selectedJoke,
}: AddNewJokeModalContentType) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // Selectors
  const jokes = useSelector(selectJokes);

  // Used to manage the two types of modal contents (creation mode and editing mode).
  const isCreationMode = !selectedJoke;

  return (
    <div>
      <ModalTitle>
        {isCreationMode
          ? t("add-joke-modal-title")
          : t("edit-joke-modal-title")}
      </ModalTitle>
      <Formik
        initialValues={{
          type: selectedJoke?.type ?? "",
          setup: selectedJoke?.setup ?? "",
          punchline: selectedJoke?.punchline ?? "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          // Creating a copy of jokes in order to set it.
          const copyJokes: Joke[] = jokes.map((joke) => ({ ...joke }));
          if (isCreationMode) {
            // In creation mode, add the new one to the jokes list.
            copyJokes.push({
              id: jokes.length,
              type: values.type,
              setup: values.setup,
              punchline: values.punchline,
            });
            dispatch(setJokes(copyJokes));
          } else {
            // In edit mode, find the target joke and update with tne new entries.
            const editedJokes = copyJokes.map((joke) => {
              if (joke.id === selectedJoke.id) {
                return { ...joke, ...values };
              }
              return joke;
            });
            dispatch(setJokes(editedJokes));
          }
          // Hide the modal.
          setSubmitting(false);
          handleClose();
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              id="outlined-required"
              label={t("column-type")}
              type="type"
              name="type"
              sx={{ marginBottom: "1em" }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.type}
            />
            <TextField
              required
              id="outlined-multiline-static"
              label={t("column-setup")}
              fullWidth
              multiline
              sx={{ marginBottom: "1em" }}
              rows={4}
              type="setup"
              name="setup"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.setup}
            />
            <TextField
              required
              id="outlined-multiline-static"
              label={t("column-punchline")}
              fullWidth
              multiline
              rows={4}
              type="punchline"
              name="punchline"
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ marginBottom: "1em" }}
              value={values.punchline}
            />
            <Stack direction="row" spacing={3} sx={{ justifyContent: "right" }}>
              <Button variant="outlined" onClick={handleClose}>
                {t("cancel-button")}
              </Button>
              <Button
                variant="contained"
                color="success"
                type="submit"
                disabled={isSubmitting}
              >
                {isCreationMode ? t("add-button") : t("validate-button")}
              </Button>
            </Stack>
          </form>
        )}
      </Formik>
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

export default AddNewJokeModalContent;
