import {
  INCREMENT_RIGHT_ANSWERS,
  INCREMENT_AMOUNT_OF_ANSWERS,
  NEXT_BUTTON_CLICK,
  STATISTICS_CLEARING,
  STATISTICS_HIDE_ANSWER
} from "../actionTypes";

const initialState = {
  nameOfInterval: "",
  rightAnswers: 0,
  amountOfAnswers: 0,
  right: false,
  showAnswer: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STATISTICS_CLEARING: {
      return { ...state, ...initialState };
    }

    case INCREMENT_RIGHT_ANSWERS: {
      const rightAnswers = state.rightAnswers + 1;
      const amountOfAnswers = state.amountOfAnswers + 1;
      return {
        ...state,
        rightAnswers,
        amountOfAnswers,
        nameOfInterval: action.payload ? action.payload : null,
        right: true,
        showAnswer: true
      };
    }
    case INCREMENT_AMOUNT_OF_ANSWERS: {
      const amountOfAnswers = state.amountOfAnswers + 1;
      return {
        ...state,
        amountOfAnswers,
        nameOfInterval: action.payload ? action.payload : null,
        right: false,
        showAnswer: true
      };
    }

    case NEXT_BUTTON_CLICK: {
      return { ...state, nameOfInterval: "", right: false };
    }

    case STATISTICS_HIDE_ANSWER: {
      return { ...state, showAnswer: false };
    }
    default: {
      return state;
    }
  }
};
