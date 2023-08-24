import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useAppSelector } from "./redux/hooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const { themeMode } = useAppSelector((state) => state.theme);
  return (
    <div
      className={`${
        themeMode === "dark" ? "dark" : ""
      }  max-w-screen-xl mx-auto `}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
