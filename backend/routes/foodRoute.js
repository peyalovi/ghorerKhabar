import express from 'express';
import { upload } from '../configs/multer.js';
import authChef from '../middlewares/authChef.js';
import { addFood, allFoods, changeStock, foodById, foodList, } from '../controllers/foodController.js';

const foodRouter = express.Router();

foodRouter.post('/add', authChef, upload.array('images'), addFood)
foodRouter.get('/list', authChef, foodList)
foodRouter.get('/all', allFoods);
foodRouter.get('/id', foodById)
foodRouter.post('/stock', authChef, changeStock)

export default foodRouter;