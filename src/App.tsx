import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useAppSelector } from "./redux/hooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import usePersistLogin from "./hooks/usePersistLogin";

function App() {
  const { themeMode } = useAppSelector((state) => state.theme);
  const { isLoading } = usePersistLogin();

  return (
    <div
      className={`${
        themeMode === "dark" ? "dark" : ""
      }  max-w-screen-xl mx-auto `}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <RouterProvider router={router} />
          <Toaster
            toastOptions={{
              style: {
                backgroundColor: themeMode === "dark" ? "#191E24" : "#F2F2F2",
                border: "1px solid gray",
                color: themeMode === "dark" ? "#fff" : "gray",
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
