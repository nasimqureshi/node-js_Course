const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
res.setHeader('Content-type', 'text/plain');

res.write('Hello. Nasim how are you');
res.end();
});


server.listen(3000, 'localhost',  () => {
    console.log('listening for requests on post 3000 for Nasim Qureshi')
})
