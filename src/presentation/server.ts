import express, { Router } from 'express';

interface Options {
    port: number;
    routes : Router;
    public_path? : string;
}



export class Server {
    private app = express();
    private readonly port: number;
    private readonly publicPath : string;
    private readonly routes: Router; 

    constructor(options :Options){
       const {port,public_path='public',routes} = options;
       this.port = port;
       this.publicPath = public_path;
       this.routes = routes;
    }

    async start(){

        this.app.use(express.static(this.publicPath));
        
        /*Routes */
        this.app.use(this.routes)

        this.app.listen(this.port,()=>{
            console.log(`Starting Server on Port --> ${this.port}`)
        })
    }
}