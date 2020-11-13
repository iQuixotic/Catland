import jwt from 'jsonwebtoken';
import db from '../config/connection';
import { QueryMaker } from '../classes';
import SECRET from '../config/secret';

// middlewares
export default {

    isFinance: (req, res, next) => {
        console.log(req.authData)
    },
    
    isAdmin: (req, res, next) => {

    },

    isDefault: (req, res, next) => {

    },

    isSelf: (req, res, next) => {

    }
}