import _ from 'underscore';
import { MongoClient } from 'mongodb';
import serverConfig from '../config';

// return an array of courses according to users' input
export function getCourses(req, res) {

  MongoClient.connect(serverConfig.mongoURL, (err, db) => {

    let collect = db.collection(req.query.school);
    let query = _.omit(req.query, 'school');

    collect.find(query).toArray( (e, docs) => {
      res.send(docs);
    });
  });
}

// give hint to the users while inputing
export function getSuggests(req, res) {

  MongoClient.connect(serverConfig.mongoURL, (err, db) => {

    let collect = db.collection(req.query.school);

    // collect.find({ req.query.type: { $regex: `.*#{req.query.val}.*` } })

}
