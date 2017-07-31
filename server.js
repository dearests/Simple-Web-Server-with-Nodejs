var http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write("Up and running....")
    res.end();
}).listen(8080);

console.log("Server running on port 8080");