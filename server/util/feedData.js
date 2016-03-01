import fs from 'fs';
import path from 'path';
import { MongoClient } from 'mongodb';

import { schools, serverConfig } from '../config';

function feed (name, path, db) {
  const collect = db.collection(name);
  collect.count( (err, count) => {
    if (!err && count === 0) {

      // populate db
      fs.readFile(path, (err, data) => {

        collect.insert(JSON.parse(data), (err) => {
          db.close();
        });
      });
    }
  });
}

export default function () {
  schools.forEach( (file) => {
    file.data.forEach( (data) => {
      MongoClient.connect(serverConfig.mongoURL, (err, db) => {
        const jsonPath = path.join('./static/data/', file.name+file.year+file.term, data+'.json');
        feed(file.name+"-"+data, jsonPath, db);
      });
    });
  });
}
