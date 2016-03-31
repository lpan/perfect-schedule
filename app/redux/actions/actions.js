import * as ActionTypes from '../constants/constants';

export function setSchool(school) {
  return {
    type: ActionTypes.SET_SCHOOL,
    full: school.full,
    name: school.name,
  };
}
