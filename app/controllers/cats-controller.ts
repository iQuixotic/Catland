// imports
import { Request, Response } from 'express';
import db from '../config/connection';
import { QueryMaker, Cat, Rating } from '../classes';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default {

     // CREATE a new db entry  
     addOne: async (req: Request, res: Response) => {
        try {            
            const cat = new Cat(req.body);
            const myKeys = Object.keys(cat);
            const myVals = Object.values(cat);
            await db.query(QueryMaker.insertOne('cats', myKeys), myVals); 
            res.json({message: 'New cat added!!'});
        } catch (err) { throw err }; 
    },

    // GET all cats in the database
    getAll: async (req: Request, res: Response) => {

        try {
            // gets passed to the query
            const joinFieldsOnArr = ['cats._id',
                'cats.name',  'cats.picture', 
                'ratings.age', 
                'ratings.cuddly', 'ratings.playful',
                'ratings.clean', 'ratings.dog_friendly']; 

            // query JOIN reimbursements.author to author._id
            const x = await db.query(
                QueryMaker.getJoinedTbl('cats', joinFieldsOnArr, 
                'ratings', 'cats.ratings_id', 
                'ratings._id'));
                
                console.log(x.rows)
            return res.json(x.rows);
        } catch (err) { throw err; }
    },

    // READ a single cat
    getById: async (req: Request, res: Response) => {
        try {
            // gets passed to the query
            const joinFieldsOnArr = ['cats._id',
                'cats.name',  'cats.picture', 
                'ratings.age', 
                'ratings.cuddly', 'ratings.playful',
                'ratings.clean', 'ratings.dog_friendly']; 

            // query JOIN reimbursements.author to author._id
            const x = await db.query(
                QueryMaker.getSingleJoinedTbl('cats', joinFieldsOnArr, 
                'ratings', 'cats.ratings_id', 
                'ratings._id'), [req.params.catId]);
                
            return res.json(x.rows);
        } catch (err) { throw err; }
    },

     // UPDATE a new db entry  
     updateOne: async (req: Request, res: Response) => {
        try {         
            const x = await db.query( QueryMaker.getOne('cats', '_id'), [req.params.catId]);
            const rat = x.rows[0].ratings_id
            const y = await db.query( QueryMaker.getOne('ratings', '_id'), [rat]);
            const cat = new Cat({...x.rows[0], ...req.body});
            const ratings = new Rating({...y.rows[0], ...req.body})
            const myCatKeys = [x.rows[0]._id, ...Object.keys(cat)];
            const myCatVals = Object.values(cat);
            const myRatingKeys = [x.rows[0].ratings_id, ...Object.keys(ratings)];
            const myRatingVals = Object.values(ratings);
            const catValsAndID =  [req.params.catId, ...myCatVals]
            const ratingValsAndID =  [rat, ...myRatingVals]
            await db.query( QueryMaker.setOne('cats', '_id', myCatKeys.length-1, myCatKeys), catValsAndID); 
            await db.query( QueryMaker.setOne('ratings', '_id', myRatingKeys.length-1, myRatingKeys), ratingValsAndID); 
            return res.json({message: 'cat updated !!'});
        } catch (err) { throw err }; 
    },

     // DELETE a new db entry  
     deleteOne: async (req: Request, res: Response) => {
        try {            
            await db.query( QueryMaker.deleteOne('cats', '_id'), [req.params.catId]);
            res.json({message: `cat deleted !!`});
        } catch (err) { throw err }; 
    }
       
    
}