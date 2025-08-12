import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';
import userRouter from './routes/userRoute.js';
import chefRouter from './routes/chefRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import foodRouter from './routes/foodRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';
import { stripeWebhooks } from './controllers/orderController.js';

const app = express();
const port = process.env.PORT || 4000;

await connectDB()
await connectCloudinary()

//Allow multiple origins
const allowedOrigins = ['http://localhost:5173']

app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks)

//Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));


app.get('/', (req, res) => res.send("API is working"));
app.use('/api/user', userRouter)
app.use('/api/chef', chefRouter)
app.use('/api/food', foodRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})