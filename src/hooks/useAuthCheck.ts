import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../redux/features/auth/authSlice";

const useAuthCheck = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localAuth = localStorage.getItem("auth");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth.user.email) {
        //if there is token and user info in the local storage, means user is logged in
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            ...auth.user,
          })
        );
      }
    }
    setIsLoggedIn(true);
  }, [dispatch]);

  return isLoggedIn;
};

export default useAuthCheck;
