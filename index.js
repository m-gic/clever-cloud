const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000; 

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('服务器内部错误：无法读取 index.html');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 页面未找到');
    }
});

server.listen(PORT, () => {
    console.log(`服务器已启动，正在监听端口 ${PORT}`);
    console.log(`请确保 index.html 文件与此脚本在同一目录下。`);
});
