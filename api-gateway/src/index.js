const server = require('./server');

server
    .init()
    .then(resolve => resolve)
    .catch(err => console.error("Server can't start", err));
