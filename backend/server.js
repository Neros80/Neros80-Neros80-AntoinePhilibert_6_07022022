const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);//lance le port par default de l'environement sinon le port 3000