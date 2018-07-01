import { Router, Request, Response } from 'express'
import {AdminPublicMessage as Admin} from '../socket/adminSocket'

class DashboardController {

    router: Router

    constructor (){
        this.router = Router()        
        this.routes()
    }

    routes (){
        
        this.router.get('/kirimData', (req: Request, res: Response) => {
            Admin.ioNameSpace.emit('data', req.query["data"]);
            res.json({"test":"yoi"})
        })

    }

}

export default new DashboardController().router