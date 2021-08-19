//const chalk = require('chalk');
//const text = require('./data');
//console.log(chalk.blue(text));
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    /*   if (req.url === '/') {
           fs.readFile(path.join(__dirname, 'DEMO', 'public', 'index.html'), (err, data) => {
               if (err) throw err.message;
               res.end(data);
           })
       }*/
    const filePath = path.join(__dirname, 'DEMO', 'public', req.url === '/' ? 'index.html' : req.url);
    let contentType = 'text/html';
    const ext = path.extname(filePath);
    switch (ext) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/js';
            break;
    }
    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'DEMO', 'public', 'error.html'), (readFileError, data) => {
                if (readFileError) {
                    res.writeHead(500);
                    res.end('Не удалось найти файл error');
                } else {
                    res.writeHead(200, {
                        'Content-Type': contentType
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content)
        }
    })
});
//res.writeHead(200, {'Content-Type': 'text/html'});
//  console.log(req.url);
// res.end('Hello, server and Evgeniy');
server.listen(3000, () => {
    console.log('Server has been started');
});
