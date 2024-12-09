export interface PaymentMethod {
    processPayment(amount: number): Promise<void>;
}