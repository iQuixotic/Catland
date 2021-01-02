// imports and variables
import catsController from '../controllers/cats-controller';
import { Router } from 'express';
const router = Router();

router.route('/')
    .get(catsController.getAll)
    .post(catsController.addOne)

router.route('/:catId')
    .get(catsController.getById)
    .put(catsController.updateOne)
    .delete(catsController.deleteOne);

export default router;