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
var links;
var wikiRegex = new RegExp('\/wiki\/[^.]');
urls = new Set();
branching = 1;

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        parseForm(req);
        parseURL(urls);
        parseURL(urls);
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
        var element = {url: fields.website, parsed: false};
        urls.push(element);
        // branching = fields.branch;
        // console.log("Adding element "+urls.length);
    });
}

function parseURL(urlArray) {
    for(var i = 0; i < urlArray.length; i++){
        request(urlArray[i].url, function(err, resp, body){
                $ = cheerio.load(body);
                links = $('a');
                $(links).each(function(i, link){
                    var linkString;
                    linkString = $(link).attr('href');
                    if(linkString != undefined && linkString.match(wikiRegex))
                    {
                        console.log("Parsing element "+linkString+" : "+i);
                        var element  = { url: 'https://en.wikipedia.org'+linkString.toString(), parsed: false};
                        urlArray.push(element);
                        // console.log("URL array length: "+urlArray.length);
                    }
                });
            });
            urlArray[i].parsed = true;
    }
}

server.listen(8081);
console.log('Server running at http://127.0.0.1:8081/');