import {
  GET_NEW_MELODY,
  CHANGE_MODE,
  ADD_NOTE_TO_ANSWER_ARRAY,
  POP_LAST_ELEM_FROM_ANSWER_ARRAY,
  WRITE_ANSWERS,
  CLEAR_WRITTEN_MELODY,
  CHANGE_SETTINGS,
  SET_INITIAL_STATE
} from "../actionTypes";

const initialState = {
  amountOfNotes: 4,
  sequenceOfMelody: [],
  sequenceOfWrittenMelody: [],
  readyToCheck: false,
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
      return { ...state, modeWrite, readyToCheck: false };
    }

    case ADD_NOTE_TO_ANSWER_ARRAY: {
      const { sequenceOfWrittenMelody } = state;
      sequenceOfWrittenMelody.push(action.payload);

      let readyToCheck = false;

      if (state.amountOfNotes === sequenceOfWrittenMelody.length) {
        readyToCheck = true;
      }

      return { ...state, sequenceOfWrittenMelody, readyToCheck };
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

    case CHANGE_SETTINGS: {
      return { ...state, ...action.payload };
    }


    case SET_INITIAL_STATE: {
      return initialState;
    }

    default:
      return { ...state };
  }
};
