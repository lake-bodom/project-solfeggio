import React from "react";

import PropTypes from "prop-types";

const StatInfo = ({ rightAnswers, amountOfAnswers }) => {
  const percent =
    amountOfAnswers !== 0
      ? Math.floor(Math.round((rightAnswers / amountOfAnswers) * 100))
      : "0";
  return (
    <React.Fragment>
      <span>{rightAnswers}</span>&nbsp;/&nbsp;
      <span>{amountOfAnswers}</span>&nbsp;
      <span>({percent}%)</span>
    </React.Fragment>
  );
};

StatInfo.propTypes = {
  rightAnswers: PropTypes.number.isRequired,
  amountOfAnswers: PropTypes.number.isRequired
};

export default StatInfo;
