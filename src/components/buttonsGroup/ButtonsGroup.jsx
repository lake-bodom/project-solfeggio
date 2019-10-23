import React from "react";
import PropTypes from "prop-types";

import "./buttonsGroup.css";

const ButtonsGroup = ({ children, cls }) => {
    let classNames = ["buttonGroup", cls];
    return <div className={classNames.join(" ")}>{children}</div>;
};

ButtonsGroup.propTypes = {
    children: PropTypes.array,
    cls: PropTypes.string
};

ButtonsGroup.defaultProps = {
    children: "",
    cls: "horizontal"
};
export default ButtonsGroup;
