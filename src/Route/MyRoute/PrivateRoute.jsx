import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import animation from "../../assets/loading.json";
import Lottie from "lottie-react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <Lottie
        className="w-40 flex justify-center items-center mx-auto min-h-screen"
        animationData={animation}
      ></Lottie>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to={"/login"}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default PrivateRoute;
