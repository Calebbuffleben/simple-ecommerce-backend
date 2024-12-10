import express from 'express';
import { PaymentController } from '../../adapters/controllers/PaymentController';

const router = express.Router();
const paymentController  = new PaymentController();

router.post('/pay', async (req, res) => {
    await paymentController.handlePayment(req, res);
});

export default router;