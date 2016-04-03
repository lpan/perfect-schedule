import request from 'superagent';
import * as ActionTypes from '../constants/constants';

let host = 'localhost:8000';

if (typeof(window) !== 'undefined') {
  const url = window.location.hostname;

  // in production
  if (url !== 'localhost') {
    host = window.location.hostname;
  }
}

export function setSchool(school) {
  return {
    type: ActionTypes.SET_SCHOOL,
    full: school.full,
    name: school.name,
  };
}

export function addCourses(courses, code) {
  return {
    type: ActionTypes.ADD_COURSES,
    courses,
    code,
  };
}

export function fetchPossibleCourses(code, school) {
  return (dispatch) => {
    request.get(`http://${host}/api/search?school=${school}&code=${code}`).end((err, data) => {
      dispatch(addCourses(JSON.parse(data.text), code));
    });
  };
}
