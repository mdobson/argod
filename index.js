var program = require("commander"),
    pkg = require("./package.json"),
    version = pkg.version,
    argo = require("argo"),
    path = require("path");

program
  .version(version)
  .usage("[options] [proxy_file]")
  .option("-p, --port [port]", "Port to run your proxy on. Default: 3000", 3000, parseInt)
  .option("-h, --hostname [hostname]", "Hostname for proxy to listen on. Default: Localhost", "localhost")
  .option("-b, --backlog", "Backlog setting.")
  .option("-c, --cert [cert]", "Certificate setting. Required for SSL")
  .option("-k, --key [key]", "Key setting. Required for SSL")
  .parse(process.argv)

//This is the path to the exported proxy.


var port = program.port;
var hostname = program.hostname;
var backlog = program.backlog;
var cert = program.cert;
var key = program.key;

var file = null;
if (!backlog) {
  file = program.args.shift();
} else {
  program.args.shift();
  file = program.args.shift();
}

var fileLocation = path.join(__dirname, file);

var server = require(fileLocation);

server.listen(port);

