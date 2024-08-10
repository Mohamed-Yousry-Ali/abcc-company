import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Change the direction based on the selected language
    document.body.dir = t("direction");
  }, [i18n.language, t]); // Runs when the language or translations change
  return (
    <>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
}

export default App;
