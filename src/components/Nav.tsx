import { useTranslation } from "react-i18next";
import "./../../src/i18n";
import { useState } from "react";

const Navbar = () => {
  //state
  const [selectLang, setSelectLang] = useState(true);

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      {selectLang ? (
        <button
          onClick={() => {
            changeLanguage("en");
            setSelectLang(false);
          }}
        >
          English
        </button>
      ) : (
        <button
          onClick={() => {
            changeLanguage("ar");
            setSelectLang(true);
          }}
        >
          Arabic
        </button>
      )}

      <h1>{t("Home")}</h1>
      <p>{t("About")}</p>
      <p>{t("Contact")}</p>
    </>
  );
};

export default Navbar;
