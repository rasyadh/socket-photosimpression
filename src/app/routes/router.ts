import * as express from 'express'

import dashboardController from '../controllers/dashboard.controller';

class Router {

    router: express.Router
    
    constructor (){
        this.router = express.Router()
        this.routes()
    }

    routes (){  
        this.router.use('/', dashboardController)
    }
}

export const router = new Router().router