import {createServer} from 'node:http';
const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Olá Mundo!\n');
});
// inicializar o servidor http localmente na porta 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('listenning on 127.0.0.1:3000')
});
// execute com ´node server.mjs`