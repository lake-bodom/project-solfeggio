import {
  INCREMENT_RIGHT_ANSWERS,
  INCREMENT_AMOUNT_OF_ANSWERS,
  NEXT_BUTTON_CLICK,
  STATISTICS_CLEARING,
  STATISTICS_HIDE_ANSWER
} from "../actionTypes";

export const actionIncrementRightAnswers = name => ({
  type: INCREMENT_RIGHT_ANSWERS,
  payload: name
});

export const actionIncrementAmountOfAnswers = name => ({
  type: INCREMENT_AMOUNT_OF_ANSWERS,
  payload: name
});

export const actionNextButtonClick = name => ({
  type: NEXT_BUTTON_CLICK,
  payload: name
});

export const actionStatisticsClearing = () => ({
  type: STATISTICS_CLEARING
});

export const actionHideAnswer = () => ({
  type: STATISTICS_HIDE_ANSWER
});
