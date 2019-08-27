import React from "react";
import StatInfo from "./statInfo/StatInfo";
import StatIntervalName from "./statInfo/StatIntervalName";
import "./stat.css";

const Stat = ({ stat: { name, right, rightAnswers, amountOfAnswers } }) => {
  const statBody = name ? (
    <StatIntervalName name={name} />
  ) : (
    <StatInfo rightAnswers={rightAnswers} amountOfAnswers={amountOfAnswers} />
  );

  let classesNames = ["stat"];

  if (name) {
    if (right) {
      classesNames.push("rightAnswer");
    } else {
      classesNames.push("wrongAnswer");
    }
  }

  return <div className={classesNames.join(" ")}>{statBody}</div>;
};

export default Stat;
