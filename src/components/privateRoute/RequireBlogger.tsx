import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../shared/LoadingSpinner";

const RequireBlogger = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const { user, isLoading } = useAppSelector((state) => state.auth);
  const { email, accountStatus, role } = user || {};
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // If the user is not logged in or the account status is not active, deny access.
  if (!email || accountStatus !== "active") {
    navigate("/login", { replace: true, state: { from } });
    return null;
  }

  // If the user's role is not "blogger," deny access.
  if (role !== "blogger") {
    navigate(from, { replace: true });
    return null;
  }

  // If the user is logged in, has an active account, and is a blogger, allow access.
  return children;
};

export default RequireBlogger;
