import { PaymentMethod } from "../../application/interfaces/PaymentMethod";
import { CreditCardPayment } from "../../application/usecases/paymentMethods/CreditCardPayment";
import { PayPalPayment } from "../../application/usecases/paymentMethods/PayPalPayment";

export class PaymentMethodFactory {
    static create(method: string): PaymentMethod {
        switch (method) {
            case 'credit-card':
                return new CreditCardPayment();
            case 'pay-pal':
                return new PayPalPayment();
            default:
                return new PayPalPayment();
        }
    }
}