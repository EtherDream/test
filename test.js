const http = require('http')

http.get('http://node-bwh-la.etherdream.com:7777/', res => {})

http.createServer((req, res) => {
	console.log(req.connection.remoteAddress)
	res.end('hello')
}).listen(7777)
