import React from "react";
import PropTypes from "prop-types";
import getClasses from "../../utils/getClasses";

const Button = ({ children, color, onClick }) => (
  <button
    className={getClasses(color)}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  onClick: () => {},
  color: 'red',
}

export default Button;
