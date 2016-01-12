var fs = require('fs');
var _ = require('underscore');
var PDFParser = require('../node_modules/pdf2json/pdfparser');

var pdfParser = new PDFParser();
var pdfData = [];

var _onPFBinDataReady = function (evtData) {
  var data = [];
  var chomp = function (raw_text) {
    return raw_text.replace(/(\n|\u0000)+$/, '');
  };
  var regexes = [
    /^SECTION/,
    /^COURSE/,
    /^DAY/,
    /^ROOM/,
    /^SCHEDULE/,
    /^MARIANOPOLIS/i,
    /^[0-9]{1,2}$/,
    /^Complementary/,
    /^Physical/,
    /^Humanities/,
    /^French$/,
    /^English$/,
    /^[0-9]+\./ // match program name
  ];
  var count = -1; // for the foreach loop
  var course = -1;
  evtData.data.Pages.forEach(function (page, i) {
    // for some reason the pages are duplicated
    if (i % 2 == 0)
      return;
    page.Texts.
      sort(function (a, b) {
        if (a.y === b.y) {
          return a.x - b.x;
        } else {
          return a.y - b.y;
        }
      }).
      // Find items with certain expression and replace them with 
      // blank space. 
      map(function (file) {
        var isValid = true;
        regexes.forEach(function (regex) {
          if (file.R[0].T.match(regex) !== null)
            isValid = false;
        });
        if (isValid) {
          return chomp(decodeURIComponent(file.R[0].T));
        }
      }).
      // Delete blank space by the previous map function
      filter(function (item) {
        return item !== undefined && item !== '';
      }).
      // Convert array to a list of js objects
      forEach(function (file) {
        if (file.match(/^[0-9]{5}$/) !== null) {
          count ++;
          course = -1;
          data.push({});
          data[count].section = file;
          data[count].meeting = [];
          data[count].name = '';
        } else if (file.match(/^.{3}-.{3}/) !== null) {
          if (file.match(/[0-9]{5}/) !== null) {
            count ++;
            course = -1;
            data.push({});
            data[count].section = file.match(/[0-9]{5}/)[0];
            data[count].code = file.match(/^.{3}-.{3}/)[0];
            data[count].meeting = []; 
            data[count].name = '';
          } else {
            data[count].code = file;
          }
        } else if (file.match(/^[A-Z]{1,2}$/) !== null) {
          course ++;
          data[count].meeting.push({});
          data[count].meeting[course].day = file;
        } else if (file.match(/^[0-9]{2}\:[0-9]{2}-/) !== null) {
          data[count].meeting[course].time = file;
        } else if (file.match(/^[A-Z]-[0-9]{3}/) !== null) {
          data[count].meeting[course].room = file;
        } else if (file.match(/^.+\,/) !== null) {
          data[count].teacher = file;
        } else {
          data[count].name += file.toString();
        }
      });
  });
  pdfData = data;
  console.log(pdfData);
  console.log(evtData.data.Pages.length);
};

var _onPFBinDataError = function (evtError) {
  console.log('error');
};

pdfParser.on('pdfParser_dataReady', _.bind(_onPFBinDataReady, this));

pdfParser.on('pdfParser_dataError', _.bind(_onPFBinDataError, this));

var fileName = 'science.pdf';
var pdfFilePath = 'test_files/' + 'science.pdf';

var jsonName = fileName.match(/^[a-zA-Z]+/)[0] + '.json';

pdfParser.loadPDF(pdfFilePath);

// or call directly with buffer
fs.readFile(pdfFilePath, function (err, pdfBuffer) {
  if (!err)
    pdfParser.parseBuffer(pdfBuffer);
});

setTimeout(function () {
  fs.writeFile(jsonName, JSON.stringify(pdfData, null, 2), 'utf8');
}, 3000);
