import _ from 'underscore';
import { MongoClient } from 'mongodb';
import { serverConfig } from '../config';

// return an array of courses according to users' input
// req.query => school, teacher, code, course
export function getCourses(req, res) {

  MongoClient.connect(serverConfig.mongoURL, (err, db) => {

    let collect = db.collection(req.query.school);
    let query = _.omit(req.query, 'school');

    collect.find(query).toArray( (e, docs) => {
      res.send(docs);
    });
  });
}

// give hint to the users while inputing teacher/course/code
// req.query => school, type, val
// type => (teacher|code|course)
export function getSuggests(req, res) {

  MongoClient.connect(serverConfig.mongoURL, (err, db) => {

    // ex. marianopolis-teachers
    let collectName = `${req.query.school}-${req.query.type}s`;
    let collect = db.collection(collectName);

    collect.find({ val: { $regex: `.*(?i)${req.query.val}.*` } }).toArray( (e, docs) => {
      res.send(docs);
    });
  });
}
