// imports
import { Request, Response } from 'express';
import db from '../config/connection';
import { QueryMaker, Cat } from '../classes';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default {

     // CREATE a new db entry  
     addOne: async (req: Request, res: Response) => {
        try {            
            const color = new Cat(req.body);
            const myKeys = Object.keys(color);
            const myVals = Object.values(color);
            await db.query(QueryMaker.insertOne('colors', myKeys), myVals); 
            res.json({message: 'New Color added!!'});
        } catch (err) { throw err }; 
    },

    // GET all colors in the database
    getAll: async (req: Request, res: Response) => {
        try {                 
            const x = await db.query(QueryMaker.getAll('colors'))
            res.json(x.rows);
        } catch (err) { throw err; }
    },

    // READ a single color
    getById: async (req: Request, res: Response) => {
        try {
            const x = await db.query(QueryMaker.getOne('colors', '_id'), [req.params.colorId]);
            res.json(x.rows[0]);
        }  catch (err) { throw err; }      
    },

     // UPDATE a new db entry  
     updateOne: async (req: Request, res: Response) => {
        try {            
            const x = await db.query( QueryMaker.getOne('colors', '_id'), [req.params.colorId]);
            const color = new Cat({...x.rows[0], ...req.body});
            const myKeys = Object.keys(color);
            const myVals = Object.values(color);
            const valsAndID =  [req.params.colorId, ...myVals]
            await db.query( QueryMaker.setOne('colors', '_id', myKeys.length, myKeys), valsAndID); 
            res.json({message: 'Color updated !!'});
        } catch (err) { throw err }; 
    },

     // DELETE a new db entry  
     deleteOne: async (req: Request, res: Response) => {
        try {            
            await db.query( QueryMaker.deleteOne('colors', '_id'), [req.params.colorId]);
            res.json({message: `Color deleted !!`});
        } catch (err) { throw err }; 
    }
       
    
}