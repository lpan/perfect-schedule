import fs from 'fs';
import path from 'path';
import { MongoClient } from 'mongodb';

import { schools, serverConfig } from '../config';

function feed(name, filePath, db) {
  const collect = db.collection(name);
  collect.count((err1, count) => {
    if (!err1 && count === 0) {
      // populate db
      fs.readFile(filePath, (err2, data) => {
        collect.insert(JSON.parse(data), () => db.close());
      });
    }
  });
}

export default function () {
  schools.forEach((file) => {
    file.data.forEach((data) => {
      MongoClient.connect(serverConfig.mongoURL, (err, db) => {
        const jsonPath = path.join('./static/data/',
                                   `${file.name}${file.year}${file.term}`,
                                   `${data}.json`);
        feed(`${file.name}-${data}`, jsonPath, db);
      });
    });
  });
}
