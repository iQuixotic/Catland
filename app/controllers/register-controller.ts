// imports and variables
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import db from '../config/connection';
import { User, QueryMaker } from '../classes';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default {

    // register a new user
    addOne: async (req: Request, res: Response) => {
        console.log('and I am here')
            
        try {
            console.log('reqbody', req.body)
            //generate a salt
            const saltBae = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, saltBae);

                    let obj = {
                        _id: req.body._id,
                        username: req.body.username, 
                        password: hashed,                       
                        first_name: req.body.first_name, 
                        last_name: req.body.last_name, 
                        email: req.body.email, 
                        role_id: req.body.role_id
                    }
                    console.log('object', obj)

                    const user = new User(obj);
                    console.log(user)

                    // deconstruct user into arrays like: [keys] [vals]
                    const myKeys = [...Object.keys(user)];
                    const myVals = [...Object.values(user)];
                    console.log(myKeys)

                    // insert user
                    await db.query(QueryMaker.insertOne('users', myKeys), myVals);           
            res.status(201).json({
                message: `New user ${req.body.username} created !!`
            });
        } catch (err) {
            res.status(500).json({error: err});
        } 
    }
}