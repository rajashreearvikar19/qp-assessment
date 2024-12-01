import express, { Application } from 'express';
import connectDB from './utils/db';
import adminRoutes from './routes/admin.routes';
import userRoutes from './routes/user.routes';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT: string | number = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

// Connect to Database and Start Server
const startServer = async (): Promise<void> => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
};

startServer();
