// imports and variables
import { Router } from 'express';
import MW from '../utils/JWT';
import userRoutes from './users';
import loginRoutes from './login';
import registerRoutes from './register';
import reimbursementRoutes from './reimbursements';
const router = Router();

// register and login
router.use('/register', registerRoutes);
router.use('/login', loginRoutes);

// MW is a helper object that contains middleware for validation and auth
router.use('/users', 
    MW.verifyToken, MW.getPrivileges, userRoutes);

router.use('/reimbursements', 
    MW.verifyToken, MW.getPrivileges, reimbursementRoutes);

export default router;