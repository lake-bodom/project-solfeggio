import {
  dataOfIntervals,
  getChosenIntervals,
  createGroupsOfIntervals,
  getNewInterval
} from "../dataOfIntervals";

import {
  SET_ACTIVE_TYPE_OF_INTERVAL,
  SET_SEQUENCE_OF_NOTES,
  SETTINGS_CLICK
} from "../actionTypes";

const allIntervals = [...dataOfIntervals];
let chosenIntervals = getChosenIntervals(allIntervals);
let groupsOfFilteredIntervals = createGroupsOfIntervals(chosenIntervals);
let groupsOfAllIntervals = createGroupsOfIntervals(allIntervals);

let activeInterval = getNewInterval(chosenIntervals);

const initialState = {
  groupsOfFilteredIntervals,
  groupsOfAllIntervals,
  typeOfInterval: "melodicUp",
  activeInterval,
  sequenceOfNotes: [],
  settingsIsOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TYPE_OF_INTERVAL: {
      return { ...state, typeOfInterval: action.payload };
    }

    case SET_SEQUENCE_OF_NOTES: {
      return { ...state, sequenceOfNotes: action.payload };
    }

    case SETTINGS_CLICK: {
      return { ...state, settingsIsOpen: !state.settingsIsOpen };
    }

    default: {
      return state;
    }
  }
};
