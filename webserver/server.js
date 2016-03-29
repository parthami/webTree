/**
 * Created by pac on 26/03/16.
 */

var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
var url = require("url");

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        fieldProcess(req, res);
    }
});

function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function fieldProcess(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
       urlProcess(fields.website);
    });
}

function urlProcess(urlString) {
    console.log(urlString);
    http.get({host:url.format(urlString)}, function(res) {
        console.log("Got response: " + res.statusCode);
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });

}

server.listen(8081);
console.log('Server running at http://127.0.0.1:8081/');