import React from "react";
import DictationOutputElement from "./DictationOutputElement";

import PropTypes from "prop-types";

const DictationOutput = ({
  amountOfNotes,
  sequenceOfMelody,
  sequenceOfWrittenMelody,
  answerGiven,
  answers
}) => {
  let dictationOutputBody = [];

  for (let i = 0; i < amountOfNotes; i++) {
    const elem = sequenceOfWrittenMelody[i];
    const rightElem = sequenceOfMelody[i];
    const elementJSX = (
      <DictationOutputElement
        elem={elem}
        index={i}
        answerGiven={answerGiven}
        rightAnswer={answers[i]}
        rightElem={rightElem}
        key={i}
      />
    );

    dictationOutputBody.push(elementJSX);
  }
  return (
    <div className="dictation-output">
      <h3>Список отгаданных нот:</h3>
      {dictationOutputBody}
    </div>
  );
};

DictationOutput.propTypes = {
  amountOfNotes: PropTypes.number.isRequired,
  needToWriteNote: PropTypes.bool.isRequired,
  sequenceOfMelody: PropTypes.arrayOf(PropTypes.object).isRequired,
  sequenceOfWrittenMelody: PropTypes.arrayOf(PropTypes.object).isRequired,
  answers: PropTypes.arrayOf(PropTypes.bool).isRequired,
  answerGiven: PropTypes.bool.isRequired
};

export default DictationOutput;
