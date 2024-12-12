import { PaymentMethod } from "../../../application/interfaces/PaymentMethod";

export class CreditCardPayment implements PaymentMethod {
    async processPayment(amount: number): Promise<void> {
        console.log(`Processing credit card payment of $${amount}`);
    }
}