import { PaymentMethod } from "../../interfaces/PaymentMethod";

export class CreditCardPayment implements PaymentMethod {
    async processPayment(amount: number): Promise<void> {
        console.log(`Processing credit card payment of $${amount}`);
    }
}