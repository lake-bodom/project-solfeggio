import React from "react";
import StatInfo from "./statInfo/StatInfo";
import StatIntervalName from "./statInfo/StatIntervalName";
import "./stat.css";

import PropTypes from "prop-types";

const Stat = ({
  stat: { nameOfInterval, right, rightAnswers, amountOfAnswers, showAnswer }
}) => {
  const statBody = nameOfInterval ? (
    <StatIntervalName name={nameOfInterval} />
  ) : (
      <StatInfo rightAnswers={rightAnswers} amountOfAnswers={amountOfAnswers} />
    );

  let classesNames = ["stat"];

  if (showAnswer) {
    if (right) {
      classesNames.push("rightAnswer");
    } else {
      classesNames.push("wrongAnswer");
    }
  }

  return <div className={classesNames.join(" ")}>{statBody}</div>;
};

Stat.propTypes = {
  stat: PropTypes.shape({
    nameOfInterval: PropTypes.string.isRequired,
    right: PropTypes.bool.isRequired,
    rightAnswers: PropTypes.number.isRequired,
    amountOfAnswers: PropTypes.number.isRequired,
    showAnswer: PropTypes.bool.isRequired
  }).isRequired
};

export default Stat;
