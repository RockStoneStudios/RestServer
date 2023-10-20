import {Request,Response} from 'express'


export class TodoController {


     constructor() {}

     public getTodos = (req:Request,res:Response) => {
        res.json([
            {id : 1, text : 'Buy Milk'},
            {id : 2, text : 'Buy Bread'},
            {id : 3, text : 'Buy Butter'}
        ])
     }

}