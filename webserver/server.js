/**
 * Created by pac on 26/03/16.
 */
var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
var url = require("url");
var request = require('request');
var HTMLcode = "";

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        urlProcess(req);
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

function urlProcess(req) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        request({uri: fields.website}, function (error, response, body) {
            HTMLcode = body;
            console.log(HTMLcode);
        });
    });
}

server.listen(8081);
console.log('Server running at http://127.0.0.1:8081/');