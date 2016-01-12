var fs = require('fs');

fs.readFile('science.json', function (err, data) {
  if (err)
    console.log(err);
  var pdf = JSON.parse(data);
  pdf.forEach(function (file) {
    if (file.meeting.length > 5)
      console.log('Too many classes!');
    if (file.name === undefined)
      console.log('no name!');
    if (file.code === undefined)
      console.log('no code');
    if (file.teacher === undefined)
      console.log(file);
  });
  console.log(pdf.length);
});

