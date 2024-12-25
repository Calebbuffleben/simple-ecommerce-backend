import { IPaymentMethod } from '../../../application/interfaces/IPaymentMethod';

export class CryptoCurrencyPayment implements IPaymentMethod {
    async processPayment(data: any) {
        console.log(`Processing crypto payment of $${data}`);

        return { status: 'success', method: 'crypto' }
    }
}