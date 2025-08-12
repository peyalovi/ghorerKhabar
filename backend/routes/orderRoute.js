import express from 'express';
import authUser from '../middlewares/authUser.js';
import authChef from '../middlewares/authChef.js';
import { getUserOrders, placeOrderCOD, getAllOrders, placeOrderStripe } from '../controllers/orderController.js';


const orderRouter = express.Router();

orderRouter.post('/cod', authUser, placeOrderCOD)
orderRouter.get('/user', authUser, getUserOrders)
orderRouter.get('/chef', authChef, getAllOrders)
orderRouter.post('/stripe', authUser, placeOrderStripe)

export default orderRouter;