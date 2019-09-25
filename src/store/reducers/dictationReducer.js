import {
  GET_NEW_MELODY,
  CHANGE_MODE,
  ADD_NOTE_TO_ANSWER_ARRAY,
  POP_LAST_ELEM_FROM_ANSWER_ARRAY,
  WRITE_ANSWERS,
  CLEAR_WRITTEN_MELODY
} from "../actionTypes";

const initialState = {
  amountOfNotes: 4,
  sequenceOfMelody: [],
  sequenceOfWrittenMelody: [],
  defaultModeWrite: false,
  answers: [],
  answerGiven: false
};

const getNewMelody = ({ sliceArr, amountOfNotes }) => {
  const sequence = [];
  for (let i = 0; i < amountOfNotes; i++) {
    const note = { ...sliceArr[Math.floor(Math.random() * sliceArr.length)] };
    sequence.push(note);
  }

  return sequence;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_MELODY: {
      const { amountOfNotes } = state;

      const sliceArr = [...action.sliceArr];

      const sequenceOfMelody = getNewMelody({ sliceArr, amountOfNotes });

      return { ...state, sequenceOfMelody };
    }
    case CHANGE_MODE: {
      const modeWrite = action.payload;
      return { ...state, modeWrite };
    }
    case ADD_NOTE_TO_ANSWER_ARRAY: {
      const { sequenceOfWrittenMelody } = state;
      sequenceOfWrittenMelody.push(action.payload);

      return { ...state, sequenceOfWrittenMelody };
    }

    case POP_LAST_ELEM_FROM_ANSWER_ARRAY: {
      const sequenceOfWrittenMelody = [...state.sequenceOfWrittenMelody];

      if (sequenceOfWrittenMelody.length > 0) {
        sequenceOfWrittenMelody.pop();
      }

      return { ...state, sequenceOfWrittenMelody };
    }

    case WRITE_ANSWERS: {
      const answerGiven = action.payload.length > 0;
      return { ...state, answers: action.payload, answerGiven };
    }

    case CLEAR_WRITTEN_MELODY: {
      return { ...state, sequenceOfWrittenMelody: [] };
    }
    default:
      return { ...state };
  }
};
