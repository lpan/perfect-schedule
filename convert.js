var fs = require('fs');
var _ = require('underscore');
var PDFParser = require('./node_modules/pdf2json/pdfparser');

var pdfParser = new PDFParser();
var pdfData = [];

var _onPFBinDataReady = function (evtData) {
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
  evtData.data.Pages.forEach(function (page) {
    page.Texts.
      sort(function (a, b) {
        if (a.y === b.y) {
          return a.x - b.x;
        } else {
          return a.y - b.y;
        }
      }).
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
      filter(function (item) {
        return item !== undefined && item !== '';
      }).
      forEach(function (file) {
        if (file.match(/^[0-9]{5}$/) !== null) {
          console.log('yeah');
          count ++;
          course = -1;
          pdfData.push({});
          pdfData[count].section = file;
          pdfData[count].meeting = [];
        } else if (file.match(/^.{3}-.{3}/) !== null) {
          pdfData[count].code = file;
        } else if (file.match(/^[A-Z]{1,2}$/) !== null) {
          course ++;
          pdfData[count].meeting.push({});
          pdfData[count].meeting[course].day = file;
        } else if (file.match(/^[0-9]{2}\:[0-9]{2}-/) !== null) {
          pdfData[count].meeting[course].time = file;
        } else if (file.match(/^[A-Z]-[0-9]{3}/) !== null) {
          pdfData[count].meeting[course].room = file;
        } else if (file.match(/^.+\,\s[a-zA-Z]+$/) !== null) {
          pdfData[count].teacher = file;
        } else {
          pdfData[count].name = file;
        }
      });
  });
  pdfData.filter(function (file) {
    return JSON.stringify(file) !== '{}';
  });
  console.log(pdfData);
};

var _onPFBinDataError = function (evtError) {
  console.log('error');
};

pdfParser.on('pdfParser_dataReady', _.bind(_onPFBinDataReady, this));

pdfParser.on('pdfParser_dataError', _.bind(_onPFBinDataError, this));

var pdfFilePath = 'test_files/science.pdf';

pdfParser.loadPDF(pdfFilePath);

// or call directly with buffer
fs.readFile(pdfFilePath, function (err, pdfBuffer) {
  if (!err)
    pdfParser.parseBuffer(pdfBuffer);
});

setTimeout(function () {
  fs.writeFile('test.json', JSON.stringify(pdfData, null, 2), 'utf8');
}, 3000);
