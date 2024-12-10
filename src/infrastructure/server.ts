import express from 'express';
import paymentRoutes from './routes/paymentRoutes';

const app = express();

app.use(express.json());

// Register routes
app.use('/api', paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));