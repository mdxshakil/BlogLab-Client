import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useAppSelector } from "./redux/hooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import useAuthCheck from "./hooks/useAuthCheck";

function App() {
  const { themeMode } = useAppSelector((state) => state.theme);
  const isLoggedIn = useAuthCheck();
  if (!isLoggedIn) {
    return <p>Loading auth check.............</p>;
  }
  return (
    <div
      className={`${
        themeMode === "dark" ? "dark" : ""
      }  max-w-screen-xl mx-auto `}
    >
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
  );
}

export default App;
