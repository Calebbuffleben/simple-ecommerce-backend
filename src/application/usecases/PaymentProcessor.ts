import { PaymentMethod } from "../interfaces/PaymentMethod";

export class PaymentProcessor {
    constructor(private paymentMethod: PaymentMethod) {}

    async processPayment(amount: number): Promise<void>{
        await this.paymentMethod.processPayment(amount);
    }
}