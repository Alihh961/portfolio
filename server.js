const http = require('http');

const dotenv = require('dotenv');



let app = require('./app');
let server = http.createServer(app);

dotenv.config({path: './config.env'}); // it must before the declaration of app



const port =process.env.PORT || 3000;

server.listen(port || 3000, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log('Server connected');
    }
});

