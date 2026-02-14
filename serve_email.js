const http = require('http');

const server = http.createServer((req, res) => {
    // Always include the bypass header just in case
    res.setHeader('Bypass-Tunnel-Reminder', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url === '/email' || req.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(200);
        res.end('24f2002015@ds.study.iitm.ac.in');
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(8080, '0.0.0.0', () => {
    console.log('Server running on port 8080');
});
