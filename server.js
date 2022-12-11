const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request is made');
});

server.listen(3000, 'localhost',  () => {
    console.log('listening for requests on post 3000 for Nasim Qureshi')
})
