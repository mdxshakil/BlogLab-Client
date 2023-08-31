import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";

export const useThemeMode = () => {
  const { themeMode } = useAppSelector((state) => state.theme);

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", themeMode);
    }
  }, [themeMode]);
};
