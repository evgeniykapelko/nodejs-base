// const userObj = require('./user');


// console.log(userObj);
// console.log(__dirname);
// console.log(__filename)
// (function(require, module, exports, __filename, __dirname) {})()

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write('Hello from NodeJS');
    res.end();
});

server.listen(3002, () => {
    console.log('Server is running...')
})