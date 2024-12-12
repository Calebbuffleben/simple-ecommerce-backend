export interface IPaymentMethod {
    processPayment(data: any): Promise<any>;
}