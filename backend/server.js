const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === '/') {
    fs.readFile('../frontend/index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading page');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } 
  else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page');
  } 
  else if (req.url === '/pratiksha') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Pratiksha');
  } 
  else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('API is working');
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
});
//trigger
server.listen(3001, () => {
  console.log('Server running on port 3001');
});


