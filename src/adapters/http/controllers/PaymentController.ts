import { Request, Response } from 'express';
import { PaymentProcessor } from '../../../application/usecases/PaymentProcessor';
import { PaymentMethodFactory } from '../../../application/factories/PaymentMethodFactory';
import { PaymentMethodTypes } from '../../../application/types/PaymentMethod';

export class PaymentController {
    private paymentProcessor: PaymentProcessor;

    constructor() {
        const paymentMethod = PaymentMethodFactory.createPaymentMethod(PaymentMethodTypes.CREDIT_CARD);
        this.paymentProcessor = new PaymentProcessor(paymentMethod);
    }

    processPayment = async (req: Request, res: Response) => {
        try {
            const paymentResult = await this.paymentProcessor.execute(req.body);
            res.status(200).json(paymentResult);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}