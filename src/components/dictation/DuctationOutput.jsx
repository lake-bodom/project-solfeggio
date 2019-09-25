import React from "react";
import DictationOutputElement from "./DictationOutputElement";

const DuctationOutput = ({
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

export default DuctationOutput;
