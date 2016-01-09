var nodeUtil = require("util"),
            fs = require('fs'),
            _ = require('underscore'),
            PDFParser = require('./node_modules/pdf2json/pdfparser');

var pdfParser = new PDFParser();

var _onPFBinDataReady = function (evtData) {
  evtData.data.Pages[1].Texts.forEach(function (file) {
    console.log(file.x);
  });
};

var _onPFBinDataError = function (evtError) {
};

pdfParser.on("pdfParser_dataReady", _.bind(_onPFBinDataReady, this));

pdfParser.on("pdfParser_dataError", _.bind(_onPFBinDataError, this));

var pdfFilePath = 'test_files/test.pdf';
console.log(pdfFilePath);

pdfParser.loadPDF(pdfFilePath);

// or call directly with buffer
fs.readFile(pdfFilePath, function (err, pdfBuffer) {
  if (!err) {
    pdfParser.parseBuffer(pdfBuffer);
  }
});
