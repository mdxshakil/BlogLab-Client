import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { useLocation, useNavigate } from "react-router-dom";

export const useAuthCheck = () => {
  const { user, isLoading: userLoading } = useAppSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  //navigate to previous page if user is already logged in
  useEffect(() => {
    if (user?.email && !userLoading) {
      navigate(from, { replace: true });
    }
  }, [from, userLoading, user?.email, navigate]);
};
