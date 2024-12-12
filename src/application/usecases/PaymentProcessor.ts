import { IPaymentMethod } from "../interfaces/IPaymentMethod";

export class PaymentProcessor {
    private paymentMethod: IPaymentMethod;

    constructor(paymentMethod: IPaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    async execute(data: any) {
        await this.paymentMethod.processPayment(data);
    }
}