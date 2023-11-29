import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Component/hooks/useOrganizer";
import useAuth from "../Component/hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isOrganizer, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isOrganizer) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
