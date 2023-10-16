import React from "react";
import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";

import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={2}
      sx={{ marginTop: "2em" }}
    >
      <Box gridColumn="span 11" textAlign="center" paddingLeft="6em">
        <h1>{t("main-title")}</h1>
      </Box>
      <Box gridColumn="span 1" textAlign="center" alignSelf="center">
        <LanguageSelector />
      </Box>
    </Box>
  );
};

export default Header;
