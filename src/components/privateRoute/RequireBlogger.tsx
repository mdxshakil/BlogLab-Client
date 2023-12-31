import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const RequireBlogger = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const { user, isLoading } = useAppSelector((state) => state.auth);
  const { email, accountStatus, role } = user || {};
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>();

  // Check the user's authentication state.
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    }
    if (!email) {
      setLoading(false);
      navigate("/login");
    }
    // If the user's role is not "blogger," deny access.
    else if (role !== "blogger" || accountStatus !== "active") {
      toast.error("Account is not approved yet");
      setLoading(false);
      navigate(from, { replace: true, state: { from } });
    }
  }, [email, accountStatus, navigate, from, isLoading, role]);

  if (loading) {
    return <LoadingSpinner />;
  }
  // If the user is logged in, has an active account, and is a blogger, allow access.
  return children;
};

export default RequireBlogger;
