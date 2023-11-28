import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
    return (
      <p className="min-h-screen flex justify-center items-center text-4xl font-bold">
        loading ....
      </p>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.object,
};

export default AdminRoute;
