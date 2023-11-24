import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import animation from "../../assets/loading.json";
import Lottie from "lottie-react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Lottie animationData={animation}></Lottie>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
