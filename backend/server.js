const http = require('http');

const server = http.createServer((req, res) => {
    res.end('réponse du serv');
});

server.listen(process.env.PORT || 3000);