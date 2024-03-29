import React from "react";
import PropTypes from "prop-types";

import "./button.css";

const Button = ({ onClick, children, cls, active, disabled }) => {
  let classNames = ["button", cls];

  if (active) {
    classNames.push("active");
  }

  return (
    <button
      onClick={onClick}
      className={classNames.join(" ")}
      disabled={disabled}
      onFocus={(e) => { e.target.blur(); }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  onClick: PropTypes.func,
  cls: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  children: "click",
  onClick: () => { },
  cls: "secondary-outline",
  active: false
};

export default Button;
