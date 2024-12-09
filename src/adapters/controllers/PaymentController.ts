import { PaymentProcessor } from '../../application/usecases/PaymentProcessor';
import { PaymentMethodFactory } from '../factories/PaymentMethodFactory';

export class PaymentController {
    async handlePayment(req: any, res: any): Promise<void> {
        try {
            const { amount, method } = req.body;
            const paymentMethod = PaymentMethodFactory.create(method);

            const processor = new PaymentProcessor(paymentMethod);
            await processor.processPayment(amount);

            res.status(200).send({ message: 'Payment processed successfully' });
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}