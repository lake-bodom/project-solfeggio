import React from "react";

const DictationOutputElement = ({
  elem,
  index,
  rightAnswer,
  answerGiven,
  rightElem
}) => {
  const cls = answerGiven ? (rightAnswer ? "right" : "wrong") : "";

  const rightElemJSX = answerGiven ? (
    rightAnswer ? null : (
      <span className="right">
        &nbsp;
        {rightElem ? `${rightElem.octaveName} - ${rightElem.fullName}` : " ?"}
      </span>
    )
  ) : null;

  return (
    <p className="dictation-output-element">
      <span className="index-output-element">{`${index + 1} нота:`}</span>&nbsp;
      <span className={cls}>
        {elem ? `${elem.octaveName} - ${elem.fullName}` : " ?"}
      </span>
      {rightElemJSX}
    </p>
  );
};

export default DictationOutputElement;
