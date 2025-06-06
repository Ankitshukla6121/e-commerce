import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
const port = process.env.PORT || 3000;

// Connect to DB and Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use("/api/cart",cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
