const {createServer} =require('node:http');

function createApp(){
    return createServer((request, response)=>{
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end('ma che è sta roba')
    })
}

module.exports = createApp;