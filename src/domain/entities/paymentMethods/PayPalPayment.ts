import { PaymentMethod } from  "../../../application/interfaces/PaymentMethod";

export class PayPalPayment implements PaymentMethod {
    async processPayment(amount: number): Promise<void> {
        console.log(`Processing paypal payment of $${amount}`);
    }
}