import _ from 'underscore';
import { MongoClient } from 'mongodb';

import { serverConfig, schools } from '../config';

// return an array of courses according to users' input
// req.query => school, teacher, code, course
export function getCourses (req, res) {

  MongoClient.connect(serverConfig.mongoURL, (err, db) => {

    const collect = db.collection(`${req.query.school}-details`);
    const query = _.omit(req.query, 'school');

    collect.find(query).limit(5).toArray( (e, docs) => {
      res.send(docs);
    });
  });
}

// give hint to the users while inputing teacher/course/code
// req.query => school, type, val
// type => (teacher|code|course)
export function getSuggests (req, res) {

  // if it is school no need to connect to db
  if (req.query.type === 'school') {

    const matched = [];

    for (let i = 0; i < schools.length; i++) {

      if (schools[i].name.indexOf(req.query.val) !== -1)
        // school object => { reference, fullname }
        matched.push( { val: schools[i].full, ref: schools[i].name });

      if (matched.length === 5)
        break;
    }
    res.json(matched);
  } else {

    MongoClient.connect(serverConfig.mongoURL, (err, db) => {

      // ex. marianopolis-teachers
      const collectName = `${req.query.school}-${req.query.type}s`;
      const collect = db.collection(collectName);

      collect.find({ val: { $regex: `.*(?i)${req.query.val}.*` } }).limit(5).toArray( (e, docs) => {
        res.send(docs);
      });

    });
  }
}
