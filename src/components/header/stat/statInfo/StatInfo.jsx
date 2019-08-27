import React from "react";

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

export default StatInfo;
