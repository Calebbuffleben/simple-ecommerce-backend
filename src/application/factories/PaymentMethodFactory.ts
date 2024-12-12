import { IPaymentMethod } from "../interfaces/IPaymentMethod";
import { CreditCardPayment } from "../../domain/entities/paymentMethods/CreditCardPayment";
import { PayPalPayment } from "../../domain/entities/paymentMethods/PayPalPayment";
import { PaymentMethodTypes } from "../types/PaymentMethod";

export class PaymentMethodFactory {
    static createPaymentMethod(method: string): IPaymentMethod {
        switch (method) {
            case PaymentMethodTypes.CREDIT_CARD:
                return new CreditCardPayment();
            case PaymentMethodTypes.PAYPAL:
                return new PayPalPayment();
            default:
                throw new Error(`Payment method ${method} is not supported.`);
        }
    }
}