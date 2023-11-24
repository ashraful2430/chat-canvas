import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="w-full max-w-[1200px] mx-auto px-3">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
