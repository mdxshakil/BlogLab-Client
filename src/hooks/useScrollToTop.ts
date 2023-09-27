import { useEffect } from "react";

const useScrollToTop = (pathname: string) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
};

export default useScrollToTop;
