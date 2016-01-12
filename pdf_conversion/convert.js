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
    /[A-Z]{3}\s-\s/, // matching liberal arts and alc shit
    /^[0-9]+\./ // match program name
  ];
  var count = -1; // for the foreach loop
  var course = -1;
  var track = []; // to prevent duplication using page numbers
  evtData.data.Pages.forEach(function (page, i) {
    var sorted = page.Texts.sort(function (a, b) {
      if (a.y === b.y) {
        return a.x - b.x;
      } else {
        return a.y - b.y;
      }
    });
    var pageNum = sorted[sorted.length-1].R[0].T;
    for (var j = 0; j < track.length; j ++) {
      if (pageNum == track[j])
        return;
    }
    track.push(pageNum);
    sorted.
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
        } else if (file.match(/^(M|T|W|H|F|S){1,3}$/) !== null) {
          course ++;
          data[count].meeting.push({});
          data[count].meeting[course].day = file;
        } else if (file.match(/^[0-9]{2}\:[0-9]{2}-/) !== null) {
          data[count].meeting[course].time = file;
        } else if (file.match(/^[A-Z]-[0-9]{3}/) !== null) {
          data[count].meeting[course].room = file;
        } else if (file.match(/^[0-9]{3}$/) !== null) {
          data[count].meeting[course].room = file;
        } else if (file.match(/^AUD$/) !== null) {
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
  fs.writeFile(jsonName, JSON.stringify(pdfData, null, 2), 'utf8');
};

var _onPFBinDataError = function (evtError) {
  console.log('error');
};

pdfParser.on('pdfParser_dataReady', _.bind(_onPFBinDataReady, this));

pdfParser.on('pdfParser_dataError', _.bind(_onPFBinDataError, this));

// input filename as a commandline argument
var pdfFilePath = process.argv[2];
var fileName = pdfFilePath.match(/[a-zA-Z\-\_]+\.(pdf|PDF)/)[0];

var jsonName = fileName.match(/^[a-zA-Z\_]+/)[0] + '.json';

pdfParser.loadPDF(pdfFilePath);

// or call directly with buffer
fs.readFile(pdfFilePath, function (err, pdfBuffer) {
  if (!err)
    pdfParser.parseBuffer(pdfBuffer);
});
