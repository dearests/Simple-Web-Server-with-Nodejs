var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

//Array of Mime Types

var mimeType = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};


//Create Server

http.createServer(function (req, res) {
    var uri = url.parse(req.url).pathname;
    var fileName = path.join(process.cwd(), unescape(uri))

    console.log("Loading "+uri);
    var stats;

    try {
        stats = fs.lststSync(fileName);
        console.log(stats)
    } catch(fileName) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found\n');
        res.end();
        return;
    }
}).listen(8080);