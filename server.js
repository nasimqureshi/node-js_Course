const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(3000, 'localhost',  () => {
    console.log('listening for requests on post 3000 for Nasim Qureshi')
})
