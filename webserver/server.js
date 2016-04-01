/**
 * Created by Parth Chandratreya on 26/03/16.
 */
var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
var url = require("url");
var request = require('request');
var cheerio = require('cheerio');
var website;
var links;
var wikiRegex = new RegExp('\/wiki\/[^"]+/g');

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        parseForm(req);
        parseURL(website);
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

function parseForm(req) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
        website = fields.website;
        console.log(website);
    });
}

function parseURL(url){
    console.log(url);
    // request(url, function(err, resp, body){
    //     $ = cheerio.load(body);
    //     links = $('a'); //jquery get all hyperlinks
    //     $(links).each(function(i, link){
    //         console.log($(link).text() + ':\n  ' + $(link).attr('href'));
    //     });
    // });
}

server.listen(8081);
console.log('Server running at http://127.0.0.1:8081/');