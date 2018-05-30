// const express = require('express')

// const app = express();
// // load controllers
console.log('index.js');
console.log('a thing');




/*
## Webpack notes

- shit loads of errors are caused by it trying to bundle all the node modules
- use target:node and the NodeExternals plugin
- also this happens if you try to require the lib/boot inside /src/index.js

- entry point is not the server, you are expected to have a source folder which contains you code you will edit
- the server is a kind of set up file and you woulnd't change it on the fly

- package.json contains a 'main' attr which I have put server.js for  (check what is this )

 
 */