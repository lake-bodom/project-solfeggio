import {
  INCREMENT_RIGHT_ANSWERS,
  INCREMENT_AMOUNT_OF_ANSWERS,
  NEXT_BUTTON_CLICK
} from "../actionTypes";

const initialState = {
  nameOfInterval: "",
  rightAnswers: 0,
  amountOfAnswers: 0,
  right: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_RIGHT_ANSWERS: {
      const rightAnswers = state.rightAnswers + 1;
      const amountOfAnswers = state.amountOfAnswers + 1;
      return {
        ...state,
        rightAnswers,
        amountOfAnswers,
        nameOfInterval: action.payload,
        right: true
      };
    }
    case INCREMENT_AMOUNT_OF_ANSWERS: {
      const amountOfAnswers = state.amountOfAnswers + 1;
      return {
        ...state,
        amountOfAnswers,
        nameOfInterval: action.payload,
        right: false
      };
    }

    case NEXT_BUTTON_CLICK: {
      return { ...state, nameOfInterval: "", right: false };
    }
    default: {
      return state;
    }
  }
};
