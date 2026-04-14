const http = require('http');
const fs = require('fs');
const exec = require('child_process').exec;
const PORT = process.env.PORT || 3000; 

// create HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Hello world!');
    } else {
        // Catch-all for any other routes to prevent the server from hanging
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
    }
}); // <-- Added the missing closing brace and parenthesis here

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
