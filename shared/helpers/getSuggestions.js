import request from 'axios';
import { host } from '../config/info';

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
}
