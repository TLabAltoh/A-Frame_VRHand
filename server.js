const fs = require("fs");
const https = require("https");
const html = fs.readFileSync('AFrame-test/index.html');
const port = 443;
const bar = "----------------";

const ssl_server_key = "./SelfSigned/server.key";
const ssl_server_crt = "./SelfSigned/server.crt";
const options = {
	key: fs.readFileSync(ssl_server_key),
	cert: fs.readFileSync(ssl_server_crt)
};

const server = https.createServer(options, (request, response) => {
	console.log("client connected " + bar);
	response.writeHead(200, {"Content-Type": "text/html"});
	response.end(html);
});

server.listen(port);

console.log("server start " + bar);
