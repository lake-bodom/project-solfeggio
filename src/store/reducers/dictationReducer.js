import {
  GET_NEW_MELODY,
  CHANGE_MODE,
  ADD_NOTE_TO_ANSWER_ARRAY,
  POP_LAST_ELEM_FROM_ANSWER_ARRAY
} from "../actionTypes";

const initialState = {
  amountOfNotes: 4,
  sequenceOfMelody: [],
  sequenceOfWrittenMelody: [],
  defaultModeWrite: false
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
    default:
      return { ...state };
  }
};
