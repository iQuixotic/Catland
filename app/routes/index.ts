// imports and variables
import { Router } from 'express';
import MW from '../utils/JWT';
import userRoutes from './users';
import loginRoutes from './login';
import registerRoutes from './register';
const router = Router();

// register and login
router.use('/register', registerRoutes);
router.use('/login', loginRoutes);

// MW is a helper object that contains middleware for validation and auth
router.use('/users', 
    MW.verifyToken, MW.getPrivileges, userRoutes);
    
export default router;