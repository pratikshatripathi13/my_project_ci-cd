const http = require('http');

http.createServer((req, res) => {
  res.end("🔥 Response from Server 1");
}).listen(3001, '0.0.0.0', () => {
  console.log("Server 1 running on 3001");
});
