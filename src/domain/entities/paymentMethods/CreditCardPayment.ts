import { IPaymentMethod } from "../../../application/interfaces/IPaymentMethod";

export class CreditCardPayment implements IPaymentMethod {
    async processPayment(data: any){
        console.log(`Processing credit card payment of $${data}`);

        return { status: 'success', method: 'credit_card' }
    }
}