import express from require('express');
import routes from require('./routes');
class App{
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
     }
    
    routes() {
        this.server.use(routes)
    }
}

module.exports = new App().server