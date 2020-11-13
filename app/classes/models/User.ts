import db from '../../config/connection';
import { QueryMaker, Role } from '../../classes';
import bcrypt from 'bcrypt';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class User {
    private username: string; // not null, unique
    private password: string; // not null
    private first_name: string; // not null
    private last_name: string; // not null
    private email: string; // not null
    private role_id: Role; // not null

    constructor(obj) {      
        if(!obj) {
            return;   
        }          
        this.username = obj.username;
        this.password = obj.password;
        this.first_name = obj.first_name;
        this.last_name = obj.last_name;
        this.email = obj.email;
        this.role_id = obj.role_id;
    }
    
    static async hashPass(pass) {        

        //generate a salt, hash password, then return hashed password
         const saltBae = await bcrypt.genSalt(10);
         const hashed = await bcrypt.hash(pass, saltBae)
         return hashed;
    }

    static async checkUser(req, username, password){

        // get the hashed password (y) and compare it to the one in the db 
        const x = await db.query(QueryMaker.getHashedPass(), [username]);
        const y = x.rows[0].password;
        const match = await bcrypt.compare(password, y);

        // set req.password to use on login controller
        req.password = y;

        // login if match is true
        return match;     
    }
}

export default User;