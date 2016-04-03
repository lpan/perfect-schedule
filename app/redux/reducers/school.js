import * as ActionTypes from '../constants/constants';

const initialState = { courses: [] };
const school = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_SCHOOL:
      // reset classes when school is reset
      return {
        name: action.name,
        full: action.full,
      };

    case ActionTypes.ADD_COURSES:
      return Object.assign({}, state, {
        courses: state.courses ?
          state.courses.concat([{ code: action.code, possibleCourses: action.courses }]) :
          [].concat([{ code: action.code, possibleCourses: action.courses }]),
      });

    default:
      return state;
  }
};

export default school;
