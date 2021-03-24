const express = require('express');
const path = require('path');
const htpp = require('http')


const app = express();

const server = htpp.createServer(app)

server.listen(3000)

app.use(express.static(path.join(__dirname, 'public')));