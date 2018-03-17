"use strict";
exports.__esModule = true;
var stream = require("stream");
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    var fileContents = Buffer.from('example css file');
    var readStream = new stream.PassThrough();
    readStream.end(fileContents);
    res.set('Content-Disposition', 'attachment; filename=theme.css');
    res.set('Content-Type', 'text/plain');
    readStream.pipe(res);
});
var port = 8080;
app.listen(port, function () { return console.log("Server running on port " + port + "..."); });
