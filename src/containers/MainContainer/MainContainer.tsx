import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { getJokes } from "../../services/jokesApi";

import {
  selectErrorState,
  selectLoadingState,
} from "../../reducers/jokes.reducer";

import JokesTable from "../../components/JokesTable/JokesTable";

const MainContainer = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // Selectors.
  const loading = useSelector(selectLoadingState);
  const hasError = useSelector(selectErrorState);

  // Call API to get jokes before first render.
  useEffect(() => {
    dispatch(getJokes());
  }, []);

  return (
    <div>
      {loading ? (
        <Box sx={{ position: "fixed", right: "50%", bottom: "50%" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div>
          {hasError ? (
            <div>
              <h1>{t("error-loading")}</h1>
            </div>
          ) : (
            <JokesTable />
          )}
        </div>
      )}
    </div>
  );
};

export default MainContainer;
