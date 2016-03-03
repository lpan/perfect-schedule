import request from 'axios';

import { host } from '../../../../server/config';

// const baseURL = process.env.NODE_ENV === 'development' ? 'localhost:8000' : 'schedule-perfect.me';

// ex. school => marianopolis
// type => school/teacher/course/code
export default function (school, type, val, callback) {
  request.
    get(`http://${host}/api/suggest?school=${school}&val=${val}&type=${type}`).
    then(response => {
      console.log(response.data);
      callback(response.data);
    }).
    catch(err => {
      callback(false);
    });
};
