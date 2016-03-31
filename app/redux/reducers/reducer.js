import * as ActionTypes from '../constants/constants';

const initialState = { school: null, classes: [] };

const schoolReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_SCHOOL:
    // reset classes when school is reset
      return {
        school: action.school,
        classes: [],
      };

    default:
      return state;
  }
};

export default schoolReducer;
