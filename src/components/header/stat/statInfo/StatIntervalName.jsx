import React from "react";

import PropTypes from "prop-types";

const StatIntervalName = ({ name }) => {
  return <span>{name}</span>;
};

StatIntervalName.propTypes = {
  name: PropTypes.string.isRequired
};

export default StatIntervalName;
