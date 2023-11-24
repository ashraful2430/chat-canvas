import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import animation from "../../assets/loading.json";
import Lottie from "lottie-react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return <Lottie animationData={animation}></Lottie>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to={"/login"}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
