import React from 'react';
import request from 'axios';

let host = 'localhost:8000';

if (typeof(window) !== 'undefined'){

  let url = window.location.hostname;

  // in production
  if (url !== 'localhost')
    host = window.location.hostname;
}

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
