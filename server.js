const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
res.setHeader('Content-type', 'text/html');

res.write('<head><link rel="stylesheet" href="#"</head>');
res.write('<p>I am ok</p>');
res.write('<p>How about you</p>');
res.end();
});


server.listen(3000, 'localhost',  () => {
    console.log('listening for requests on post 3000 for Nasim Qureshi')
})
