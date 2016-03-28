/**
 * Created by pac on 26/03/16.
 */

var http = require("http");
var fs = require('fs');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'}); // Send the HTTP header | HTTP Status: 200 : OK  | Content Type: text/plain
    displayForm(response)
}).listen(8081);


function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': data.length
        });
        res.write(data);
        console.log('Loaded form HTML');
        res.end();
    });
}

console.log('Server running at http://127.0.0.1:8081/');