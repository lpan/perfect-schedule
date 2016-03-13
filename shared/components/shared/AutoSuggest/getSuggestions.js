import React from 'react';
import request from 'superagent';

let host = 'localhost:8000';

if (typeof(window) !== 'undefined'){

  const url = window.location.hostname;

  // in production
  if (url !== 'localhost')
    host = window.location.hostname;
}

// ex. school => marianopolis
// type => school/teacher/course/code
export default function (school, type, val, callback) {
  const getUrl = `http://${host}/api/suggest?school=${school}&val=${val}&type=${type}`;
  request.get(getUrl).end(callback);
};
