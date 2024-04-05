const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// 使用express创建服务器的用例
// const express = require('express')
// const app = express()
// const usersRouter = require('./routers')

// app.use(express.json())
// app.use(express.urlencoded({extended: false}))
// app.use(usersRouter)

// app.listen(80, ()=>{
//     console.log('express server running at http://127.0.0.1')
// })