import express from 'express';
import { PaymentController } from '../../adapters/controllers/PaymentController';

const router = express.Router();
const controller  = new PaymentController();

router.post('/pay', async (req, res) => {
    await controller.handlePayment(req, res);
});

export default router;