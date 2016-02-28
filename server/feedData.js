import fs from 'fs';
import { MongoClient } from 'mongodb';

export default function (db, name) {
  const collect = db.collection(name);
  if (collect.count() > 0)
    return;

  fs.readFile('static/data/marianopolis2015w.json', (err, data) => {

    collect.insert(JSON.parse(data), (err) => {
      if (err) console.log(err);
      db.close();
    });
  });
}
