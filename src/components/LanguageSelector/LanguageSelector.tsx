import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("fr");
  const { t, i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 120,
        textAlign: "center",
        alignSelf: "center",
        backgroundColor: "white",
      }}
    >
      <InputLabel id="demo-select-small-label">
        {t("language-selector-label")}
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={language}
        label={t("language-selector-label")}
        onChange={handleChange}
      >
        <MenuItem value={"fr"}>
          <span>{t("french")}</span>
        </MenuItem>
        <MenuItem value={"en"}>
          <span>{t("english")}</span>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
